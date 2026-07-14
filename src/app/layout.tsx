import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono", // keeping the variable name consistent with globals.css or redefining it
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rafa'Na'ilah Septia | Backend Engineer & AI Enthusiast",
  description: "Creative developer portfolio of Rafa'Na'ilah Septia, specializing in backend systems, AI-powered applications, and scalable software architectures.",
  keywords: ["Backend Engineer", "AI Enthusiast", "FastAPI", "LLM Integration", "Next.js", "TypeScript", "Developer Portfolio", "Software Engineer"],
  authors: [{ name: "Rafa'Na'ilah Septia" }],
  metadataBase: new URL("https://rafanailah.dev"),
  openGraph: {
    title: "Rafa'Na'ilah Septia | Backend Engineer & AI Enthusiast",
    description: "Creative developer portfolio of Rafa'Na'ilah Septia, specializing in backend systems, AI-powered applications, and scalable software architectures.",
    url: "https://rafanailah.dev",
    siteName: "Rafa'Na'ilah Septia Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafa'Na'ilah Septia | Backend Engineer & AI Enthusiast",
    description: "Creative developer portfolio of Rafa'Na'ilah Septia, specializing in backend systems, AI-powered applications, and scalable software architectures.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} antialiased min-h-screen text-foreground transition-colors duration-300 font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="noise-overlay" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}



