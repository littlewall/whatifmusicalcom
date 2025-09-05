"use client";

import styles from "../mtfestuk2025.module.css";
import { TabNavigation } from "../../../components/tab-navigation";

const navigationTabs = [
  { label: "O nás", href: "/about", active: false },
  { label: "Služby", href: "/services", active: false },
  { label: "Kontakt", href: "/contact", active: false },
]

export default function Songs() {
  return (
    <div className={styles.tabs}>
          <TabNavigation tabs={navigationTabs} />
    </div>
  );
}
