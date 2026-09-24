"use client"

import { useEffect, useRef } from "react"
import { Cog, ShieldCheck, Wrench } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Competency = {
  icon: LucideIcon
  title: string
  description: string
}

const competencies: Competency[] = [
  {
    icon: Cog,
    title: "Проектирование и инжиниринг",
    description:
      "Разрабатываем инженерные решения под задачи заказчика: расчёты, подбор оборудования и подготовка технической документации на всех этапах проекта.",
  },
  {
    icon: Wrench,
    title: "Монтаж и пусконаладка",
    description:
      "Выполняем монтажные работы и пусконаладку силами собственных специалистов, обеспечивая ввод оборудования в эксплуатацию точно в срок.",
  },
  {
    icon: ShieldCheck,
    title: "Сервис и поддержка",
    description:
      "Обеспечиваем регламентное и аварийное обслуживание, поставку запасных частей и техническую поддержку на протяжении всего срока эксплуатации.",
  },
]

export function CompetenciesSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const heading = section.querySelector("h2")
    if (!heading) return

    const cards = Array.from(section.querySelectorAll("article"))

    const showCards = () => {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("is-visible")
        }, index * 120)
      })
    }

    if (!("IntersectionObserver" in window)) {
      showCards()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showCards()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(heading)
    const fallbackTimer = window.setTimeout(() => {
      showCards()
    }, 300)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="competencies"
      aria-labelledby="competencies-heading"
      className="border-b border-red-500/80 bg-neutral-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <h2
          id="competencies-heading"
          className="mb-10 text-center text-2xl font-black text-neutral-900 sm:text-3xl"
        >
          Наши основные компетенции
        </h2>

        <ul className="flex flex-col gap-6">
          {competencies.map(({ icon: Icon, title, description }, index) => {
            const iconFirst = index % 2 === 0
            return (
              <li key={title}>
                <article
                  className={`card-appear flex flex-col overflow-hidden rounded-3xl border border-red-200 bg-white shadow-[0_20px_50px_rgba(17,17,17,0.04)] sm:flex-row ${
                    iconFirst ? "" : "sm:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex shrink-0 items-center justify-center bg-neutral-950 p-6 sm:w-40 ${
                      iconFirst ? "sm:border-r" : "sm:border-l"
                    } sm:border-red-500/80`}
                  >
                    <Icon className="h-12 w-12 text-red-500" aria-hidden="true" />
                  </div>

                  <div className="flex flex-col justify-center gap-2 p-6 sm:p-8">
                    <h3 className="text-lg font-bold text-neutral-900">
                      {title}
                    </h3>
                    <p className="text-pretty leading-relaxed text-neutral-700">
                      {description}
                    </p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
