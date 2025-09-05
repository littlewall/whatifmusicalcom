import Link from "next/link"
import { ChevronDown } from "lucide-react"
import styles from "./tab-navigation.module.css"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

interface TabItem {
  label: string
  href: string
  active?: boolean
}

interface TabNavigationProps {
  tabs: TabItem[]
  className?: string
}

export function TabNavigation({ tabs, className }: TabNavigationProps) {
  const activeTab = tabs.find((tab) => tab.active)

  return (
    <>
      <nav className={`${styles.tabNavigation} ${className || ""}`}>
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`${styles.tabButton} ${tab.active ? styles.tabButtonActive : styles.tabButtonInactive}`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      <div className={`${styles.mobileDropdown} ${className || ""}`}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className={styles.dropdownTrigger}>
              {activeTab?.label || "Navigace"}
              <ChevronDown className={styles.chevronIcon} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
            {tabs.map((tab) => (
              <DropdownMenuItem key={tab.href} asChild className="w-full">
                <Link
                  href={tab.href}
                  className={`${styles.dropdownItem} ${tab.active ? styles.dropdownItemActive : ""}`}
                >
                  {tab.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
