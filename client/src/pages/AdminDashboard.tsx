import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import {
  LogOut,
  Plus,
  Pencil,
  Trash2,
  FileText,
  ImageIcon,
  Eye,
  EyeOff,
  Home,
} from "lucide-react";
import { Link } from "wouter";

type Tab = "insight" | "popup";

// ─── 인사이트 폼 타입 ─────────────────────────────────────────────────────────
interface InsightForm {
  title: string;
  category: string;
  summary: string;
  content: string;
  coverImageUrl: string;
  published: boolean;
  readingTime: string;
}

const defaultInsightForm: InsightForm = {
  title: "",
  category: "일반",
  summary: "",
  content: "",
  coverImageUrl: "",
  published: false,
  readingTime: "5분",
};

// ─── 팝업 폼 타입 ─────────────────────────────────────────────────────────────
interface PopupForm {
  title: string;
  imageUrl: string;
  linkUrl: string;
  active: boolean;
}

const defaultPopupForm: PopupForm = {
  title: "",
  imageUrl: "",
  linkUrl: "",
  active: false,
};

export default function AdminDashboard() {
  const [, navigate] = useLocation();
  const [tab, setTab] = useState<Tab>("insight");

  // ─── 관리자 인증 확인 ────────────────────────────────────────────────────
  const { data: adminUser, isLoading: authLoading } = trpc.admin.me.useQuery();
  const logoutMutation = trpc.admin.logout.useMutation({
    onSuccess: () => navigate("/admin/login"),
  });

  useEffect(() => {
    if (!authLoading && !adminUser) {
      navigate("/admin/login");
    }
  }, [adminUser, authLoading, navigate]);

  // ─── 인사이트 상태 ────────────────────────────────────────────────────────
  const utils = trpc.useUtils();
  const { data: posts = [], isLoading: postsLoading } = trpc.insightAdmin.list.useQuery();
  const [insightDialog, setInsightDialog] = useState(false);
  const [editingPost, setEditingPost] = useState<number | null>(null);
  const [insightForm, setInsightForm] = useState<InsightForm>(defaultInsightForm);
  const [deletePostId, setDeletePostId] = useState<number | null>(null);

  const createPostMutation = trpc.insightAdmin.create.useMutation({
    onSuccess: () => {
      toast.success("게시글이 작성되었습니다.");
      utils.insightAdmin.list.invalidate();
      setInsightDialog(false);
      setInsightForm(defaultInsightForm);
    },
    onError: (e) => toast.error(e.message),
  });

  const updatePostMutation = trpc.insightAdmin.update.useMutation({
    onSuccess: () => {
      toast.success("게시글이 수정되었습니다.");
      utils.insightAdmin.list.invalidate();
      setInsightDialog(false);
      setEditingPost(null);
    },
    onError: (e) => toast.error(e.message),
  });

  const deletePostMutation = trpc.insightAdmin.delete.useMutation({
    onSuccess: () => {
      toast.success("게시글이 삭제되었습니다.");
      utils.insightAdmin.list.invalidate();
      setDeletePostId(null);
    },
    onError: (e) => toast.error(e.message),
  });

  const openCreateInsight = () => {
    setEditingPost(null);
    setInsightForm(defaultInsightForm);
    setInsightDialog(true);
  };

  const openEditInsight = (post: (typeof posts)[0]) => {
    setEditingPost(post.id);
    setInsightForm({
      title: post.title,
      category: post.category,
      summary: post.summary ?? "",
      content: post.content,
      coverImageUrl: post.coverImageUrl ?? "",
      published: post.published,
      readingTime: post.readingTime ?? "5분",
    });
    setInsightDialog(true);
  };

  const submitInsight = () => {
    if (!insightForm.title.trim() || !insightForm.content.trim()) {
      toast.error("제목과 내용을 입력해주세요.");
      return;
    }
    if (editingPost !== null) {
      updatePostMutation.mutate({ id: editingPost, ...insightForm });
    } else {
      createPostMutation.mutate(insightForm);
    }
  };

  // ─── 팝업 상태 ────────────────────────────────────────────────────────────
  const { data: popupList = [], isLoading: popupsLoading } = trpc.popupAdmin.list.useQuery();
  const [popupDialog, setPopupDialog] = useState(false);
  const [editingPopup, setEditingPopup] = useState<number | null>(null);
  const [popupForm, setPopupForm] = useState<PopupForm>(defaultPopupForm);
  const [deletePopupId, setDeletePopupId] = useState<number | null>(null);

  const createPopupMutation = trpc.popupAdmin.create.useMutation({
    onSuccess: () => {
      toast.success("팝업이 생성되었습니다.");
      utils.popupAdmin.list.invalidate();
      setPopupDialog(false);
      setPopupForm(defaultPopupForm);
    },
    onError: (e) => toast.error(e.message),
  });

  const updatePopupMutation = trpc.popupAdmin.update.useMutation({
    onSuccess: () => {
      toast.success("팝업이 수정되었습니다.");
      utils.popupAdmin.list.invalidate();
      setPopupDialog(false);
      setEditingPopup(null);
    },
    onError: (e) => toast.error(e.message),
  });

  const deletePopupMutation = trpc.popupAdmin.delete.useMutation({
    onSuccess: () => {
      toast.success("팝업이 삭제되었습니다.");
      utils.popupAdmin.list.invalidate();
      setDeletePopupId(null);
    },
    onError: (e) => toast.error(e.message),
  });

  const openCreatePopup = () => {
    setEditingPopup(null);
    setPopupForm(defaultPopupForm);
    setPopupDialog(true);
  };

  const openEditPopup = (popup: (typeof popupList)[0]) => {
    setEditingPopup(popup.id);
    setPopupForm({
      title: popup.title,
      imageUrl: popup.imageUrl ?? "",
      linkUrl: popup.linkUrl ?? "",
      active: popup.active,
    });
    setPopupDialog(true);
  };

  const submitPopup = () => {
    if (!popupForm.title.trim()) {
      toast.error("팝업 제목을 입력해주세요.");
      return;
    }
    if (editingPopup !== null) {
      updatePopupMutation.mutate({ id: editingPopup, ...popupForm });
    } else {
      createPopupMutation.mutate(popupForm);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-500">인증 확인 중...</div>
      </div>
    );
  }

  if (!adminUser) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center">
            <span className="text-white text-xs font-black">OT</span>
          </div>
          <span className="font-black text-slate-950 tracking-tight">오투HD 관리자</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button variant="outline" size="sm" className="rounded-xl gap-2">
              <Home className="w-4 h-4" /> 사이트 보기
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl gap-2 text-red-500 hover:text-red-600"
            onClick={() => logoutMutation.mutate()}
          >
            <LogOut className="w-4 h-4" /> 로그아웃
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* 탭 */}
        <div className="flex gap-2 mb-8 bg-white rounded-2xl border border-slate-200 p-1.5 w-fit">
          <button
            onClick={() => setTab("insight")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition ${
              tab === "insight"
                ? "bg-slate-950 text-white shadow"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            <FileText className="w-4 h-4" /> 인사이트 게시글
          </button>
          <button
            onClick={() => setTab("popup")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition ${
              tab === "popup"
                ? "bg-slate-950 text-white shadow"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            <ImageIcon className="w-4 h-4" /> 메인 팝업
          </button>
        </div>

        {/* ─── 인사이트 탭 ─────────────────────────────────────────────────── */}
        {tab === "insight" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-slate-950">인사이트 게시글</h2>
                <p className="text-sm text-slate-500 mt-1">게시글을 작성하고 공개 여부를 관리합니다.</p>
              </div>
              <Button onClick={openCreateInsight} className="rounded-xl gap-2 bg-slate-950 hover:bg-primary">
                <Plus className="w-4 h-4" /> 새 게시글
              </Button>
            </div>

            {postsLoading ? (
              <div className="text-center py-16 text-slate-400">불러오는 중...</div>
            ) : posts.length === 0 ? (
              <div className="text-center py-16 text-slate-400 bg-white rounded-2xl border border-slate-200">
                <FileText className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p>게시글이 없습니다. 첫 게시글을 작성해보세요.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl border border-slate-200 px-6 py-5 flex items-center justify-between gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs rounded-full">
                          {post.category}
                        </Badge>
                        {post.published ? (
                          <Badge className="text-xs rounded-full bg-green-100 text-green-700 border-0">
                            <Eye className="w-3 h-3 mr-1" /> 공개
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-xs rounded-full text-slate-400">
                            <EyeOff className="w-3 h-3 mr-1" /> 비공개
                          </Badge>
                        )}
                      </div>
                      <p className="font-bold text-slate-950 truncate">{post.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {new Date(post.createdAt).toLocaleDateString("ko-KR")} · {post.readingTime}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl"
                        onClick={() => openEditInsight(post)}
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl text-red-500 hover:text-red-600"
                        onClick={() => setDeletePostId(post.id)}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ─── 팝업 탭 ─────────────────────────────────────────────────────── */}
        {tab === "popup" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-slate-950">메인 팝업 관리</h2>
                <p className="text-sm text-slate-500 mt-1">
                  활성화된 팝업이 메인 페이지 방문 시 자동으로 표시됩니다.
                </p>
              </div>
              <Button onClick={openCreatePopup} className="rounded-xl gap-2 bg-slate-950 hover:bg-primary">
                <Plus className="w-4 h-4" /> 새 팝업
              </Button>
            </div>

            {popupsLoading ? (
              <div className="text-center py-16 text-slate-400">불러오는 중...</div>
            ) : popupList.length === 0 ? (
              <div className="text-center py-16 text-slate-400 bg-white rounded-2xl border border-slate-200">
                <ImageIcon className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p>등록된 팝업이 없습니다.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {popupList.map((popup) => (
                  <div
                    key={popup.id}
                    className="bg-white rounded-2xl border border-slate-200 px-6 py-5 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {popup.imageUrl ? (
                        <img
                          src={popup.imageUrl}
                          alt={popup.title}
                          className="w-16 h-12 object-cover rounded-xl border border-slate-200 shrink-0"
                        />
                      ) : (
                        <div className="w-16 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                          <ImageIcon className="w-5 h-5 text-slate-300" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {popup.active ? (
                            <Badge className="text-xs rounded-full bg-blue-100 text-blue-700 border-0">
                              활성
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs rounded-full text-slate-400">
                              비활성
                            </Badge>
                          )}
                        </div>
                        <p className="font-bold text-slate-950 truncate">{popup.title}</p>
                        {popup.linkUrl && (
                          <p className="text-xs text-slate-400 truncate mt-0.5">{popup.linkUrl}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl"
                        onClick={() => openEditPopup(popup)}
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl text-red-500 hover:text-red-600"
                        onClick={() => setDeletePopupId(popup.id)}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* ─── 인사이트 작성/수정 다이얼로그 ──────────────────────────────────── */}
      <Dialog open={insightDialog} onOpenChange={setInsightDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-black">
              {editingPost !== null ? "게시글 수정" : "새 게시글 작성"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 space-y-1.5">
                <Label>제목 *</Label>
                <Input
                  value={insightForm.title}
                  onChange={(e) => setInsightForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="게시글 제목"
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-1.5">
                <Label>카테고리</Label>
                <Input
                  value={insightForm.category}
                  onChange={(e) => setInsightForm((f) => ({ ...f, category: e.target.value }))}
                  placeholder="예: 영업전략, 마케팅"
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-1.5">
                <Label>읽기 시간</Label>
                <Input
                  value={insightForm.readingTime}
                  onChange={(e) => setInsightForm((f) => ({ ...f, readingTime: e.target.value }))}
                  placeholder="예: 5분"
                  className="rounded-xl"
                />
              </div>
              <div className="col-span-2 space-y-1.5">
                <Label>요약</Label>
                <Input
                  value={insightForm.summary}
                  onChange={(e) => setInsightForm((f) => ({ ...f, summary: e.target.value }))}
                  placeholder="게시글 요약 (목록에 표시됩니다)"
                  className="rounded-xl"
                />
              </div>
              <div className="col-span-2 space-y-1.5">
                <Label>커버 이미지 URL</Label>
                <Input
                  value={insightForm.coverImageUrl}
                  onChange={(e) => setInsightForm((f) => ({ ...f, coverImageUrl: e.target.value }))}
                  placeholder="https://..."
                  className="rounded-xl"
                />
              </div>
              <div className="col-span-2 space-y-1.5">
                <Label>본문 *</Label>
                <Textarea
                  value={insightForm.content}
                  onChange={(e) => setInsightForm((f) => ({ ...f, content: e.target.value }))}
                  placeholder="게시글 본문을 입력하세요. 마크다운 형식을 지원합니다."
                  className="rounded-xl min-h-[200px] font-mono text-sm"
                />
              </div>
              <div className="col-span-2 flex items-center gap-3">
                <Switch
                  checked={insightForm.published}
                  onCheckedChange={(v) => setInsightForm((f) => ({ ...f, published: v }))}
                />
                <Label className="cursor-pointer">
                  {insightForm.published ? "공개 (방문자에게 표시됨)" : "비공개 (저장만 됨)"}
                </Label>
              </div>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" className="rounded-xl" onClick={() => setInsightDialog(false)}>
              취소
            </Button>
            <Button
              className="rounded-xl bg-slate-950 hover:bg-primary"
              onClick={submitInsight}
              disabled={createPostMutation.isPending || updatePostMutation.isPending}
            >
              {editingPost !== null ? "수정 저장" : "게시글 등록"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ─── 팝업 생성/수정 다이얼로그 ───────────────────────────────────────── */}
      <Dialog open={popupDialog} onOpenChange={setPopupDialog}>
        <DialogContent className="max-w-lg rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-black">
              {editingPopup !== null ? "팝업 수정" : "새 팝업 등록"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label>팝업 제목 *</Label>
              <Input
                value={popupForm.title}
                onChange={(e) => setPopupForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="팝업 관리용 제목"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-1.5">
              <Label>이미지 URL</Label>
              <Input
                value={popupForm.imageUrl}
                onChange={(e) => setPopupForm((f) => ({ ...f, imageUrl: e.target.value }))}
                placeholder="https://... (팝업에 표시될 이미지)"
                className="rounded-xl"
              />
              {popupForm.imageUrl && (
                <img
                  src={popupForm.imageUrl}
                  alt="미리보기"
                  className="w-full rounded-xl border border-slate-200 mt-2 max-h-48 object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}
            </div>
            <div className="space-y-1.5">
              <Label>클릭 링크 URL (선택)</Label>
              <Input
                value={popupForm.linkUrl}
                onChange={(e) => setPopupForm((f) => ({ ...f, linkUrl: e.target.value }))}
                placeholder="https://... (팝업 클릭 시 이동할 URL)"
                className="rounded-xl"
              />
            </div>
            <div className="flex items-center gap-3 pt-1">
              <Switch
                checked={popupForm.active}
                onCheckedChange={(v) => setPopupForm((f) => ({ ...f, active: v }))}
              />
              <Label className="cursor-pointer">
                {popupForm.active
                  ? "활성화 — 메인 페이지에 팝업 표시"
                  : "비활성화 — 팝업 숨김"}
              </Label>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" className="rounded-xl" onClick={() => setPopupDialog(false)}>
              취소
            </Button>
            <Button
              className="rounded-xl bg-slate-950 hover:bg-primary"
              onClick={submitPopup}
              disabled={createPopupMutation.isPending || updatePopupMutation.isPending}
            >
              {editingPopup !== null ? "수정 저장" : "팝업 등록"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ─── 삭제 확인 (인사이트) ────────────────────────────────────────────── */}
      <AlertDialog open={deletePostId !== null} onOpenChange={() => setDeletePostId(null)}>
        <AlertDialogContent className="rounded-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle>게시글을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>삭제된 게시글은 복구할 수 없습니다.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-xl">취소</AlertDialogCancel>
            <AlertDialogAction
              className="rounded-xl bg-red-500 hover:bg-red-600"
              onClick={() => deletePostId !== null && deletePostMutation.mutate({ id: deletePostId })}
            >
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* ─── 삭제 확인 (팝업) ────────────────────────────────────────────────── */}
      <AlertDialog open={deletePopupId !== null} onOpenChange={() => setDeletePopupId(null)}>
        <AlertDialogContent className="rounded-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle>팝업을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>삭제된 팝업은 복구할 수 없습니다.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-xl">취소</AlertDialogCancel>
            <AlertDialogAction
              className="rounded-xl bg-red-500 hover:bg-red-600"
              onClick={() =>
                deletePopupId !== null && deletePopupMutation.mutate({ id: deletePopupId })
              }
            >
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
