// Style reminder: Soft Futurism Corporate Minimalism — SEO must feel precise, structured, and calm rather than keyword-stuffed.
import { useEffect } from "react";
import { seoDefaults } from "@/lib/site";

const SITE_URL = "https://otwohd.com";
const DEFAULT_OG_IMAGE = "https://otwohd.com/og-image.png";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  type?: "website" | "article";
  ogImage?: string;
};

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function Seo({
  title = seoDefaults.title,
  description = seoDefaults.description,
  keywords = seoDefaults.keywords,
  canonicalPath = "/",
  type = "website",
  ogImage = DEFAULT_OG_IMAGE,
}: SeoProps) {
  useEffect(() => {
    const fullUrl = `${SITE_URL}${canonicalPath}`;

    document.documentElement.lang = "ko";
    document.title = title;

    // Primary SEO
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="keywords"]', "name", "keywords", keywords);
    upsertMeta('meta[name="robots"]', "name", "robots", "index, follow, max-image-preview:large, max-snippet:-1");
    upsertMeta('meta[name="author"]', "name", "author", "오투HD (Otwo Holdings)");

    // Canonical
    upsertLink("canonical", fullUrl);

    // Open Graph
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[property="og:locale"]', "property", "og:locale", "ko_KR");
    upsertMeta('meta[property="og:url"]', "property", "og:url", fullUrl);
    upsertMeta('meta[property="og:image"]', "property", "og:image", ogImage);
    upsertMeta('meta[property="og:image:width"]', "property", "og:image:width", "1200");
    upsertMeta('meta[property="og:image:height"]', "property", "og:image:height", "630");
    upsertMeta('meta[property="og:image:alt"]', "property", "og:image:alt", "오투HD 종합영업대행사 - 통합솔루션 비지니스 파트너");
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", "오투HD | Otwo Holdings");

    // Twitter Card
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);

    return () => {
      document.title = seoDefaults.title;
    };
  }, [canonicalPath, description, keywords, title, type, ogImage]);

  return null;
}
