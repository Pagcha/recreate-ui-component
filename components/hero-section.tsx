"use client"

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function HeroSection() {
  const ref = useRef<HTMLElement | null>(null)

  return (
    <section
      ref={ref}
      aria-label="Приветствие"
      className="relative isolate overflow-hidden border-b border-red-500/80 bg-neutral-950"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about-facility.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.38),_transparent_40%),linear-gradient(135deg,_rgba(17,17,17,0.95),_rgba(17,17,17,0.8))]" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center gap-5 px-4 py-20 text-center sm:px-6 lg:min-h-[94vh]">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-400">
          СВК Технолоджи
        </p>
        <h1 className="max-w-4xl text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-6xl">
          Инженерные решения для вашего бизнеса
        </h1>
        <p className="max-w-2xl text-pretty text-sm text-white/75 sm:text-base">
          Проектирование, поставка и обслуживание технологического оборудования
          с полным циклом сопровождения.
        </p>
      </div>
    </section>
  )
}
