import { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";
import { X } from "lucide-react";

const SESSION_KEY = "otwohd_popup_closed";

export default function MainPopup() {
  const [visible, setVisible] = useState(false);
  const { data: popup } = trpc.popup.active.useQuery();

  useEffect(() => {
    if (!popup) return;
    // 오늘 이미 닫은 경우 표시 안 함
    const closed = sessionStorage.getItem(SESSION_KEY);
    if (closed === String(popup.id)) return;
    setVisible(true);
  }, [popup]);

  const handleClose = () => {
    if (popup) sessionStorage.setItem(SESSION_KEY, String(popup.id));
    setVisible(false);
  };

  if (!visible || !popup) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition"
          aria-label="팝업 닫기"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 이미지 */}
        {popup.imageUrl ? (
          popup.linkUrl ? (
            <a href={popup.linkUrl} target="_blank" rel="noopener noreferrer" onClick={handleClose}>
              <img
                src={popup.imageUrl}
                alt={popup.title}
                className="w-full object-cover cursor-pointer"
              />
            </a>
          ) : (
            <img src={popup.imageUrl} alt={popup.title} className="w-full object-cover" />
          )
        ) : (
          <div className="p-8 text-center">
            <h3 className="text-xl font-black text-slate-950">{popup.title}</h3>
          </div>
        )}

        {/* 하단 닫기 버튼 */}
        <div className="px-6 py-4 flex justify-end border-t border-slate-100">
          <button
            onClick={handleClose}
            className="text-sm text-slate-500 hover:text-slate-800 font-medium transition"
          >
            오늘 하루 닫기
          </button>
        </div>
      </div>
    </div>
  );
}
