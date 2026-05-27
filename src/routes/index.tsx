import { createFileRoute } from "@tanstack/react-router";
import heroBaby from "@/assets/hero-baby.jpg";
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
          "Pañales Duffy: algodón puro, máxima absorción y ultra confort. Líneas Cotton y Premium Cotton para el cuidado diario de tu bebé.",
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

const tips = [
  "El ritual del cambio como momento de conexión.",
  "Cómo cuidar la piel del recién nacido en invierno.",
  "La importancia de elegir materiales respirables.",
];

const retailers = ["Farmacity", "Coto", "Carrefour", "Jumbo", "Pigmento"];

function Index() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-zinc-800 antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-950/5 bg-brand-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
          <span className="font-display text-xl font-semibold tracking-tight text-brand-main">
            Duffy
          </span>
          <div className="hidden gap-8 text-sm font-medium sm:flex">
            <a href="#productos" className="text-zinc-800">
              Productos
            </a>
            <a
              href="#tips"
              className="text-zinc-500 transition-colors hover:text-brand-main"
            >
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
            href="#contacto"
            className="rounded-full px-4 py-1.5 text-sm font-medium ring-1 ring-zinc-950/10 transition-colors hover:bg-zinc-950/5"
          >
            Contacto
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-12 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="flex flex-col items-start">
              <h1 className="max-w-[20ch] font-display text-4xl font-semibold leading-tight text-balance text-zinc-800 sm:text-5xl lg:text-7xl">
                La primera caricia después de la tuya
              </h1>
              <p className="mt-6 max-w-[48ch] text-lg text-zinc-500 text-pretty lg:text-xl">
                Diseñamos pañales que se sienten como un abrazo. Algodón puro y
                tecnología de absorción para que el descanso de tu bebé sea tan suave
                como el tuyo.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <a
                  href="#productos"
                  className="flex items-center gap-2 rounded-full bg-brand-main py-2.5 pl-4 pr-5 text-sm font-medium text-white ring-1 ring-brand-main transition-transform hover:bg-brand-main/90 active:scale-[0.98]"
                >
                  <span className="size-4 shrink-0 rounded-full bg-white/20" />
                  Explorar productos
                </a>
                <a
                  href="#tips"
                  className="px-4 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-800"
                >
                  Conocer más
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroBaby}
                alt="Recién nacido durmiendo envuelto en algodón"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full rounded-[min(2vw,32px)] object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-2xl bg-white p-4 shadow-xl shadow-brand-main/10 ring-1 ring-black/5 sm:block">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-main">
                  Dermatológico
                </p>
                <p className="text-sm text-zinc-600">
                  Testeado para las pieles más sensibles de Argentina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits */}
      <section className="border-y border-zinc-950/5 bg-white/50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {benefits.map((b) => (
              <div key={b.n} className="flex flex-col items-center gap-3 text-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-brand-light font-semibold text-brand-main">
                  {b.n.slice(1)}
                </div>
                <p className="text-sm font-medium uppercase tracking-tight text-zinc-800">
                  {b.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="productos" className="bg-brand-bg py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <header className="mb-16">
            <h2 className="font-display text-3xl font-semibold text-zinc-800">
              Líneas pensadas para vos
            </h2>
            <p className="mt-4 max-w-[56ch] text-zinc-500">
              Desde el primer día hasta sus primeros pasos, acompañamos el crecimiento
              de tu bebé con calidad superior.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="group relative flex flex-col rounded-[32px] bg-white p-4 ring-1 ring-black/5">
              <img
                src={productCotton}
                alt="Duffy Cotton"
                width={1000}
                height={1000}
                loading="lazy"
                className="aspect-square w-full rounded-[24px] bg-zinc-50 object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="px-4 py-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-zinc-800">
                      Duffy Cotton
                    </h3>
                    <p className="mt-2 max-w-[40ch] text-zinc-500 text-pretty">
                      Protección integral para todos los días. Suavidad clásica y
                      absorción confiable.
                    </p>
                  </div>
                  <span className="rounded bg-brand-light px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-main">
                    Classic
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-main transition-transform hover:translate-x-1"
                >
                  Ver detalles <span>→</span>
                </button>
              </div>
            </article>

            <article className="group relative flex flex-col rounded-[32px] bg-white p-4 ring-1 ring-black/5">
              <img
                src={productPremium}
                alt="Duffy Premium Cotton"
                width={1000}
                height={1000}
                loading="lazy"
                className="aspect-square w-full rounded-[24px] bg-brand-light/30 object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="px-4 py-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-zinc-800">
                      Duffy Premium Cotton
                    </h3>
                    <p className="mt-2 max-w-[40ch] text-zinc-500 text-pretty">
                      Calidad superior con fibras de algodón seleccionadas para una piel
                      delicada.
                    </p>
                  </div>
                  <span className="rounded bg-brand-main px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Premium
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-main transition-transform hover:translate-x-1"
                >
                  Ver detalles <span>→</span>
                </button>
              </div>
            </article>
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
                <h2 className="mb-6 font-display text-3xl font-semibold leading-tight text-zinc-800">
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
                  className="mt-10 self-start border-b border-brand-mid pb-1 text-sm font-medium text-brand-main"
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
                className="aspect-square w-full bg-brand-light object-cover outline outline-1 -outline-offset-1 outline-black/5 lg:aspect-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Retailers */}
      <section id="donde-comprar" className="bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Disponible en las principales tiendas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {retailers.map((r) => (
              <span
                key={r}
                className="font-display text-xl font-semibold tracking-tight text-zinc-500"
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
              <span className="font-display text-2xl font-semibold tracking-tight text-brand-main">
                Duffy
              </span>
              <p className="mt-6 max-w-[30ch] text-sm leading-relaxed text-zinc-500">
                Cuidando el futuro de Argentina, un pañal a la vez. Calidad premium con
                corazón nacional.
              </p>
            </div>
            <div>
              <p className="mb-6 text-sm font-semibold text-zinc-800">Navegación</p>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li>
                  <a href="#productos" className="transition-colors hover:text-brand-main">
                    Línea Cotton
                  </a>
                </li>
                <li>
                  <a href="#productos" className="transition-colors hover:text-brand-main">
                    Línea Premium
                  </a>
                </li>
                <li>
                  <a href="#tips" className="transition-colors hover:text-brand-main">
                    Tips para padres
                  </a>
                </li>
                <li>
                  <a
                    href="#donde-comprar"
                    className="transition-colors hover:text-brand-main"
                  >
                    Puntos de venta
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-6 text-sm font-semibold text-zinc-800">Contacto</p>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>hola@duffy.com.ar</li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-zinc-950/5 pt-8 sm:flex-row">
            <p className="text-[11px] text-zinc-400">
              © {new Date().getFullYear()} Duffy Argentina. Todos los derechos reservados.
            </p>
            <p className="text-[11px] text-zinc-400">
              Diseño de alta gama para pieles delicadas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
