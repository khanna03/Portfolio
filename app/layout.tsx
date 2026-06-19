import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Royal Archive | Aryan Khanna — AI / ML Engineer & Full Stack Developer",
  description: "Explore the digital archive of Aryan Khanna. Specializing in AI/ML engineering, deep learning ECG diagnostics, natural language RAG systems, and premium software architectures.",
  keywords: [
    "Aryan Khanna",
    "The Royal Archive",
    "AI Engineer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "SRMIST",
    "Latex Resume Tailorer",
    "NPCIL Intern",
    "Deep Learning",
    "NLP RAG"
  ],
  authors: [{ name: "Aryan Khanna" }],
  creator: "Aryan Khanna",
  metadataBase: new URL("https://aryankhanna.dev"), // Fallback base URL for SEO
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryankhanna.dev",
    title: "The Royal Archive | Aryan Khanna",
    description: "Futuristic luxury portfolio of Aryan Khanna inspired by ancient Greek royal architecture. Discover advanced AI systems, machine learning research, and full-stack projects.",
    siteName: "The Royal Archive",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Royal Archive — Aryan Khanna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Royal Archive | Aryan Khanna",
    description: "AI/ML Engineer and Full-Stack Developer portfolio.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Person Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aryan Khanna",
    "jobTitle": "AI / ML Engineer & Full Stack Developer",
    "url": "https://aryankhanna.dev",
    "email": "aryankhanna3605@gmail.com",
    "telephone": "+91-9829956596",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressCountry": "India"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "SRM Institute of Science and Technology"
    },
    "sameAs": [
      "https://github.com/khanna03",
      "https://www.linkedin.com/in/aryankhanna03"
    ]
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-obsidian-950 text-ivory antialiased selection:bg-gold-700 selection:text-white flex flex-col font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
