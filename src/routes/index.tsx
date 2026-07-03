import { createFileRoute } from "@tanstack/react-router";
import heroMomLift from "@/assets/hero-momlift.jpg";
import productCotton from "@/assets/product-cotton.jpg";
import productPremium from "@/assets/product-premium.jpg";
import tipsMother from "@/assets/tips-mother.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Duffy — Caminos de aire. Pañales premium para tu bebé" },
      {
        name: "description",
        content:
          "Pañales Duffy: algodón puro, 12 horas de protección y ultra confort. Líneas Cotton y Premium Cotton para el cuidado diario de tu bebé.",
      },
      { property: "og:title", content: "Duffy — Pañales premium para tu bebé" },
      {
        property: "og:description",
        content: "La primera caricia después de la tuya. Algodón puro y tecnología de absorción.",
      },
    ],
  }),
  component: Index,
});

const benefits = [
  { n: "01", label: "Ultra Suave" },
  { n: "02", label: "100% Seguro" },
  { n: "03", label: "Máxima Absorción" },
  { n: "04", label: "Ultra Confort" },
  { n: "05", label: "Siempre Seco" },
];

// Babysec-inspired baby stages
const stages = [
  { label: "Embarazo", sub: "Preparate" },
  { label: "Recién nacido", sub: "0 — 3 meses" },
  { label: "Bebé", sub: "3 — 12 meses" },
  { label: "Pequeño", sub: "1 — 3 años" },
  { label: "Dejando el pañal", sub: "+3 años" },
];

// Babysec-style usage steps
const steps = [
  {
    n: "1",
    title: "Colocá",
    body: "Apoyá a tu bebé sobre el pañal abierto, alineando la cintura con su ombligo.",
  },
  {
    n: "2",
    title: "Ajustá",
    body: "Cerrá las orejas elastizadas suavemente. Que quede firme pero no apretado.",
  },
  {
    n: "3",
    title: "Listo",
    body: "12 horas de protección continua para que disfruten cada momento.",
  },
];

const tips = [
  "El ritual del cambio como momento de conexión.",
  "Cómo cuidar la piel del recién nacido en invierno.",
  "La importancia de elegir materiales respirables.",
];

const retailers = ["Farmacity", "Coto", "Carrefour", "Jumbo", "Pigmento"];

function Index() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-zinc-800 antialiased">
      {/* Top promo bar — Huggies-inspired */}
      <div className="bg-brand-main text-center text-xs font-medium text-white">
        <div className="mx-auto max-w-7xl px-6 py-2 lg:px-12">
          Envíos a todo el país · Encontrá Duffy en tu tienda más cercana →
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-950/5 bg-brand-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
          <span className="font-display text-2xl font-bold tracking-tight text-brand-main">
            Duffy
          </span>
          <div className="hidden gap-8 text-sm font-medium sm:flex">
            <a href="#productos" className="text-zinc-800 hover:text-brand-main transition-colors">
              Productos
            </a>
            <a href="#etapas" className="text-zinc-500 transition-colors hover:text-brand-main">
              Mi bebé
            </a>
            <a href="#tips" className="text-zinc-500 transition-colors hover:text-brand-main">
              Tips de cuidado
            </a>
            <a
              href="#donde-comprar"
              className="text-zinc-500 transition-colors hover:text-brand-main"
            >
              Dónde comprar
            </a>
          </div>
          <a
            href="#donde-comprar"
            className="rounded-full bg-brand-main px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-main/90"
          >
            Comprar
          </a>
        </div>
      </nav>

      {/* Hero — Pampers-style full bleed photo with overlay */}
      <header className="relative isolate overflow-hidden">
        <img
          src={heroMomLift}
          alt="Mamá levantando a su bebé sonriendo"
          width={1600}
          height={1024}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-brand-bg/10" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-main ring-1 ring-brand-main/15 backdrop-blur">
              <span className="size-1.5 rounded-full bg-brand-main" />
              Nueva línea Premium Cotton
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-balance text-zinc-900 sm:text-6xl lg:text-7xl">
              La primera caricia <span className="text-brand-main">después de la tuya.</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg text-zinc-700 text-pretty">
              Algodón puro y 12 horas de protección para que el descanso de tu bebé sea
              tan suave como tu abrazo.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#productos"
                className="rounded-full bg-brand-main px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-main/25 transition-all hover:-translate-y-0.5 hover:bg-brand-main/90"
              >
                Conocé nuestros pañales
              </a>
              <a
                href="#etapas"
                className="rounded-full bg-white/80 px-8 py-4 text-base font-semibold text-zinc-800 ring-1 ring-zinc-950/10 backdrop-blur transition-colors hover:bg-white"
              >
                Mi bebé crece
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits */}
      <section className="border-y border-zinc-950/5 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {benefits.map((b) => (
              <div key={b.n} className="flex flex-col items-center gap-3 text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-brand-light font-semibold text-brand-main">
                  {b.n.slice(1)}
                </div>
                <p className="text-sm font-semibold uppercase tracking-tight text-zinc-800">
                  {b.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Etapas — Babysec-inspired baby journey */}
      <section id="etapas" className="bg-brand-light/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <header className="mb-16 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-main">
              Mi bebé crece
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-zinc-800 lg:text-5xl">
              Acompañamos cada etapa
            </h2>
            <p className="mt-4 text-zinc-600">
              Desde los primeros días hasta sus primeros pasos sin pañal. Encontrá el
              talle y la línea ideal para cada momento.
            </p>
          </header>

          <ol className="relative grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
            <div className="absolute left-8 right-8 top-12 hidden h-px bg-brand-mid/40 md:block" />
            {stages.map((s, i) => (
              <li
                key={s.label}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative flex size-24 items-center justify-center rounded-full bg-white ring-1 ring-brand-mid/40">
                  <span className="font-display text-2xl font-bold text-brand-main">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 font-display text-base font-semibold text-zinc-800">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{s.sub}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Products */}
      <section id="productos" className="bg-brand-bg py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <header className="mb-16 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-main">
              Productos
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-zinc-800 lg:text-5xl">
              Líneas pensadas para vos
            </h2>
            <p className="mt-4 text-zinc-600">
              Calidad superior con la confianza de las familias argentinas.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Cotton */}
            <article className="group relative flex flex-col overflow-hidden rounded-[32px] bg-white p-4 ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-duffy-yellow/30">
              <div className="relative overflow-hidden rounded-[24px] bg-duffy-yellow-soft">
                {/* soft cloud accents nodding to pack art */}
                <span className="pointer-events-none absolute -left-8 bottom-6 size-24 rounded-full bg-white/70 blur-2xl" />
                <span className="pointer-events-none absolute right-6 top-8 size-16 rounded-full bg-white/80 blur-xl" />
                <img
                  src={productCotton}
                  alt="Pañales Duffy Cotton"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="relative aspect-square w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 flex size-16 flex-col items-center justify-center rounded-full bg-duffy-yellow text-zinc-900 shadow-lg ring-4 ring-white/60">
                  <span className="font-display text-lg font-bold leading-none">12h</span>
                  <span className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider">
                    seco
                  </span>
                </div>
                {/* Tecnología japonesa seal */}
                <div className="absolute right-4 top-4 flex size-14 rotate-[-8deg] flex-col items-center justify-center rounded-full bg-brand-main text-center text-[8px] font-bold leading-tight text-white shadow-md">
                  Tecnología<br/>Japonesa<br/>Nº1
                </div>
              </div>
              <div className="px-4 py-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-zinc-800">
                      Duffy <span className="text-duffy-orange">Cotton</span>
                    </h3>
                    <p className="mt-2 max-w-[40ch] text-zinc-500 text-pretty">
                      El clásico Duffy: máxima absorción, cintura elástica y suavidad
                      con toque algodón para todos los días.
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-duffy-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-900">
                    Hiperpack
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-zinc-500">
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Talle M · G · XG · XXG</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Cintura elástica</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Antipaspaduras</span>
                </div>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-main transition-transform hover:translate-x-1"
                >
                  Ver detalles <span>→</span>
                </a>
              </div>
            </article>

            {/* Premium Cotton */}
            <article className="group relative flex flex-col overflow-hidden rounded-[32px] bg-white p-4 ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-duffy-orange/30">
              <div className="relative overflow-hidden rounded-[24px] bg-duffy-orange-soft">
                <span className="pointer-events-none absolute -right-10 top-4 size-28 rounded-full bg-white/60 blur-2xl" />
                <span className="pointer-events-none absolute left-6 bottom-8 size-16 rounded-full bg-white/70 blur-xl" />
                <img
                  src={productPremium}
                  alt="Pañales Duffy Premium Cotton"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="relative aspect-square w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 flex size-16 flex-col items-center justify-center rounded-full bg-duffy-orange text-white shadow-lg ring-4 ring-white/60">
                  <span className="font-display text-lg font-bold leading-none">12h</span>
                  <span className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider">
                    seco
                  </span>
                </div>
                <div className="absolute right-4 top-4 flex size-14 rotate-[-8deg] flex-col items-center justify-center rounded-full bg-brand-main text-center text-[8px] font-bold leading-tight text-white shadow-md">
                  Tecnología<br/>Japonesa<br/>Nº1
                </div>
              </div>
              <div className="px-4 py-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-zinc-800">
                      Duffy <span className="text-duffy-orange">Premium Cotton</span>
                    </h3>
                    <p className="mt-2 max-w-[40ch] text-zinc-500 text-pretty">
                      Super seco, canales de aire y toque suave. La versión más avanzada
                      para pieles delicadas.
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-duffy-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Premium
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-zinc-500">
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Talle P · M · G · XG · XXG</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Canales de aire</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Super seco</span>
                </div>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-duffy-orange transition-transform hover:translate-x-1"
                >
                  Ver detalles <span>→</span>
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* 3 pasos — Babysec-inspired */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <header className="mb-16 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-main">
              Fácil de usar
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-zinc-800 lg:text-5xl">
              Tres pasos y listo
            </h2>
          </header>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative overflow-hidden rounded-[28px] bg-brand-light/40 p-8 transition-colors hover:bg-brand-light/70"
              >
                <span className="absolute -right-4 -top-6 font-display text-[8rem] font-bold leading-none text-white/70 select-none">
                  {s.n}
                </span>
                <div className="relative">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-brand-main text-base font-bold text-white">
                    {s.n}
                  </div>
                  <h3 className="font-display text-xl font-bold text-zinc-800">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="bg-brand-light/20 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="overflow-hidden rounded-[40px] bg-white ring-1 ring-black/5">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center p-12 lg:p-20">
                <span className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-main">
                  Comunidad Duffy
                </span>
                <h2 className="mb-6 font-display text-3xl font-bold leading-tight text-zinc-800 lg:text-4xl">
                  Tips para transitar esta etapa con calma
                </h2>
                <ul className="space-y-6">
                  {tips.map((t) => (
                    <li key={t} className="flex gap-4">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-mid" />
                      <p className="text-zinc-600 text-pretty">{t}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-10 self-start rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
                >
                  Leer el blog completo
                </a>
              </div>
              <img
                src={tipsMother}
                alt="Madre sosteniendo los pies de su bebé"
                width={1200}
                height={1200}
                loading="lazy"
                className="aspect-square w-full bg-brand-light object-cover lg:aspect-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Retailers */}
      <section id="donde-comprar" className="bg-brand-bg py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <h2 className="font-display text-2xl font-bold text-zinc-800 sm:text-3xl">
            ¿Dónde comprar Duffy?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-500">
            Estamos en las principales farmacias y supermercados de todo el país.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {retailers.map((r) => (
              <span
                key={r}
                className="font-display text-xl font-semibold tracking-tight text-zinc-400 transition-colors hover:text-brand-main"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="border-t border-zinc-950/5 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-brand-main">
                Duffy
              </span>
              <p className="mt-6 max-w-[30ch] text-sm leading-relaxed text-zinc-500">
                Caminos de aire. Cuidando el futuro de Argentina, un pañal a la vez.
              </p>
            </div>
            <div>
              <p className="mb-6 text-sm font-semibold text-zinc-800">Navegación</p>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#productos" className="transition-colors hover:text-brand-main">Línea Cotton</a></li>
                <li><a href="#productos" className="transition-colors hover:text-brand-main">Línea Premium</a></li>
                <li><a href="#etapas" className="transition-colors hover:text-brand-main">Etapas del bebé</a></li>
                <li><a href="#tips" className="transition-colors hover:text-brand-main">Tips para padres</a></li>
                <li><a href="#donde-comprar" className="transition-colors hover:text-brand-main">Puntos de venta</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-6 text-sm font-semibold text-zinc-800">Contacto</p>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li>Instagram · @duffy_arg</li>
                <li>Facebook · Duffy Argentina</li>
                <li>hola@duffy.com.ar</li>
                <li>0800-333-DUFFY</li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-zinc-950/5 pt-8 sm:flex-row">
            <p className="text-[11px] text-zinc-400">
              © {new Date().getFullYear()} Duffy Argentina. Todos los derechos reservados.
            </p>
            <p className="text-[11px] text-zinc-400">Caminos de aire · Súper seco</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
