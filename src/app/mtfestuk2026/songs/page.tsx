"use client";

import styles from "../mtfestuk2026.module.css";
import cardStyles from "./AudioCard.module.css"
import { TabNavigation } from "../../../components/tab-navigation";
import Script from "next/script";

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



interface AudioCardProps {
  audioUrl: string
  lyricsUrl: string
  audioFileName: string
  lyricsFileName: string
  trackName: string
}

const AudioCard = ({ 
  audioUrl, 
  lyricsUrl, 
  audioFileName, 
  lyricsFileName,
  trackName
}: AudioCardProps) => {
  const downloadFile = (url: string, filename: string) => {
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={cardStyles.audioCard}>
      <div className={cardStyles.audioControls}>
            <lw-audio-player
                artist="What if..?"
                cover="/images/whatif.png"
            >
                <lw-audio-player-song
                    url={audioUrl}
                    title={trackName}
                ></lw-audio-player-song>
            </lw-audio-player>
      </div>

      <div className={cardStyles.downloadButtons}>
        <button
          className={`${cardStyles.downloadBtn} ${cardStyles.audioDownload}`}
          onClick={() => downloadFile(audioUrl, audioFileName)}
        >
          <span className={cardStyles.downloadIcon}>↓</span>
          Download audio file
        </button>
        <button
          className={`${cardStyles.downloadBtn} ${cardStyles.lyricsDownload}`}
          onClick={() => downloadFile(lyricsUrl, lyricsFileName)}
        >
          <span className={styles.downloadIcon}>↓</span>
          Download lyrics
        </button>
      </div>
    </div>
  )
}


export default function Songs() {
  return (
    <>
      <div className={styles.tabs}>
        <TabNavigation tabs={navigationTabs} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Songs</h2>
        <AudioCard
          trackName="OCD and me"
          audioUrl="/audio/What-if--OCD-and-me.mp3"
          lyricsUrl="/lyrics/What-if--OCD-and-me.pdf"
          audioFileName="What if..? - OCD and me.mp3"
          lyricsFileName="What if..? - OCD and me.pdf"
        />
        <AudioCard
          trackName="We'll be alright"
          audioUrl="/audio/What-if--We-ll-be-alright.mp3"
          lyricsUrl="/lyrics/What-if--We-ll-be-alright.pdf"
          audioFileName="What if..? - We'll be alright.mp3"
          lyricsFileName="What if..? - We'll be alright.pdf"
        />
        <div 
          style={{
            padding: "107.78% 0 0 0",
            position: "relative",
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
            <iframe 
              src="https://player.vimeo.com/video/1054852352?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{
                position: "absolute",
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%",
                border: "none",
              }}
              title="What if..? | Playout"
            ></iframe>
          </div>
          <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
      </div>
    </>
  );
}
