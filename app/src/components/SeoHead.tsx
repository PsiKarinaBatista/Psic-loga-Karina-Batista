// components/SeoHead.tsx
import Head from 'next/head';

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function SeoHead({
  title = "Dra. Karina Batista - Psicóloga Clínica | Atendimento em São Paulo",
  description = "Psicóloga Karina Batista - Atendimento humanizado em Pinheiros e Itaim Bibi. Terapia individual, apoio emocional e orientação profissional. Agende sua consulta.",
  canonicalUrl = "https://www.karina-psicologa.com.br",
  ogImage = "/images/og-image.jpg",
  noindex = false
}: SeoHeadProps) {
  const fullTitle = title.includes("Karina Batista") ? title : `${title} | Dra. Karina Batista`;
  
  return (
    <Head>
      {/* Metatags básicas */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph (Facebook) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dra. Karina Batista - Psicóloga" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org markup (Google) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Psychologist",
            "name": "Karina Batista",
            "description": description,
            "url": canonicalUrl,
            "telephone": "+55-11-98765-4321",
            "email": "contato@karinabatista.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Artur de Azevedo, 1212, conjunto 51",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "postalCode": "05404-012",
              "addressCountry": "BR"
            },
            "areaServed": "São Paulo e região",
            "sameAs": [
              "https://www.instagram.com/karinabatistapsicologa",
              "https://www.linkedin.com/in/karinabatistapsicologa"
            ],
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Psicologia",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Consulta Individual"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Apoio Hospitalar"
                  }
                }
              ]
            }
          })
        }}
      />
    </Head>
  );
}