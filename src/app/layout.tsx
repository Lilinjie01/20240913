import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

import NavBar from "./components/NavBar";

import styles from "./page.module.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const tiemposSerif = localFont({
  src: "./fonts/tiempos-headline-light.woff2",
  variable: "--font-tiempos-serif",
});

const interMedium = localFont({
  src: "./fonts/Inter-Medium.ttf",
  variable: "--font-inter-medium",
  fallback: ["Segoe UI", "Helvetica Neue", "sans-serif"],
});
const interRegular = localFont({
  src: "./fonts/Inter-Regular.ttf",
  variable: "--font-inter-regular",
});
const interSemiBold = localFont({
  src: "./fonts/Inter-SemiBold.ttf",
  variable: "--font-inter-semibold",
});

export const metadata: Metadata = {
  title: "pdf.ai demo page",
  keywords: ["pdf", "ai", "tools", "free"],
  authors: [{ name: "lilingjie" }],
  // description:
  // "Rotate individual or all pages in your PDF effortlessly. No downloads or sign-ups. Fast, secure, and user-friendly. Try now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiemposSerif.variable} ${interMedium.variable} ${interRegular.variable} ${interSemiBold.variable}`}>
        <NavBar />
        {children}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <section className={styles.introduce}>
              <Image className={styles.logo} width={28} height={28} src="/favicon.ico" alt="PDF.ai logo"></Image>
              <p>Chat with any PDF: ask questions, get summaries, find information, and more.</p>
              <div className={styles.socialChannels}>
                <Link
                  href="https://www.tiktok.com/@pdfai"
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank">
                  <span className="sr-only">TikTok</span>
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2859 3333"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="h-6 w-6"
                    aria-hidden={true}
                    style={{ width: 20 }}>
                    <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"></path>
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/pdfdotai/"
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank">
                  <span className="sr-only">Instagram</span>
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"></path>
                  </svg>
                </Link>
                <Link href="https://twitter.com/pdfdotai" className="text-gray-400 hover:text-gray-500" target="_blank">
                  <span className="sr-only">Twitter</span>
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@pdfai"
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank">
                  <span className="sr-only">YouTube</span>
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </section>
            <section className={styles.list}>
              <div>
                <h3>Products</h3>
                <ul role="list">
                  <li>
                    <Link href="/use-cases">Use cases</Link>
                  </li>
                  <li>
                    <Link href="/chrome-extension">Chrome extension</Link>
                  </li>
                  <li>
                    <Link href="https://api.pdf.ai/">API docs</Link>
                  </li>
                  <li>
                    <Link href="https://pdf.ai/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="https://pdf.ai/tutorials">Video tutorials</Link>
                  </li>
                  <li>
                    <Link href="https://pdf.ai/resources">Resources</Link>
                  </li>
                  <li>
                    <Link href="https://pdf.ai/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3>We also built</h3>
                <ul role="list">
                  <li>
                    <Link href="https://pdf.ai/tools/resume-ai-scanner">Resume AI Scanner</Link>
                  </li>
                  <li>
                    <Link href="https://pdf.ai/tools/invoice-ai-scanner">Invoice AI Scanner</Link>
                  </li>
                  <li>
                    <Link href="https://pdf.ai/tools/quiz-ai-generator">AI Quiz Generator</Link>
                  </li>
                  <li>
                    <Link href="https://quickyai.com">QuickyAI</Link>
                  </li>
                  <li>
                    <Link href="https://docsium.com">Docsium</Link>
                  </li>
                  <li>
                    <Link href="https://pdf.ai/gpts">PDF GPTs</Link>
                  </li>
                  <li>
                    <Link href="https://pdfgen.com">PDF AI generator</Link>
                  </li>
                  <li>
                    <Link href="https://pdf.ai/tools">Other PDF tools</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Company</h3>
                <ul role="list">
                  <li>
                    <Link href="/compare/chatpdf-alternative">PDF.ai vs ChatPDF</Link>
                  </li>
                  <li>
                    <Link href="/compare/adobe-acrobat-reader-alternative">PDF.ai vs Acrobat Reader</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Legal</Link>
                  </li>
                  <li>
                    <Link href="/affiliate-program">Affiliate program 💵</Link>
                  </li>
                  <li>
                    <Link href="/investor">Investor</Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </footer>
      </body>
    </html>
  );
}
