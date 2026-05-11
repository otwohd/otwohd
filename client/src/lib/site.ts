// Brand system: OTWOHD as a business growth and sales infrastructure group, not a conventional TM or ad agency.
import {
  BarChart3,
  BookOpenText,
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
  Route,
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
  tagline: "성장 구조를 설계하는 그룹",
  statement: "비즈니스는 광고만으로 성장하지 않습니다. 운영과 실행이 연결될 때 성장은 구조가 됩니다.",
  foundedStory: "2018년 오투스퀘어로 시작해 2025년 자체 DB 추출 기술과 전국 TM 센터 인프라를 기반으로 오투HD로 확장했습니다.",
  description:
    "오투HD는 컨설팅, 위탁영업, 광고대행, 공동투자, 데이터 운영을 하나의 실행 체계로 연결해 비즈니스 성장 구조를 설계하는 전략 기반 비즈니스 그룹입니다.",
};

export const assetUrls = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663636924955/LpsUXXNpeJSu5pmKCxWZMp/otwohd-hero-network-DRTjbvjAaDwhFy974QhR4W.webp",
  business: "https://d2xsxph8kpxj0f.cloudfront.net/310519663636924955/LpsUXXNpeJSu5pmKCxWZMp/otwohd-business-cards-hA7bVYG7N4u8iPim7u5tKz.webp",
  tech: "https://d2xsxph8kpxj0f.cloudfront.net/310519663636924955/LpsUXXNpeJSu5pmKCxWZMp/otwohd-tech-infrastructure-nPSHZ6g34sy8Wt9zPhW2oG.webp",
  timeline: "https://d2xsxph8kpxj0f.cloudfront.net/310519663636924955/LpsUXXNpeJSu5pmKCxWZMp/otwohd-about-timeline-JDTaqTMM5y4r8zqw3rFC7i.webp",
};

export const navItems = [
  { href: "/", label: "메인" },
  { href: "/about", label: "소개" },
  { href: "/business", label: "사업분야" },
  { href: "/process", label: "운영구조" },
  { href: "/insight", label: "인사이트" },
  { href: "/contact", label: "문의하기" },
];

export const businessModels = [
  {
    slug: "consulting",
    title: "컨설팅",
    subtitle: "시장 진입과 영업 전략 설계",
    description:
      "타깃 고객 정의, 제안 구조, 영업 메시지, 전환 프로세스를 분석해 실행 가능한 성장 로드맵을 수립합니다.",
    detail:
      "컨설팅은 단순 조언이 아니라 실행 가능한 영업 구조를 설계하는 출발점입니다. 오투HD는 시장과 고객 데이터를 검토하고, 실제 상담 조직이 움직일 수 있는 메시지·스크립트·전환 기준을 함께 정리합니다.",
    icon: Target,
    keywords: ["B2B 전략", "세일즈 퍼널", "영업 진단"],
  },
  {
    slug: "outsourced-sales",
    title: "위탁영업",
    subtitle: "실행형 세일즈 인프라 운영",
    description:
      "인천·시흥·광주 거점의 운영 조직과 매뉴얼을 기반으로 리드 발굴부터 상담, 미팅 전환까지 일관된 영업 실행을 지원합니다.",
    detail:
      "위탁영업은 인력 투입이 아니라 운영 품질의 문제입니다. 오투HD는 상담 준비도, 리드 우선순위, 후속 액션을 표준화해 파트너사가 자체 조직처럼 활용할 수 있는 세일즈 인프라를 제공합니다.",
    icon: Headset,
    keywords: ["세일즈 인프라", "리드 전환", "운영 매뉴얼"],
  },
  {
    slug: "advertising",
    title: "광고대행",
    subtitle: "전환을 기준으로 설계하는 캠페인",
    description:
      "광고 소재, 랜딩 구조, 키워드 전략, 성과 분석을 영업 전환과 연결해 캠페인의 역할을 명확히 만듭니다.",
    detail:
      "광고대행은 노출 수만 늘리는 일이 아닙니다. 오투HD는 유입 이후 상담과 제안까지 이어지는 흐름을 기준으로 캠페인을 기획하고, 성과 데이터를 다시 운영 전략에 반영합니다.",
    icon: Megaphone,
    keywords: ["퍼포먼스", "랜딩", "SEO/AEO"],
  },
  {
    slug: "co-investment",
    title: "공동투자",
    subtitle: "파트너 성장을 함께 설계",
    description:
      "가능성이 검증된 사업 모델에 영업 인프라, 광고 운영, 자본 협력을 결합해 공동 성장 구조를 설계합니다.",
    detail:
      "공동투자는 단기 캠페인이 아니라 장기 성장 구조를 함께 만드는 방식입니다. 오투HD는 파트너의 시장 가능성과 실행 조건을 검토하고, 필요한 운영 자원을 조합해 지속 가능한 확장 모델을 설계합니다.",
    icon: CircleDollarSign,
    keywords: ["파트너십", "성장 구조", "공동 사업"],
  },
  {
    slug: "data-operation",
    title: "데이터 운영",
    subtitle: "자체 DB와 실행 데이터를 연결",
    description:
      "자체 DB 추출, 상담 반응, 캠페인 지표를 연결해 다음 실행의 우선순위를 판단하는 데이터 기반 운영 체계를 만듭니다.",
    detail:
      "데이터 운영은 오투HD의 핵심 인프라입니다. 잠재 고객 데이터를 구조화하고 실행 결과를 다시 분석해 영업팀이 어디에 집중해야 하는지 명확히 보여주는 운영 기준을 제공합니다.",
    icon: DatabaseZap,
    keywords: ["자체DB추출", "운영 데이터", "전환 리포팅"],
  },
];

export const operatingProcess = [
  { step: "01", title: "분석", description: "시장, 고객, 제안 구조, 기존 영업 흐름을 진단해 성장의 병목을 찾습니다.", icon: Radar },
  { step: "02", title: "전략 설계", description: "타깃, 메시지, 채널, 전환 기준을 하나의 실행 로드맵으로 정리합니다.", icon: Route },
  { step: "03", title: "운영 구축", description: "DB, 광고, TM, 리포팅이 연결되는 운영 환경과 실행 기준을 만듭니다.", icon: Network },
  { step: "04", title: "실행", description: "정해진 기준에 따라 상담, 캠페인, 제안, 후속 액션을 속도감 있게 운영합니다.", icon: Sparkles },
  { step: "05", title: "성장 관리", description: "성과 데이터를 분석해 다음 실행의 우선순위와 개선 방향을 업데이트합니다.", icon: LineChart },
];

export const milestones = [
  {
    year: "2018",
    title: "오투스퀘어 출발",
    description: "현장 중심 영업과 고객 발굴 경험을 축적하며 실행형 비즈니스 운영의 기반을 마련했습니다.",
  },
  {
    year: "2021",
    title: "컨설팅·광고 운영 확장",
    description: "단순 영업 대행을 넘어 컨설팅, 광고대행, 파트너 실행 조직으로 사업 모델을 확장했습니다.",
  },
  {
    year: "2025",
    title: "오투HD로 도약",
    description: "자체 DB 추출 프로그램과 인천·시흥·광주 운영 거점을 구축하며 Otwo Holdings 체제로 전환했습니다.",
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
    title: "전국 단위 운영 거점",
    description:
      "인천, 시흥, 광주 거점을 중심으로 상담 품질과 실행 속도를 관리하는 분산형 운영 체계를 보유합니다.",
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
    eyebrow: "소개",
    title: "브랜드 철학과 성장 여정",
    description: "오투스퀘어에서 오투HD로 이어진 실행 중심 철학과 비즈니스 그룹으로의 전환을 소개합니다.",
    icon: Building2,
  },
  {
    href: "/business",
    eyebrow: "사업분야",
    title: "다섯 가지 성장 구조",
    description: "컨설팅, 위탁영업, 광고대행, 공동투자, 데이터 운영을 독립된 상세 페이지로 확인할 수 있습니다.",
    icon: Handshake,
  },
  {
    href: "/process",
    eyebrow: "운영구조",
    title: "분석에서 성장 관리까지",
    description: "오투HD가 단순 대행사가 아니라 운영 구조를 설계하는 그룹임을 보여주는 실행 프로세스입니다.",
    icon: Route,
  },
  {
    href: "/insight",
    eyebrow: "인사이트",
    title: "SEO/AEO 성장 인사이트",
    description: "공지사항이 아닌 브랜드 콘텐츠 허브로 전문성과 검색 유입을 함께 설계합니다.",
    icon: BookOpenText,
  },
];

export const insights = [
  {
    slug: "business-growth-structure",
    category: "성장 전략",
    title: "비즈니스 성장은 광고가 아니라 구조에서 시작됩니다",
    summary:
      "광고, 데이터, 영업, 운영이 분리되어 있으면 성과는 반복되지 않습니다. 성장 구조를 먼저 설계해야 합니다.",
    date: "2026.05.08",
    readingTime: "4분",
    keywords: ["비즈니스 성장", "영업 구조", "성장 전략"],
    body:
      "비즈니스 성장은 한 번의 광고 캠페인이나 단기 영업 활동만으로 만들어지지 않습니다. 고객 데이터를 어떻게 정의하는지, 유입 이후 어떤 메시지로 상담하는지, 후속 제안을 어떤 기준으로 관리하는지가 함께 설계되어야 합니다. 오투HD는 컨설팅, 광고대행, 위탁영업, 데이터 운영을 하나의 흐름으로 연결해 반복 가능한 성장 구조를 만드는 데 집중합니다.",
  },
  {
    slug: "sales-infrastructure-guide",
    category: "세일즈 인프라",
    title: "세일즈 인프라를 설계할 때 확인해야 할 다섯 가지 기준",
    summary:
      "영업 인력을 늘리기 전에 타깃 데이터, 상담 기준, 후속 액션, 리포팅 체계, 운영 책임 구조를 먼저 확인해야 합니다.",
    date: "2026.05.08",
    readingTime: "5분",
    keywords: ["세일즈 인프라", "위탁영업", "운영 설계"],
    body:
      "세일즈 인프라는 단순히 많은 상담 인력을 확보하는 것이 아닙니다. 어떤 고객에게 먼저 접근할지, 어떤 메시지로 상담할지, 상담 결과를 어떻게 기록하고 개선할지에 대한 기준이 있어야 합니다. 오투HD는 자체 DB 추출과 전국 운영 거점을 기반으로 데이터, 상담, 리포팅이 연결되는 세일즈 인프라를 설계합니다.",
  },
  {
    slug: "data-driven-operation",
    category: "데이터 운영",
    title: "데이터 기반 운영이 영업 전환율을 바꾸는 방식",
    summary:
      "정교한 데이터 출발점과 운영 리포팅은 실행팀이 집중해야 할 다음 액션을 명확하게 만듭니다.",
    date: "2026.05.08",
    readingTime: "3분",
    keywords: ["데이터 운영", "자체DB추출", "전환 리포팅"],
    body:
      "데이터 기반 운영은 영업 실행의 방향을 바꾸는 핵심 기준입니다. 업종, 지역, 조건별로 구조화된 잠재 고객 데이터는 상담 준비도를 높이고, 실행 결과 리포팅은 다음 캠페인의 우선순위를 정하는 근거가 됩니다. 오투HD는 데이터 확보와 실행 조직 운영을 분리하지 않고 하나의 성장 시스템으로 연결합니다.",
  },
];

export const stats = [
  { value: "2018", label: "실행 경험의 시작" },
  { value: "2025", label: "OTWOHD 확장" },
  { value: "3", label: "운영 거점" },
  { value: "5", label: "성장 구조" },
];

export const trustSignals = [
  { title: "성장 구조 설계", description: "광고, 영업, 데이터, 운영을 분리하지 않고 하나의 성장 구조로 설계합니다.", icon: ChartNoAxesCombined },
  { title: "실행 인프라 구축", description: "인천·시흥·광주 운영 거점을 기반으로 실행 가능한 세일즈 인프라를 구축합니다.", icon: UsersRound },
  { title: "데이터 기반 운영", description: "자체 DB 추출과 실행 데이터를 연결해 다음 액션의 우선순위를 명확히 합니다.", icon: DatabaseZap },
  { title: "전략과 실행", description: "전략 문서에서 끝나지 않고 상담, 광고, 제안, 리포팅까지 실행을 관리합니다.", icon: ShieldCheck },
];

export const contactIntents = ["컨설팅 의뢰", "위탁영업 상담", "광고대행 문의", "공동투자 제안", "데이터 운영 상담", "기타 파트너십"];

export const seoDefaults = {
  title: "오투HD(Otwo Holdings) | 성장 구조를 설계하는 비즈니스 그룹",
  description:
    "오투HD는 컨설팅, 위탁영업, 광고대행, 공동투자, 데이터 운영을 연결해 비즈니스 성장 구조를 설계하는 전략 기반 비즈니스 그룹입니다.",
  keywords:
    "오투HD, Otwo Holdings, 성장 구조 설계, 실행 인프라, 데이터 기반 운영, 위탁영업, 광고대행, 공동투자, 자체DB추출, 비즈니스 성장 전략",
};
