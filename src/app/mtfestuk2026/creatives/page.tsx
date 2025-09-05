"use client";

import styles from "../mtfestuk2026.module.css";
import { TabNavigation } from "../../../components/tab-navigation";
import Image from "next/image";

const navigationTabs = [
  { label: "Synopsis", href: "/mtfestuk2026/synopsis", active: false },
  { label: "Songs", href: "/mtfestuk2026/songs", active: false },
  { label: "Development history", href: "/mtfestuk2026/development-history", active: false },
  { label: "Creatives", href: "/mtfestuk2026/creatives", active: true },
]

export default function Creatives() {
  return (
    <>
      <div className={styles.tabs}>
            <TabNavigation tabs={navigationTabs} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Creatives</h2>
        <div className={styles.creative}>
          <Image
            className={styles.creativePhoto}
            src="/images/milan-zitka.png"
            alt="Milan Zítka"
            width={200}
            height={200}
          />
          <h2 className={styles.creativeName}>Milan Zítka</h2>
          <h3 className={styles.creativeRole}>Book, Lyrics, Music</h3>
          <p>
            Milan is a Czech composer and lyricist. He studied composition at the Jaroslav Ježek Conservatory in Prague. His first original musical, Mistr jazzu, was staged at the Karlovy Vary City Theatre. He has also performed in Czech productions of Les Misérables, The Phantom of the Opera, and RENT.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://www.milanzitka.cz" target="_blank" rel="noopener noreferrer">milanzitka.cz</a>
             <a href="https://instagram.com/milanzitkacz" target="_blank" rel="noopener noreferrer">@milanzitkacz</a>
          </div>
        </div>
      </div>
    </>
  );
}
