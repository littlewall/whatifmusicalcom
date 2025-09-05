"use client";

import styles from "../mtfestuk2026.module.css";
import { TabNavigation } from "../../../components/tab-navigation";

const navigationTabs = [
  { label: "Synopsis", href: "/mtfestuk2026/synopsis", active:  false},
  { label: "Songs", href: "/mtfestuk2026/songs", active: false },
  { label: "Development history", href: "/mtfestuk2026/development-history", active: true },
  { label: "Creatives", href: "/mtfestuk2026/creatives", active: false },
]

export default function DevelopmentHistory() {
  return (
    <>
      <div className={styles.tabs}>
            <TabNavigation tabs={navigationTabs} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Development history</h2>
        <p>
            What if..? began development in October 2022, with the first songs and scenes taking shape. By June 2023, instrumental demos were in production, followed in September 2024 by the completion of a first draft script with the full score. In December 2024, the script went through dramaturgical refinement, and in January 2025 vocal demos were recorded.
          </p>
          <p>
            April 2025 marked a key milestone: the premiere of the song Realm of Dreams at The Other Palace in London, introducing the musical to an international audience. The process continued with the translation of the show into English, and a Czech concept EP is now in preparation, with casting launched in September 2025.
        </p>
      </div>
    </>
  );
}
