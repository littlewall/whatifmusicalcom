"use client";

import styles from "../mtfestuk2026.module.css";
import { TabNavigation } from "../../../components/tab-navigation";

const navigationTabs = [
  { label: "Synopsis", href: "/mtfestuk2026/synopsis", active: true },
  { label: "Songs", href: "/mtfestuk2026/songs", active: false },
  { label: "Development history", href: "/mtfestuk2026/development-history", active: false },
  { label: "Creatives", href: "/mtfestuk2026/creatives", active: false },
]

export default function Synopsis() {
  return (
    <>
      <div className={styles.tabs}>
            <TabNavigation tabs={navigationTabs} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Synopsis</h2>
        <p>
          When a meteoroid threatens Earth&apos;s survival, six interconnected lives collide. At the centre is Tommy, a musician destroyed by losing his unborn child, and Isabella, who left him when their grief became unbearable. As humanity faces its final hours, Isabella desperately searches for Tommy, determined to heal what was broken.
        </p>
        <p>
          Their story interweaves with others finding meaning in crisis: Sally, Isabella&apos;s anxious roommate, discovering unexpected courage; Jimmy, Tommy&apos;s fiercely loyal manager, refusing to give up on his friend; and journalist Rebecca with photographer Michael, who turn from documenting disaster to helping in the search for human connection.
        </p>
        <p>
          Through powerful songs and intimate character studies, the musical explores how impending loss forces us to confront what&mdash;and who&mdash;we truly value. Combining global catastrophe with deeply personal stories of forgiveness and redemption, &ldquo;What if...?&rdquo; tales a story about finding hope in humanity&apos;s darkest hour.
        </p>
      </div>
    </>
  );
}
