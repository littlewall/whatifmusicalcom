"use client";

import styles from "../mtfestuk2026.module.css";
import { TabNavigation } from "../../../components/tab-navigation";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lw-audio-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        artist?: string;
        cover?: string;
      };
      'lw-audio-player-song': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        title?: string;
      };
    }
  }
}

const navigationTabs = [
  { label: "Synopsis", href: "/mtfestuk2026/synopsis", active:  false},
  { label: "Songs", href: "/mtfestuk2026/songs", active: true },
  { label: "Development history", href: "/mtfestuk2026/development-history", active: false },
  { label: "Creatives", href: "/mtfestuk2026/creatives", active: false },
]

export default function Songs() {
  return (
    <>
      <div className={styles.tabs}>
            <TabNavigation tabs={navigationTabs} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Songs</h2>
            <lw-audio-player
                artist="What if..?"
                cover="/images/yellow-world.jpg"
            >
                <lw-audio-player-song
                    url="/audio/what-if-.mp3"
                    title="Yellow World"
                ></lw-audio-player-song>
            </lw-audio-player>
      </div>
    </>
  );
}
