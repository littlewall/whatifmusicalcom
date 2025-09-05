"use client";

import Image from "next/image";
import styles from "./page.module.css";
import generateStarsCanvas from "./helpers/generateStars";

export default function Home() {
  return (
    <main className={styles.main}>
            <div className={styles.starrySky}>
                <canvas
                    ref={ref => {
                        if (ref) {
                            generateStarsCanvas(ref);
                        }
                    }}
                >
                </canvas>
                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src="/images/question-mark.svg"
                        alt="What if..? logo"
                        width={300}
                        height={300}
                    />
                    <h1 className={styles.title}>What if..?</h1>
                    <h2 className={styles.subtitle}>a new musical</h2>
                </div>
            </div>
        </main>
  );
}
