import { NextSeo } from "next-seo";

interface SEOProps {
  title?: string;
}

export default function SEO({ title }: SEOProps) {
  const seo = {
    titleDefault: `Acak Aja | Daripada Tunjuk-Tunjukan`,
    titleComplete: `${
      title && `${title} - `
    } Acak Aja | Daripada Tunjuk-Tunjukan`,
    description: "Acak jabatan, kelompok, piket, dan angka ga pake lama",
    url: "https://acak-aja.vercel.app",
    image: "https://acak-aja.vercel.app/banner.png",
    author: "zakiego",
  };

  const titleTemplate = title ? seo.titleComplete : seo.titleDefault;

  return (
    <NextSeo
      title={titleTemplate}
      description={seo.description}
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: seo.url,
        title: titleTemplate,
        description: seo.description,
        images: [{ url: seo.image }],
        site_name: titleTemplate,
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
}
