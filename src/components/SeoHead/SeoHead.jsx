import { useEffect } from "react";
import { SEO, BRAND } from "../../data/siteContent";

function SeoHead({ title, description, path = "/" }) {
  const pageTitle = title || SEO.title;
  const pageDesc = description || SEO.description;
  const url = `https://www.jawaedtech.com${path}`;

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", pageDesc);
    setMeta("keywords", SEO.keywords);
    setMeta("og:title", pageTitle, true);
    setMeta("og:description", pageDesc, true);
    setMeta("og:image", SEO.ogImage, true);
    setMeta("og:url", url, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", pageDesc);
    setMeta("twitter:image", SEO.ogImage);

    let schema = document.getElementById("jawa-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "jawa-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: BRAND.name,
      description: pageDesc,
      url,
      email: BRAND.email,
      telephone: BRAND.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BRAND.address,
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        postalCode: "641043",
        addressCountry: "IN",
      },
      sameAs: ["https://www.linkedin.com/company/jawaedtech"],
      offers: {
        "@type": "Offer",
        category: "Career Training Programs",
        description: SEO.keywords,
      },
    });
  }, [pageTitle, pageDesc, url]);

  return null;
}

export default SeoHead;
