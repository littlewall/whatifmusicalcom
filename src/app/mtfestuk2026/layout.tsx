import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import styles from "./mtfestuk2026.module.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What if..? - MTfestUK 2026",
};

export default function MTFESTUK2025Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@lwdev/audio-player@latest" type="module" async></script>
      </head>
      <body className={inter.className}>
        <main className="container">
          <div className={styles.center}>
              <Image
                  className={styles.logo}
                  src="/images/question-mark-dark.svg"
                  alt="What if..? logo"
                  width={150}
                  height={150}
              />
              <h1 className={styles.title}>What if..?</h1>
              <h2 className={styles.subtitle}>MTfestUK 2026 Submission</h2>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
