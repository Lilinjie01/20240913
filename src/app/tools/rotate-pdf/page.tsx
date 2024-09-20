import styles from "./page.module.css";
import { Metadata } from "next";
import RotatePDFClient from "./page.client";

export const metadata: Metadata = {
  title: "Free PDF Page Rotator - Rotate Individual or AllPages",
  description:
    "Rotate individual or all pages in your PDF effortlessly. No downloads or sign-ups. Fast, secure, and user-friendly. Try now!",
  robots: "index,follow",
  openGraph: {
    url: "http://pdf.ai/",
    type: "website",
  },
};
export default function RotatePDF() {
  return (
    <>
      <main className={styles.page}>
        <h1 className={styles.title}>Rotate PDF Pages</h1>
        <p>Simply click on a page to rotate it. You can then download your modified PDF.</p>
        <RotatePDFClient></RotatePDFClient>
      </main>
    </>
  );
}
