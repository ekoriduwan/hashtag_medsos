export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Hashtag Finder Pro",
    url: "https://hashtag-finder-pro.vercel.app",
    description:
      "Generate hashtag yang relevan dan terbukti efektif untuk YouTube, TikTok, dan Instagram.",
    applicationCategory: "Multimedia",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IDR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
      bestRating: "5",
    },
    featureList: [
      "Hashtag Generator untuk YouTube",
      "Hashtag Generator untuk TikTok",
      "Hashtag Generator untuk Instagram",
      "AI-Based Ranking",
      "Viral/Niche Classification",
      "Export TXT",
      "Dark Mode",
    ],
    screenshot: "https://hashtag-finder-pro.vercel.app/og-image.png",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apa itu Hashtag Finder Pro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hashtag Finder Pro adalah tools gratis untuk menemukan hashtag terbaik untuk YouTube, TikTok, dan Instagram berdasarkan keyword atau niche tertentu.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah Hashtag Finder Pro gratis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, Hashtag Finder Pro gratis digunakan. Anda bisa generate hashtag tanpa batasan untuk YouTube, TikTok, dan Instagram.",
        },
      },
      {
        "@type": "Question",
        name: "Platform apa saja yang didukung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hashtag Finder Pro mendukung tiga platform utama: YouTube (15 hashtag), TikTok (20 hashtag), dan Instagram (30 hashtag).",
        },
      },
      {
        "@type": "Question",
        name: "Bahasa apa saja yang tersedia untuk hashtag?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tersedia pilihan Bahasa Indonesia, English, dan Bahasa Lainnya untuk hashtag yang dihasilkan.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}