"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import styles from "./page.module.css";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { degrees, PDFDocument } from "pdf-lib";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
interface pageInfo {
  rotate: number;
}

export default function RotatePDFClient() {
  const [loading, setLoading] = useState(false);
  const [hasRes, setHasRes] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const onFileChange = async (e: ChangeEvent) => {
    if (e.target != null && e.target instanceof HTMLInputElement) {
      const file = e.target.files?.[0];
      if (file == null) return;
      const blob = new Blob([new Uint8Array(await file.arrayBuffer())]);
      const blobUrl = URL.createObjectURL(blob);
      setLoading(true);
      setPdfUrl(blobUrl);
      sessionStorage.setItem("pdf-filename", file.name);
    }
  };

  const onRemove = () => {
    setHasRes(false);
    setPages([]);
    setPdfUrl("");
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    if (inputRef.current != null) {
      inputRef.current.value = "";
    }
    setHasRes(true);
    setLoading(false);
    setPages(new Array(numPages).fill(true).map(() => ({ rotate: 0 })));
  };

  const onDownload = async () => {
    const arrayBuffer = await fetch(pdfUrl).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const ps = pdfDoc.getPages();

    pages.forEach((info, index) => {
      ps[index].setRotation(degrees(info.rotate));
    });

    // 将PDF文档保存为字节流
    const pdfBytes = await pdfDoc.save();
    const url = URL.createObjectURL(new Blob([pdfBytes]));
    const a = document.createElement("a");
    a.download = sessionStorage.getItem("pdf-filename") ?? `${Date.now()}.pdf`;
    a.href = url;
    a.click();
    URL.revokeObjectURL(url);
  };
  const [pages, setPages] = useState<pageInfo[]>([]);
  const [zoom, setZoom] = useState(2);
  return (
    <>
      <div
        className={styles.uploadContainer}
        style={{
          display: loading || hasRes ? "none" : "",
        }}>
        <div className={styles.upload}>
          <input ref={inputRef} onChange={onFileChange} type="file" id="input-file-upload" accept=".pdf"></input>
          <label htmlFor="input-file-upload">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path>
              </svg>
              <p className={styles.text}>Click to upload or drag and drop</p>
            </div>
          </label>
        </div>
      </div>
      <div
        className={styles.loadWrapper}
        style={{
          display: loading ? "" : "none",
        }}>
        <div className={styles.loading}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: !loading && hasRes ? "" : "none",
        }}>
        <div className={styles.operate}>
          <button
            onClick={() => {
              setPages(
                pages.map((page) => {
                  page.rotate += 90;
                  return page;
                })
              );
            }}
            className={[styles.btn].join(" ")}>
            Rotate all
          </button>
          <button
            onClick={onRemove}
            tip-text="Remove this PDF and select a new one"
            className={[styles.btn, styles.tooltip].join(" ")}>
            Remove PDF
          </button>
          <button
            onClick={() => {
              setZoom(zoom + 1);
            }}
            disabled={zoom >= 8}
            tip-text="Zoom in"
            className={[styles.iconBtn, styles.tooltip].join(" ")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              style={{ width: "1.25rem", height: "1.25rem" }}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"></path>
            </svg>
          </button>
          <button
            onClick={() => {
              setZoom(zoom - 1);
            }}
            disabled={zoom <= 0}
            tip-text="Zoom out"
            className={[styles.iconBtn, styles.tooltip].join(" ")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              style={{ width: "1.25rem", height: "1.25rem" }}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"></path>
            </svg>
          </button>
        </div>

        <Document className={styles.pdfParseResult} file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          {pages.map((page, index) => (
            <div
              key={index}
              className={styles.pdfPage}
              onClick={() => {
                pages[index].rotate += 90;
                setPages([...pages]);
              }}
              style={{
                maxWidth: `${100 + zoom * 50}px`,
                flex: `0 0 ${100 + zoom * 50}px`,
              }}>
              <div className={styles.rotateBtn}>
                <svg
                  style={{
                    width: ".75rem",
                    fill: "white",
                    display: "block",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"></path>
                </svg>
              </div>
              <div className={styles.pageContainer}>
                <div
                  style={{
                    rotate: `${page.rotate}deg`,
                  }}
                  className={styles.pageContent}>
                  <Page rotate={0} pageNumber={index + 1} />
                </div>
                <div className={styles.pageFooter}>{index + 1}</div>
              </div>
            </div>
          ))}
        </Document>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem" }}>
          <button
            onClick={onDownload}
            tip-text="Split and download PDF"
            className={[styles.btn, styles.tooltip].join(" ")}>
            Download
          </button>
        </div>
      </div>
    </>
  );
}
