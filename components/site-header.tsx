"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "О нас", href: "#about" },
  { label: "Компетенции", href: "#competencies" },
  { label: "Партнёры", href: "#partners" },
  { label: "Контакты", href: "#contacts" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-red-500/80 bg-neutral-950/95 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-4 py-2 sm:px-6 md:justify-center">
        <Link href="/" className="flex shrink-0 items-center" aria-label="СВК Технолоджи — на главную">
          <img
            src="/logos/svk-logo.png"
            alt="СВК Технолоджи"
            className="h-8 w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex md:items-stretch md:self-stretch" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center border-l border-white/10 px-5 text-sm font-semibold tracking-[0.14em] text-white/80 transition-colors last:border-r last:border-white/10 hover:text-red-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        aria-label="Мобильная навигация"
        className={cn(
          "border-t border-red-500/60 bg-neutral-950 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3 text-sm font-semibold tracking-[0.14em] text-white/80 last:border-b-0 hover:text-red-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
