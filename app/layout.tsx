import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aprenda a Cortar Cabelo Sem Frescura",
    template: "%s | Aprenda a Cortar Cabelo Sem Frescura",
  },

  description:
    "Aprenda técnicas de barbearia do zero, conheça as ferramentas, domine os fundamentos dos cortes e desenvolva suas habilidades na prática.",

  keywords: [
    "curso de barbearia",
    "aprender a cortar cabelo",
    "curso de barbeiro online",
    "barbearia para iniciantes",
    "cortes masculinos",
    "degradê masculino",
    "fade",
    "técnicas de barbearia",
  ],

  authors: [{ name: "Aprenda a Cortar Cabelo Sem Frescura" }],
  creator: "Aprenda a Cortar Cabelo Sem Frescura",
  publisher: "Aprenda a Cortar Cabelo Sem Frescura",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Aprenda a Cortar Cabelo Sem Frescura",
    description:
      "Aprenda técnicas de barbearia do zero e desenvolva suas habilidades com aulas práticas.",
    siteName: "Aprenda a Cortar Cabelo Sem Frescura",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aprenda a Cortar Cabelo Sem Frescura",
    description:
      "Aprenda técnicas de barbearia do zero e desenvolva suas habilidades na prática.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080D17",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
