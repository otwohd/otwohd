// Style reminder: Soft Futurism Corporate Minimalism — airy whitespace, oxygen blue, deep navy, rounded glass cards, and trustworthy B2B clarity.
import {
  BarChart3,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
  DatabaseZap,
  FileText,
  Handshake,
  Headset,
  LineChart,
  Megaphone,
  Network,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

export const brand = {
  name: "오투HD",
  englishName: "Otwo Holdings",
  ceo: "표성용",
  address: "인천광역시 계양구 오조산로45번길 12, 6층",
  foundedStory: "2018년 오투스퀘어로 시작해 2025년 자체 DB 추출 기술과 전국 TM 센터 인프라를 기반으로 오투HD로 확장했습니다.",
  description:
    "오투HD는 컨설팅, 위탁영업, 광고대행, 공동투자를 연결해 성과 중심의 시장 진입과 매출 성장을 설계하는 종합영업대행사입니다.",
};

export const assetUrls = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663636924955/LpsUXXNpeJSu5pmKCxWZMp/otwohd-hero-network-DRTjbvjAaDwhFy974QhR4W.webp",
  business: "https://d2xsxph8kpxj0f.cloudfront.net/310519663636924955/LpsUXXNpeJSu5pmKCxWZMp/otwohd-business-cards-hA7bVYG7N4u8iPim7u5tKz.webp",
  tech: "https://d2xsxph8kpxj0f.cloudfront.net/310519663636924955/LpsUXXNpeJSu5pmKCxWZMp/otwohd-tech-infrastructure-nPSHZ6g34sy8Wt9zPhW2oG.webp",
  timeline: "https://d2xsxph8kpxj0f.cloudfront.net/310519663636924955/LpsUXXNpeJSu5pmKCxWZMp/otwohd-about-timeline-JDTaqTMM5y4r8zqw3rFC7i.webp",
};

export const navItems = [
  { href: "/", label: "Main" },
  { href: "/about", label: "회사소개" },
  { href: "/business", label: "사업영역" },
  { href: "/technology", label: "기술력" },
  { href: "/insight", label: "Insight" },
  { href: "/contact", label: "문의하기" },
];

export const businessModels = [
  {
    title: "컨설팅",
    subtitle: "시장 진입과 영업 전략 설계",
    description:
      "타깃 고객 정의, 제안 구조, 영업 메시지, 전환 프로세스를 분석해 실행 가능한 성장 로드맵을 수립합니다.",
    icon: Target,
    keywords: ["B2B 전략", "세일즈 퍼널", "영업 진단"],
  },
  {
    title: "위탁영업",
    subtitle: "실행형 영업 조직 운영",
    description:
      "전국 TM 인프라와 운영 매뉴얼을 기반으로 리드 발굴부터 상담, 미팅 전환까지 일관된 영업 실행을 대행합니다.",
    icon: Headset,
    keywords: ["TM 센터", "리드 전환", "위탁영업 컨설팅"],
  },
  {
    title: "광고대행",
    subtitle: "성과형 캠페인 기획과 집행",
    description:
      "광고 소재, 랜딩 구조, 키워드 전략, 성과 분석을 연결해 영업 전환과 맞물리는 광고 운영 체계를 만듭니다.",
    icon: Megaphone,
    keywords: ["퍼포먼스", "랜딩", "SEO/AEO"],
  },
  {
    title: "공동투자",
    subtitle: "파트너 성장을 함께 설계",
    description:
      "가능성이 검증된 사업 모델에 대해 영업 인프라, 광고 운영, 자본 협력을 결합해 공동 성장 구조를 설계합니다.",
    icon: CircleDollarSign,
    keywords: ["파트너십", "성장 구조", "공동 사업"],
  },
];

export const milestones = [
  {
    year: "2018",
    title: "오투스퀘어 출발",
    description: "현장 중심 영업과 고객 발굴 경험을 축적하며 종합 영업 대행의 기반을 마련했습니다.",
  },
  {
    year: "2021",
    title: "컨설팅·광고 운영 확장",
    description: "단순 영업 대행을 넘어 컨설팅, 광고대행, 파트너 실행 조직으로 사업 모델을 확장했습니다.",
  },
  {
    year: "2025",
    title: "오투HD로 도약",
    description: "자체 DB 추출 프로그램과 인천·시흥·광주 TM 센터 인프라를 구축하며 Otwo Holdings 체제로 전환했습니다.",
  },
];

export const techPillars = [
  {
    title: "자체 DB 추출 프로그램",
    description:
      "업종과 지역, 타깃 조건을 기반으로 잠재 고객 데이터를 구조화해 영업 실행의 출발점을 정교하게 설계합니다.",
    icon: DatabaseZap,
  },
  {
    title: "전국 단위 TM 조직",
    description:
      "인천, 시흥, 광주 거점을 중심으로 상담 품질과 실행 속도를 관리하는 분산형 TM 운영 체계를 보유합니다.",
    icon: Network,
  },
  {
    title: "전환 중심 운영 리포팅",
    description:
      "콜 결과, 상담 반응, 캠페인 지표를 운영 데이터로 정리해 다음 액션의 우선순위를 빠르게 판단합니다.",
    icon: BarChart3,
  },
];

export const pageCards = [
  {
    href: "/about",
    eyebrow: "ABOUT",
    title: "2018년부터 이어온 신뢰 기반 성장",
    description: "오투스퀘어에서 오투HD로 이어지는 변화와 건강한 기업문화를 소개합니다.",
    icon: Building2,
  },
  {
    href: "/business",
    eyebrow: "BUSINESS",
    title: "네 가지 영업 성장 모델",
    description: "컨설팅, 위탁영업, 광고대행, 공동투자를 하나의 실행 체계로 연결합니다.",
    icon: Handshake,
  },
  {
    href: "/technology",
    eyebrow: "TECHNOLOGY",
    title: "자체 DB와 TM 인프라",
    description: "자체DB추출 기술과 전국 TM 조직으로 성과형 영업 실행을 뒷받침합니다.",
    icon: DatabaseZap,
  },
  {
    href: "/insight",
    eyebrow: "INSIGHT",
    title: "AEO/SEO 인사이트 매거진",
    description: "종합영업대행사 관점의 실무형 콘텐츠를 읽기 쉬운 게시판 구조로 제공합니다.",
    icon: FileText,
  },
];

export const insights = [
  {
    slug: "integrated-sales-agency-guide",
    category: "Sales Strategy",
    title: "종합영업대행사를 선택할 때 확인해야 할 세 가지 기준",
    summary:
      "영업 대행은 단순한 콜 수행이 아니라 데이터, 상담 품질, 광고 전환 구조가 함께 움직여야 성과가 납니다.",
    date: "2026.05.08",
    readingTime: "4분",
    keywords: ["종합영업대행사", "위탁영업 컨설팅", "영업대행"],
    body:
      "종합영업대행사를 선택할 때는 첫째, 잠재 고객 데이터를 어떻게 확보하고 정제하는지 확인해야 합니다. 둘째, TM 조직이 단순 수량 중심으로 움직이는지, 상담 품질과 전환율을 함께 관리하는지 살펴봐야 합니다. 셋째, 광고와 랜딩, 상담, 후속 제안이 하나의 흐름으로 연결되는 운영 역량이 필요합니다. 오투HD는 자체DB추출과 전국 TM 인프라를 기반으로 이 세 요소를 통합해 파트너사의 성장 실행력을 높이는 것을 목표로 합니다.",
  },
  {
    slug: "proprietary-db-extraction",
    category: "Technology",
    title: "자체DB추출이 위탁영업 성과에 미치는 영향",
    summary:
      "정교한 데이터 출발점은 상담 성공률과 영업팀의 실행 시간을 동시에 개선하는 핵심 인프라입니다.",
    date: "2026.05.08",
    readingTime: "3분",
    keywords: ["자체DB추출", "DB 추출 프로그램", "영업 데이터"],
    body:
      "영업 실행의 품질은 어떤 고객에게 먼저 접근하는지에서 시작됩니다. 자체DB추출 프로그램은 업종, 지역, 조건별 잠재 고객을 구조화해 상담 우선순위를 정할 수 있게 돕습니다. 이는 무작위 접근보다 시간 대비 전환 가능성을 높이고, 캠페인별 성과 리포팅과도 연결됩니다. 오투HD는 데이터 확보와 TM 실행을 분리하지 않고 하나의 운영 체계로 설계합니다.",
  },
  {
    slug: "outsourced-sales-consulting",
    category: "Consulting",
    title: "위탁영업 컨설팅이 필요한 기업의 공통 신호",
    summary:
      "영업 인력을 늘렸는데도 전환율이 정체된다면, 인원보다 구조를 먼저 점검해야 합니다.",
    date: "2026.05.08",
    readingTime: "5분",
    keywords: ["위탁영업 컨설팅", "영업 컨설팅", "TM 센터"],
    body:
      "위탁영업 컨설팅이 필요한 기업은 대체로 세 가지 문제를 겪습니다. 첫째, 고객 데이터가 충분해 보여도 실제 상담 가능성이 낮습니다. 둘째, 상담 스크립트와 후속 제안의 기준이 담당자별로 다릅니다. 셋째, 광고 유입과 영업 전환이 따로 운영되어 병목을 찾기 어렵습니다. 오투HD는 컨설팅, 광고대행, 위탁영업을 연결해 구조적 개선을 우선합니다.",
  },
];

export const stats = [
  { value: "2018", label: "오투스퀘어 시작" },
  { value: "2025", label: "오투HD 확장" },
  { value: "3", label: "TM 운영 거점" },
  { value: "4", label: "핵심 사업 모델" },
];

export const trustSignals = [
  { title: "신뢰 기반 운영", description: "대표자와 소재지, 사업 모델을 명확히 공개하는 투명한 파트너십", icon: ShieldCheck },
  { title: "데이터 중심 실행", description: "자체DB추출과 상담 운영 데이터를 연결하는 성과형 프로세스", icon: Radar },
  { title: "건강한 조직문화", description: "장기적 협력과 내부 성장 문화를 중시하는 안정적 운영 철학", icon: UsersRound },
  { title: "전환 지향 설계", description: "광고, 랜딩, TM, 제안이 이어지는 실행 중심 성장 구조", icon: ChartNoAxesCombined },
];

export const contactIntents = ["위탁영업 상담", "광고대행 문의", "공동투자 제안", "컨설팅 의뢰", "기타 파트너십"];

export const seoDefaults = {
  title: "오투HD(Otwo Holdings) | 종합영업대행사 · 자체DB추출 · 위탁영업 컨설팅",
  description:
    "오투HD는 컨설팅, 위탁영업, 광고대행, 공동투자를 연결하는 종합영업대행사입니다. 자체DB추출 프로그램과 인천·시흥·광주 TM 센터 인프라로 파트너사의 성장을 설계합니다.",
  keywords:
    "종합영업대행사, 자체DB추출, 위탁영업 컨설팅, 광고대행, TM 센터, 오투HD, Otwo Holdings, 오투스퀘어, 공동투자",
};
