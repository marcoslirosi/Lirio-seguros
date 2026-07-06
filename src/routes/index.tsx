import { createFileRoute } from "@tanstack/react-router";
import heroBaby from "@/assets/hero-yellow-baby.jpg";
import heroToddler from "@/assets/hero-yellow-toddler.jpg";
import heroMom from "@/assets/hero-yellow-mom.jpg";
import heroCream from "@/assets/hero-cream-baby.jpg";
import productCotton from "@/assets/product-cotton.jpg";
import productPremium from "@/assets/product-premium.jpg";
import duffyLogo from "@/assets/duffy-logo.png.asset.json";
import productJuniorAsset from "@/assets/duffy-junior.png.asset.json";
import wipesFlexAsset from "@/assets/duffy-wipes-flex.png.asset.json";
import wipesHardAsset from "@/assets/duffy-wipes-hard.png.asset.json";

const productJunior = productJuniorAsset.url;
const wipesFlex = wipesFlexAsset.url;
const wipesHard = wipesHardAsset.url;

const ML_LINKS = {
  cotton:
    "https://listado.mercadolibre.com.ar/tienda/duffy/_Container_ESP-CEF1182EF34742269B309C284F2C39C63243800372-Duffy-Cotton",
  premium:
    "https://listado.mercadolibre.com.ar/tienda/duffy/_Container_ESP-CEF1182EF34742269B309C284F2C39C63243800372-Duffy-Premium",
  junior:
    "https://listado.mercadolibre.com.ar/tienda/duffy/_Container_ESP-CEF1182EF34742269B309C284F2C39C63243800372-Junior",
  wipes:
    "https://listado.mercadolibre.com.ar/tienda/duffy/_Container_ESP-CEF1182EF34742269B309C284F2C39C63243800372-Toallitas-H%C3%BAmedas",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Duffy — Pañales listos para cualquier desafío" },
      {
        name: "description",
        content:
          "Pañales Duffy Cotton, Premium Cotton y Junior + Toallitas Húmedas: 12 horas de protección con tecnología japonesa Nº1 en calidad.",
      },
      { property: "og:title", content: "Duffy — Pañales listos para cualquier desafío" },
      {
        property: "og:description",
        content: "Cotton, Premium y Junior. 12 horas de protección con tecnología japonesa.",
      },
    ],
  }),
  component: Index,
});

const stages = [
  { n: "0-3", label: "Recién\nnacido", size: "Talle P" },
  { n: "3-9", label: "Explorando\nel mundo", size: "Talle M" },
  { n: "9-18", label: "Primeros\npasos", size: "Talle G – XG" },
  { n: "+18", label: "Corriendo\nlibres", size: "Talle XXG · Junior XXXG" },
];

const features = [
  { title: "12 h", sub: "Súper seco" },
  { title: "N°1", sub: "Tecnología japonesa" },
  { title: "100%", sub: "Toque algodón" },
  { title: "0", sub: "Paspaduras" },
];

const retailers = ["Farmacity", "Coto", "Carrefour", "Jumbo", "Pigmento", "DIA", "Vea"];

function Index() {
  return (
    <div className="min-h-screen bg-duffy-yellow font-sans text-zinc-900 antialiased selection:bg-duffy-plum selection:text-white">
      {/* Announcement bar */}
      <div className="bg-duffy-plum text-center text-sm font-bold text-white sm:text-[15px]">
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-12">
          Nueva presentación, el mismo Duffy que conocés
          <a
            href="#productos"
            className="ml-3 inline-flex items-center gap-1 rounded-sm underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-duffy-plum"
          >
            Conocé la línea <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav aria-label="Principal" className="relative z-40">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:gap-8 sm:px-6 sm:py-6 lg:px-12">
          <a
            href="/"
            aria-label="Duffy — Ir al inicio"
            className="flex min-w-0 shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-plum focus-visible:ring-offset-2 focus-visible:ring-offset-duffy-yellow"
          >
            <img
              src={duffyLogo.url}
              alt="Duffy"
              width={480}
              height={360}
              className="h-10 w-auto sm:h-12 md:h-14"
            />
          </a>
          <ul className="hidden items-center justify-center gap-10 text-[17px] font-extrabold uppercase tracking-wide text-zinc-900 md:flex lg:text-[18px]">
            {[
              { href: "#productos", label: "Pañales" },
              { href: "#toallitas", label: "Toallitas" },
              { href: "#etapas", label: "Mi bebé" },
              { href: "#tips", label: "Tips" },
              { href: "#donde-comprar", label: "Dónde comprar" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-duffy-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-plum focus-visible:ring-offset-4 focus-visible:ring-offset-duffy-yellow"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#donde-comprar"
            aria-label="Comprá ahora — Ir a la sección Dónde comprar"
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-duffy-plum px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-duffy-plum/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-plum focus-visible:ring-offset-2 focus-visible:ring-offset-duffy-yellow sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
          >
            <span className="hidden sm:inline">Comprá ahora</span>
            <span className="sm:hidden">Comprar</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </nav>



      {/* Hero — Rascals-style photo grid on flood color */}
      <header className="relative">
        <div className="mx-auto grid max-w-[1800px] grid-cols-2 gap-2 px-2 md:grid-cols-4 md:gap-3 md:px-3">
          <div className="aspect-square overflow-hidden rounded-3xl">
            <img
              src={heroBaby}
              alt="Bebé sonriendo con pañal Duffy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 aspect-square overflow-hidden rounded-3xl md:col-span-2 md:aspect-auto">
            <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-6 text-center">
              <span className="rounded-full bg-white/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-900 backdrop-blur">
                Nueva imagen · mismo Duffy
              </span>
              <h1 className="font-display text-4xl font-black leading-[0.95] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Listos para
                <br />
                <span style={{ fontFamily: "var(--font-script)" }} className="text-duffy-plum font-bold italic">
                  cualquier desafío
                </span>
              </h1>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 rounded-full bg-duffy-plum px-7 py-4 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-duffy-plum/90"
              >
                Conocé Duffy <span aria-hidden>→</span>
              </a>
            </div>
          </div>
          <div className="aspect-square overflow-hidden rounded-3xl">
            <img
              src={heroToddler}
              alt="Bebé gateando con pañal Duffy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Second row of tiles */}
        <div className="mx-auto mt-2 grid max-w-[1800px] grid-cols-2 gap-2 px-2 md:mt-3 md:grid-cols-4 md:gap-3 md:px-3">
          <div className="aspect-square overflow-hidden rounded-3xl bg-duffy-plum">
            <div className="flex h-full flex-col justify-between p-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">01 · Descubrí</span>
              <p className="font-display text-2xl font-bold leading-tight">
                Tres líneas.<br/>
                Una sola<br/>
                promesa:<br/>
                <span style={{ fontFamily: "var(--font-script)" }} className="text-3xl font-bold italic">super seco.</span>
              </p>
            </div>
          </div>
          <div className="aspect-square overflow-hidden rounded-3xl">
            <img
              src={heroMom}
              alt="Mamá levantando a su bebé sonriendo"
              width={1280}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-3xl bg-duffy-orange">
            <div className="flex h-full flex-col justify-between p-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">02 · Suavidad</span>
              <p className="font-display text-2xl font-bold leading-tight">
                De pies<br/>
                a cabeza:<br/>
                pañales y toallitas<br/>
                <span style={{ fontFamily: "var(--font-script)" }} className="text-3xl font-bold italic">que los cuidan siempre.</span>
              </p>
            </div>
          </div>
          <div className="aspect-square overflow-hidden rounded-3xl">
            <img
              src={heroCream}
              alt="Bebé sentado tranquilo"
              width={1280}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Features ticker */}
      <section className="mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-6 border-y-2 border-zinc-900/10 py-10 md:grid-cols-4">
            {features.map((f) => (
              <div key={f.sub} className="flex flex-col items-start">
                <span className="font-display text-5xl font-black leading-none tracking-tight text-zinc-900">
                  {f.title}
                </span>
                <span className="mt-3 text-sm font-semibold text-zinc-700">{f.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products — 3-up grid */}
      <section id="productos" className="mt-24 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-duffy-plum">
                Nuestros pañales
              </span>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-zinc-900 lg:text-6xl">
                Elegí tu
                <span style={{ fontFamily: "var(--font-script)" }} className="ml-3 font-bold italic text-duffy-plum">
                  Duffy
                </span>
              </h2>
            </div>
            <p className="max-w-xs text-sm text-zinc-700">
              Tres líneas pensadas para cada momento del crecimiento. Todas con tecnología japonesa Nº1 en calidad.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Cotton */}
            <article className="group relative flex flex-col overflow-hidden rounded-[36px] bg-duffy-cream ring-1 ring-zinc-900/5 transition-all hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <span className="pointer-events-none absolute -left-10 bottom-6 size-40 rounded-full bg-white/70 blur-3xl" />
                <span className="pointer-events-none absolute right-6 top-10 size-24 rounded-full bg-white/90 blur-2xl" />
                <img
                  src={productCotton}
                  alt="Pañales Duffy Cotton"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="relative aspect-square w-full object-contain p-10 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-6 top-6 rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Cotton
                </div>
              </div>
              <div className="flex flex-1 flex-col border-t border-zinc-900/10 bg-white p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl font-black tracking-tight text-zinc-900">
                    Duffy Cotton
                  </h3>
                  <span className="shrink-0 rounded-full bg-duffy-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-900">
                    Megapack
                  </span>
                </div>
                <p className="mt-3 text-zinc-600 text-pretty">
                  El clásico Duffy: máxima absorción, cintura elástica y doble capa protectora para todos los días.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-zinc-500">
                  <span className="rounded-full bg-zinc-100 px-3 py-1">P · M · G · XG · XXG</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Antipaspaduras</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">12 h</span>
                </div>
                <p className="mt-4 text-[11px] text-zinc-500">Disponible en Megapack, Hiperpack y Mega Ahorro.</p>
                <a
                  href={ML_LINKS.cotton}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-duffy-plum px-6 py-3 text-sm font-bold text-white transition-all hover:bg-duffy-plum/90"
                >
                  Comprar <span aria-hidden>→</span>
                </a>
              </div>
            </article>

            {/* Premium Cotton */}
            <article className="group relative flex flex-col overflow-hidden rounded-[36px] bg-duffy-orange-soft ring-1 ring-zinc-900/5 transition-all hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <span className="pointer-events-none absolute -right-12 top-6 size-44 rounded-full bg-white/60 blur-3xl" />
                <span className="pointer-events-none absolute left-8 bottom-8 size-24 rounded-full bg-white/80 blur-2xl" />
                <img
                  src={productPremium}
                  alt="Pañales Duffy Premium Cotton"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="relative aspect-square w-full object-contain p-10 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-6 top-6 rounded-full bg-duffy-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Premium Cotton
                </div>
              </div>
              <div className="flex flex-1 flex-col border-t border-zinc-900/10 bg-white p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl font-black tracking-tight text-zinc-900">
                    Duffy Premium
                  </h3>
                  <span className="shrink-0 rounded-full bg-duffy-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Hiperpack
                  </span>
                </div>
                <p className="mt-3 text-zinc-600 text-pretty">
                  Nuestra versión más avanzada: canales de aire, toque suave y absorción reforzada para pieles delicadas.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-zinc-500">
                  <span className="rounded-full bg-zinc-100 px-3 py-1">P · M · G · XG · XXG</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Canales de aire</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Toque suave</span>
                </div>
                <p className="mt-4 text-[11px] text-zinc-500">Formato Hiperpack.</p>
                <a
                  href={ML_LINKS.premium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-duffy-plum px-6 py-3 text-sm font-bold text-white transition-all hover:bg-duffy-plum/90"
                >
                  Comprar <span aria-hidden>→</span>
                </a>
              </div>
            </article>

            {/* Junior */}
            <article className="group relative flex flex-col overflow-hidden rounded-[36px] bg-duffy-yellow-soft ring-1 ring-zinc-900/5 transition-all hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <span className="pointer-events-none absolute -right-10 -top-6 size-44 rounded-full bg-white/70 blur-3xl" />
                <span className="pointer-events-none absolute left-6 bottom-6 size-24 rounded-full bg-white/80 blur-2xl" />
                <img
                  src={productJunior}
                  alt="Pañales Duffy Junior"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="relative aspect-square w-full object-contain p-10 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-6 top-6 rounded-full bg-duffy-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-900">
                  Junior · XXXG
                </div>
              </div>
              <div className="flex flex-1 flex-col border-t border-zinc-900/10 bg-white p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl font-black tracking-tight text-zinc-900">
                    Duffy Junior
                  </h3>
                  <span className="shrink-0 rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    +18 kg
                  </span>
                </div>
                <p className="mt-3 text-zinc-600 text-pretty">
                  Máxima protección para los más grandes e inquietos. Uso diurno y nocturno, pensado para chicos activos sin perder contención.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-zinc-500">
                  <span className="rounded-full bg-zinc-100 px-3 py-1">XXXG</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Air Paths Technology</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Máxima absorción</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Orejas repegables</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Toque suave</span>
                </div>
                <p className="mt-4 text-[11px] text-zinc-500">Disponible en pack x30 y x50 unidades.</p>
                <a
                  href={ML_LINKS.junior}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-duffy-plum px-6 py-3 text-sm font-bold text-white transition-all hover:bg-duffy-plum/90"
                >
                  Comprar <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Toallitas — sección secundaria */}
      <section id="toallitas" className="mt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="overflow-hidden rounded-[36px] bg-white ring-1 ring-zinc-900/5">
            <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
              {/* Copy */}
              <div className="flex flex-col justify-between gap-8 p-10 lg:p-14">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-duffy-plum">
                    Complemento del ritual
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-zinc-900 lg:text-5xl">
                    Toallitas Húmedas
                    <span style={{ fontFamily: "var(--font-script)" }} className="ml-2 font-bold italic text-duffy-plum">
                      Duffy
                    </span>
                  </h2>
                  <p className="mt-5 max-w-md text-sm text-zinc-600">
                    Ultra suaves para una limpieza delicada. Hipoalergénicas y dermatológicamente testeadas, libres de fragancias, alcohol etílico y parabenos. No testeadas en animales. Ideales para cara, manos, pies y todo el cuerpo.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-zinc-600">
                    <span className="rounded-full bg-zinc-100 px-3 py-1">48 unidades</span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1">20 × 15 cm</span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1">Sin alcohol ni parabenos</span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold text-zinc-900">
                    <span className="rounded-full bg-duffy-yellow-soft px-3 py-1 ring-1 ring-zinc-900/10">Tapa flexible</span>
                    <span className="rounded-full bg-duffy-orange-soft px-3 py-1 ring-1 ring-zinc-900/10">Tapa plástica</span>
                  </div>
                </div>
                <a
                  href={ML_LINKS.wipes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-duffy-plum px-6 py-3 text-sm font-bold text-white transition-all hover:bg-duffy-plum/90"
                >
                  Comprar <span aria-hidden>→</span>
                </a>
              </div>
              {/* Imgs */}
              <div className="grid grid-cols-2 gap-2 bg-duffy-cream p-4 md:p-6">
                <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-zinc-900/5">
                  <img
                    src={wipesFlex}
                    alt="Toallitas Húmedas Duffy tapa flexible"
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-contain p-6"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-900 ring-1 ring-zinc-900/10">
                    Flexible
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-zinc-900/5">
                  <img
                    src={wipesHard}
                    alt="Toallitas Húmedas Duffy tapa plástica"
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-contain p-6"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-900 ring-1 ring-zinc-900/10">
                    Plástica
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section id="etapas" className="mt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="rounded-[40px] bg-duffy-plum p-10 text-white lg:p-16">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-duffy-plum-soft">
                  Mi bebé crece
                </span>
                <h2 className="mt-3 font-display text-4xl font-black tracking-tight lg:text-5xl">
                  Acompañamos cada
                  <span style={{ fontFamily: "var(--font-script)" }} className="ml-3 font-bold italic text-duffy-yellow">
                    etapa
                  </span>
                </h2>
              </div>
              <p className="max-w-sm text-sm text-white/80">
                Desde los primeros días hasta las primeras carreras. Duffy tiene el talle y la línea justa para cada momento.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {stages.map((s) => (
                <div
                  key={s.n}
                  className="flex flex-col rounded-3xl bg-white/10 p-6 backdrop-blur transition-colors hover:bg-white/15"
                >
                  <span className="font-display text-4xl font-black leading-none text-duffy-yellow">
                    {s.n}
                    <span className="text-lg text-white/60"> m</span>
                  </span>
                  <p className="mt-6 whitespace-pre-line font-display text-lg font-bold leading-tight text-white">
                    {s.label}
                  </p>
                  <span className="mt-4 inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-duffy-yellow">
                    {s.size}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="mt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-3 md:grid-cols-3">
            <article className="rounded-[32px] bg-white p-8 ring-1 ring-zinc-900/5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-duffy-plum">Tip 01</span>
              <h3 className="mt-4 font-display text-2xl font-black leading-tight text-zinc-900">
                El ritual del cambio como momento de conexión
              </h3>
              <p className="mt-4 text-sm text-zinc-600">
                Bajá el ritmo, mirá a tu bebé a los ojos y contale lo que estás haciendo. El pañal también es vínculo.
              </p>
              <a href="#" className="mt-6 inline-flex text-sm font-bold text-duffy-plum hover:underline">
                Leer más →
              </a>
            </article>
            <article className="rounded-[32px] bg-duffy-plum p-8 text-white">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-duffy-yellow">Tip 02</span>
              <h3 className="mt-4 font-display text-2xl font-black leading-tight">
                Cuidar la piel del recién nacido en invierno
              </h3>
              <p className="mt-4 text-sm text-white/80">
                Habitación tibia, cambios frecuentes y una capa suave de crema barrera después de cada cambio.
              </p>
              <a href="#" className="mt-6 inline-flex text-sm font-bold text-duffy-yellow hover:underline">
                Leer más →
              </a>
            </article>
            <article className="rounded-[32px] bg-white p-8 ring-1 ring-zinc-900/5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-duffy-plum">Tip 03</span>
              <h3 className="mt-4 font-display text-2xl font-black leading-tight text-zinc-900">
                Cómo elegir el talle correcto sin errores
              </h3>
              <p className="mt-4 text-sm text-zinc-600">
                Guiate por el peso más que por la edad. Y si te queda marca en la piel, es momento de subir de talle.
              </p>
              <a href="#" className="mt-6 inline-flex text-sm font-bold text-duffy-plum hover:underline">
                Leer más →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Retailers */}
      <section id="donde-comprar" className="mt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="rounded-[40px] bg-white p-10 ring-1 ring-zinc-900/5 lg:p-16">
            <div className="text-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-duffy-plum">
                Dónde encontrarnos
              </span>
              <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-black tracking-tight text-zinc-900 lg:text-5xl">
                En las
                <span style={{ fontFamily: "var(--font-script)" }} className="mx-3 font-bold italic text-duffy-plum">
                  góndolas
                </span>
                de todo el país
              </h2>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {retailers.map((r) => (
                <span
                  key={r}
                  className="font-display text-xl font-black tracking-tight text-zinc-400 transition-colors hover:text-duffy-plum lg:text-2xl"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="mt-16 pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="rounded-[40px] bg-zinc-900 p-10 text-white lg:p-16">
            <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
              <div>
                <div className="inline-flex items-center rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <img
                    src={duffyLogo.url}
                    alt="Duffy"
                    width={480}
                    height={360}
                    className="h-14 w-auto"
                  />
                </div>
                <p className="mt-6 max-w-sm text-sm text-white/70">
                  Duffy diseña pañales con tecnología japonesa para acompañar el crecimiento de las familias argentinas.
                </p>
                <a
                  href="#productos"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-duffy-yellow px-6 py-3 text-sm font-bold text-zinc-900 transition-transform hover:-translate-y-0.5"
                >
                  Conocé los productos <span aria-hidden>→</span>
                </a>
              </div>
              <div>
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-white/50">Navegar</p>
                <ul className="space-y-3 text-sm text-white/90">
                  <li><a href="#productos" className="hover:text-duffy-yellow transition-colors">Cotton</a></li>
                  <li><a href="#productos" className="hover:text-duffy-yellow transition-colors">Premium Cotton</a></li>
                  <li><a href="#productos" className="hover:text-duffy-yellow transition-colors">Junior</a></li>
                  <li><a href="#toallitas" className="hover:text-duffy-yellow transition-colors">Toallitas Húmedas</a></li>
                  <li><a href="#etapas" className="hover:text-duffy-yellow transition-colors">Etapas</a></li>
                  <li><a href="#tips" className="hover:text-duffy-yellow transition-colors">Tips</a></li>
                  <li><a href="#donde-comprar" className="hover:text-duffy-yellow transition-colors">Puntos de venta</a></li>
                </ul>
              </div>
              <div>
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-white/50">Contacto</p>
                <ul className="space-y-3 text-sm text-white/90">
                  <li>@duffy_arg</li>
                  <li>Duffy Argentina</li>
                  <li>hola@duffy.com.ar</li>
                  <li>0800-333-DUFFY</li>
                </ul>
              </div>
            </div>
            <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-8 text-[11px] text-white/50 sm:flex-row">
              <p>© {new Date().getFullYear()} Duffy Argentina — Todos los derechos reservados</p>
              <p>Tecnología japonesa Nº1 en calidad · Súper seco</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
