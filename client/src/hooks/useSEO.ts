/**
 * useSEO — 페이지별 동적 메타태그 관리 훅
 * 각 페이지 컴포넌트에서 호출하여 title, description, canonical, og 태그를 동적으로 설정합니다.
 */
import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
}

const BASE_URL = "https://otwohd.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = "오투HD | Otwo Holdings";

export function useSEO(options: SEOOptions) {
  useEffect(() => {
    const {
      title,
      description,
      canonical,
      ogTitle,
      ogDescription,
      ogImage = DEFAULT_OG_IMAGE,
      ogType = "website",
      keywords,
    } = options;

    // 페이지 타이틀
    document.title = title;

    // 헬퍼: meta 태그 업데이트 또는 생성
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const attr = selector.includes("[property")
          ? "property"
          : selector.includes("[name")
          ? "name"
          : "name";
        const val = selector.match(/["']([^"']+)["']/)?.[1] ?? "";
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 헬퍼: link 태그 업데이트 또는 생성
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Primary SEO
    setMeta('meta[name="description"]', description);
    if (keywords) setMeta('meta[name="keywords"]', keywords);

    // Canonical
    setLink("canonical", canonical ?? `${BASE_URL}/`);

    // Open Graph
    setMeta('meta[property="og:title"]', ogTitle ?? title);
    setMeta('meta[property="og:description"]', ogDescription ?? description);
    setMeta('meta[property="og:url"]', canonical ?? `${BASE_URL}/`);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:type"]', ogType);
    setMeta('meta[property="og:site_name"]', SITE_NAME);

    // Twitter Card
    setMeta('meta[name="twitter:title"]', ogTitle ?? title);
    setMeta('meta[name="twitter:description"]', ogDescription ?? description);
    setMeta('meta[name="twitter:image"]', ogImage);

    // 페이지 이탈 시 기본값 복원 (선택)
    return () => {
      document.title = `오투HD(Otwo Holdings) | 종합영업대행사 · 자체DB추출 · 위탁영업 컨설팅`;
    };
  }, [
    options.title,
    options.description,
    options.canonical,
    options.ogTitle,
    options.ogDescription,
    options.ogImage,
    options.ogType,
    options.keywords,
  ]);
}
