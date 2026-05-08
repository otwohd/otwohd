// Style reminder: Soft Futurism Corporate Minimalism — SEO must feel precise, structured, and calm rather than keyword-stuffed.
import { useEffect } from "react";
import { seoDefaults } from "@/lib/site";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  type?: "website" | "article";
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

export default function Seo({
  title = seoDefaults.title,
  description = seoDefaults.description,
  keywords = seoDefaults.keywords,
  canonicalPath = "/",
  type = "website",
}: SeoProps) {
  useEffect(() => {
    const siteUrl = "https://otwoholdings.example";
    document.documentElement.lang = "ko";
    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="keywords"]', "name", "keywords", keywords);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[property="og:locale"]', "property", "og:locale", "ko_KR");
    upsertMeta('meta[property="og:url"]', "property", "og:url", `${siteUrl}${canonicalPath}`);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${siteUrl}${canonicalPath}`);
  }, [canonicalPath, description, keywords, title, type]);

  return null;
}
