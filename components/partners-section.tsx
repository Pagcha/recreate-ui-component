const partners = [
  {
    name: "MetalWork",
    src: "/logos/metalwork.png",
    description: "Итальянский производитель премиального пневмооборудования, известное надежностью и высокими стандартами качества в сфере промышленной автоматизации. Компания предлагает широкий спектр высокоточных компонентов — от пневмоцилиндров до систем подготовки воздуха, идеально подходящих для сложных эксплуатационных условий.",
  },
  {
    name: "Festo",
    src: "/logos/festo.png",
    description: "Немецкий технологический гигант и признанный эталон в сфере промышленной автоматизации и пневматических систем. Инновационные решения Festo задают стандарты эффективности, цифровизации и точности по всему миру.",
  },
  {
    name: "Camozzi",
    src: "/logos/camozzi.png",
    description: "Итальянский производитель пневматических компонентов, сочетающий инновационные инженерные разработки с европейским качеством. Продукция компании широко используется для автоматизации производственных процессов и управления технологическими потоками.",
  },
  {
    name: "Airtac",
    src: "/logos/airtac.png",
    description: "Один из крупнейших международных поставщиков высококлассного пневмооборудования с современным производством в Азии. Продукция бренда ценятся за функциональность, широкую номенклатуру и высокую экономическую эффективность.",
  },
  {
    name: "Pemaks",
    src: "/logos/pemaks.png",
    description: "Турецкий бренд, специализирующийся на производстве высококачественных пневмоцилиндров и вспомогательного оборудования. Компания предлагает оптимальное соотношение доступной цены и долговечности для решения базовых и специализированных задач.",
  },
] as const

export function PartnersSection() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="border-b border-neutral-200 bg-neutral-950 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <h2
          id="partners-heading"
          className="mb-12 text-center text-2xl font-black text-white sm:text-3xl"
        >
          Генеральные партнёры компании
        </h2>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-5">
  {partners.map(({ name, src, description }) => (
    <li key={name} className="w-full">
      <div className="group relative flex aspect-[1/1.45] w-full items-center justify-center overflow-hidden rounded-3xl border border-red-500/60 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-red-400 hover:shadow-[0_20px_60px_rgba(239,68,68,0.18)]">
        <img
          src={src}
          alt={name}
          className="h-full w-full object-contain transition duration-300 group-hover:blur-sm group-hover:brightness-50"
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="max-w-[80%] rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-center backdrop-blur-sm">
            <div className="text-sm font-bold text-white">{name}</div>
            <p className="mt-1 text-[10px] leading-relaxed text-white/80">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  ))}
</ul>
      </div>
    </section>
  )
}
