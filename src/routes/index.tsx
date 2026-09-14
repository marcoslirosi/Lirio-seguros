import { createFileRoute } from "@tanstack/react-router";
import heroBaby from "@/assets/hero-yellow-baby.jpg";
import heroMom from "@/assets/hero-yellow-mom.jpg";
import productCotton from "@/assets/product-cotton.jpg";
import productPremium from "@/assets/product-premium.jpg";
import duffyLogo from "@/assets/duffy-logo.png.asset.json";
import productJuniorAsset from "@/assets/duffy-junior.png.asset.json";
import wipesFlexAsset from "@/assets/duffy-wipes-flex.png.asset.json";
import wipesHardAsset from "@/assets/duffy-wipes-hard.png.asset.json";

const productJunior = productJuniorAsset.url;
const wipesFlex = wipesFlexAsset.url;
const wipesHard = wipesHardAsset.url;

const ML = {
  duffy:
    "https://listado.mercadolibre.com.ar/tienda/duffy/_Container_ESP-CEF1182EF34742269B309C284F2C39C63243800372-Duffy-Cotton",
  promise: "https://listado.mercadolibre.com.ar/panales-promise",
  lalas: "https://listado.mercadolibre.com.ar/panales-lalas",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zanhang — Higiene descartable: Duffy, Promise y Lalas" },
      {
        name: "description",
        content:
          "Zanhang desarrolla y fabrica productos de higiene descartables en Argentina. Conocé nuestras marcas Duffy, Promise y Lalas y compralas en Mercado Libre.",
      },
      { property: "og:title", content: "Zanhang — Duffy, Promise y Lalas" },
      {
        property: "og:description",
        content:
          "Fabricamos pañales y toallitas que mejoran la calidad de vida en cada etapa. Duffy, Promise y Lalas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const brands = [
  {
    name: "Duffy",
    tag: "Caminitos de aire",
    desc: "La línea premium del cuidado diario. Pañales con toque algodón y tecnología japonesa, en talles RN a XXXG, más toallitas húmedas.",
    bg: "bg-duffy-yellow",
    soft: "bg-duffy-yellow-soft",
    text: "text-zinc-900",
    href: "#duffy",
    ml: ML.duffy,
  },
  {
    name: "Promise",
    tag: "Protección para todos los días",
    desc: "Pañales confiables y accesibles, con máxima absorción y ajuste cómodo para acompañar cada etapa del bebé.",
    bg: "bg-promise",
    soft: "bg-promise-soft",
    text: "text-white",
    href: "#marcas",
    ml: ML.promise,
  },
  {
    name: "Lalas",
    tag: "Suavidad que abraza",
    desc: "Pañales suaves y económicos pensados para el uso diario, con el respaldo de calidad de Zanhang.",
    bg: "bg-lalas",
    soft: "bg-lalas-soft",
    text: "text-white",
    href: "#marcas",
    ml: ML.lalas,
  },
];

const duffyProducts = [
  {
    img: productCotton,
    alt: "Pañales Duffy Cotton",
    name: "Duffy Cotton",
    note: "Megapack · Hiperpack · Mega Ahorro",
    chips: ["Suave", "Cintura elástica", "Barreras de protección"],
    bg: "bg-duffy-yellow-soft",
    ml: ML.duffy,
  },
  {
    img: productPremium,
    alt: "Pañales Duffy Premium Cotton",
    name: "Duffy Premium Cotton",
    note: "Hiperpack",
    chips: ["Súper suave", "Orejas elastizadas", "Caminitos de aire"],
    bg: "bg-duffy-orange-soft",
    ml: ML.duffy,
  },
  {
    img: productJunior,
    alt: "Pañales Duffy Junior",
    name: "Duffy Junior",
    note: "Pack x30 · x50 — Talle XXXG",
    chips: ["Para grandes", "Súper seco 12 h", "Ajuste flexible"],
    bg: "bg-duffy-yellow-soft",
    ml: ML.duffy,
  },
];

const wipes = [
  {
    img: wipesFlex,
    alt: "Toallitas húmedas Duffy tapa flexible",
    name: "Tapa flexible",
    desc: "El formato clásico para llevar a todos lados.",
  },
  {
    img: wipesHard,
    alt: "Toallitas húmedas Duffy tapa plástica",
    name: "Tapa plástica",
    desc: "Cierre hermético que mantiene la humedad por más tiempo.",
  },
];

const features = [
  { title: "12 h", sub: "Súper seco" },
  { title: "N°1", sub: "Tecnología japonesa" },
  { title: "100%", sub: "Toque algodón" },
  { title: "0%", sub: "Alcohol en toallitas" },
];

const retailers = ["Carrefour", "Makro", "Pañaleras"];

function Index() {
  return (
    <div className="min-h-screen bg-duffy-cream font-sans text-zinc-900 antialiased selection:bg-duffy-plum selection:text-white">
      {/* Announcement bar */}
      <div className="bg-duffy-plum text-center text-sm font-bold text-white sm:text-[15px]">
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-12">
          Fabricamos higiene descartable en Argentina desde 2020
          <a
            href="#marcas"
            className="ml-3 inline-flex items-center gap-1 rounded-sm underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-duffy-plum"
          >
            Conocé las marcas <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav aria-label="Principal" className="relative z-40">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:gap-8 sm:px-6 sm:py-6 lg:px-12">
          <a
            href="/"
            aria-label="Zanhang — Ir al inicio"
            className="flex min-w-0 shrink-0 items-baseline gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-plum focus-visible:ring-offset-2"
          >
            <span className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Zanhang
            </span>
            <span className="hidden font-script text-xl text-duffy-plum sm:inline">
              cuidamos cada etapa
            </span>
          </a>
          <ul className="hidden items-center justify-center gap-7 text-sm font-bold uppercase tracking-wide md:flex lg:gap-8">
            {[
              { href: "#marcas", label: "Marcas" },
              { href: "#duffy", label: "Duffy" },
              { href: "#toallitas", label: "Toallitas" },
              { href: "#nosotros", label: "Nosotros" },
              { href: "#donde-comprar", label: "Dónde comprar" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-duffy-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-plum focus-visible:ring-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#donde-comprar"
            aria-label="Comprá ahora — Ir a la sección Dónde comprar"
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-duffy-plum px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-duffy-plum/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-plum focus-visible:ring-offset-2 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
          >
            <span className="hidden sm:inline">Comprá ahora</span>
            <span className="sm:hidden">Comprar</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-10 sm:pt-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:pb-24">
          <div>
            <p className="font-script text-3xl text-duffy-plum sm:text-4xl">
              caminitos de aire
            </p>
            <h1 className="mt-3 font-display text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Higiene descartable que cuida{" "}
              <span className="text-duffy-plum">en cada etapa</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-700">
              En Zanhang desarrollamos y fabricamos pañales y toallitas con un
              objetivo claro: mejorar la calidad de vida de las personas. Tres
              marcas, un mismo compromiso.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#marcas"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-zinc-900 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
              >
                Ver las marcas <span aria-hidden>→</span>
              </a>
              <a
                href={ML.duffy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-zinc-900 px-7 py-3 text-sm font-bold transition-colors hover:bg-zinc-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
              >
                Comprar en Mercado Libre
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={heroBaby}
              alt="Bebé sonriendo sobre fondo amarillo"
              className="aspect-[3/4] w-full rounded-[36px] object-cover"
            />
            <img
              src={heroMom}
              alt="Mamá sosteniendo a su bebé"
              className="mt-10 aspect-[3/4] w-full rounded-[36px] object-cover"
            />
          </div>
        </div>
      </header>

      {/* Features ticker */}
      <div className="bg-zinc-900 py-5 text-white">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 lg:px-12">
          {features.map((f) => (
            <li key={f.sub} className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-black text-duffy-yellow">
                {f.title}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide">
                {f.sub}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Brands */}
      <section id="marcas" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <p className="font-script text-3xl text-duffy-plum">nuestras marcas</p>
          <h2 className="mt-2 max-w-2xl font-display text-4xl font-black tracking-tight sm:text-5xl">
            Tres marcas, una misma fábrica de calidad
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {brands.map((b) => (
              <article
                key={b.name}
                className={`flex flex-col rounded-[36px] ${b.bg} ${b.text} p-8 shadow-sm`}
              >
                <h3 className="font-display text-4xl font-black">{b.name}</h3>
                <p className="mt-1 font-script text-2xl opacity-90">{b.tag}</p>
                <p className="mt-4 flex-1 leading-relaxed opacity-95">{b.desc}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={b.ml}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
                  >
                    Ver en Mercado Libre <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Duffy lineup */}
      <section id="duffy" className="scroll-mt-24 bg-duffy-yellow">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <img
                src={duffyLogo.url}
                alt="Duffy"
                width={480}
                height={360}
                className="h-14 w-auto sm:h-16"
              />
              <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
                Nuestros pañales
              </h2>
              <p className="mt-3 max-w-xl text-zinc-800">
                Tres líneas para acompañar cada etapa, del recién nacido al que
                ya corre libre.
              </p>
            </div>
            <span className="rounded-full bg-duffy-plum px-5 py-2 text-sm font-bold text-white">
              Tecnología japonesa N°1
            </span>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {duffyProducts.map((p) => (
              <article
                key={p.name}
                className={`flex flex-col overflow-hidden rounded-[36px] ${p.bg} shadow-sm`}
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  className="aspect-square w-full object-contain p-6"
                />
                <div className="flex flex-1 flex-col p-7 pt-0">
                  <h3 className="font-display text-2xl font-black">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-duffy-plum">
                    {p.note}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.chips.map((c) => (
                      <li
                        key={c}
                        className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.ml}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-duffy-plum px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-duffy-plum/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-plum focus-visible:ring-offset-2"
                  >
                    Comprar <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Wipes */}
      <section id="toallitas" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <div className="overflow-hidden rounded-[36px] bg-duffy-orange-soft p-8 sm:p-12">
            <p className="font-script text-3xl text-duffy-plum">
              de pies a cabeza
            </p>
            <h2 className="mt-2 font-display text-4xl font-black tracking-tight sm:text-5xl">
              Toallitas Húmedas Duffy
            </h2>
            <p className="mt-4 max-w-xl text-zinc-700">
              0% alcohol, extra suaves y con el mismo cuidado de siempre. Dos
              formatos para elegir.
            </p>
            <div className="mt-10 grid max-w-2xl items-stretch justify-items-center gap-6 sm:grid-cols-2">
              {wipes.map((w) => (
                <article
                  key={w.name}
                  className="flex w-full max-w-xs flex-col items-center rounded-[28px] bg-white p-6 text-center shadow-sm"
                >
                  <img
                    src={w.img}
                    alt={w.alt}
                    className="aspect-square w-full object-contain"
                  />
                  <h3 className="mt-4 font-display text-xl font-black">
                    {w.name}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">{w.desc}</p>
                </article>
              ))}
            </div>
            <a
              href={ML.duffy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-zinc-900 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              Comprar toallitas en Mercado Libre <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="scroll-mt-24 bg-duffy-plum text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-script text-3xl text-duffy-yellow">nosotros</p>
              <h2 className="mt-2 font-display text-4xl font-black tracking-tight sm:text-5xl">
                Industria argentina con estándar internacional
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-white/85">
                Desde 2020 fabricamos productos de higiene descartables con
                tecnología japonesa y controles de calidad en cada lote.
                Pañales para bebés y adultos, y toallitas húmedas que llegan a
                todo el país.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { n: "2020", d: "Año de fundación" },
                { n: "3", d: "Marcas propias" },
                { n: "100%", d: "Fabricación nacional" },
                { n: "+40", d: "Personas en el equipo" },
              ].map((s) => (
                <li
                  key={s.d}
                  className="rounded-[28px] bg-white/10 p-6 backdrop-blur-sm"
                >
                  <p className="font-display text-4xl font-black text-duffy-yellow">
                    {s.n}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-white/80">
                    {s.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Where to buy */}
      <section id="donde-comprar" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <p className="font-script text-3xl text-duffy-plum">cerca tuyo</p>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Dónde encontrarnos
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[36px] bg-zinc-900 p-8 text-white sm:p-10">
              <h3 className="font-display text-2xl font-black">Comprá online</h3>
              <p className="mt-3 text-white/80">
                Encontrá todo el catálogo de Duffy, Promise y Lalas con envío a
                todo el país.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {[
                  { label: "Duffy en Mercado Libre", href: ML.duffy },
                  { label: "Promise en Mercado Libre", href: ML.promise },
                  { label: "Lalas en Mercado Libre", href: ML.lalas },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-duffy-yellow px-6 py-2.5 text-sm font-bold text-zinc-900 transition-all hover:bg-duffy-yellow-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                    >
                      {l.label} <span aria-hidden>→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[36px] bg-duffy-yellow-soft p-8 sm:p-10">
              <h3 className="font-display text-2xl font-black">
                En tiendas físicas
              </h3>
              <p className="mt-3 text-zinc-700">
                Buscá nuestros productos en las principales cadenas y pañaleras
                del país.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {retailers.map((r) => (
                  <li
                    key={r}
                    className="rounded-full bg-white px-6 py-2.5 text-sm font-bold shadow-sm"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-14 sm:flex-row sm:items-center lg:px-12">
          <div>
            <p className="font-display text-3xl font-black uppercase">Zanhang</p>
            <p className="mt-2 max-w-sm text-sm text-white/70">
              Higiene descartable que mejora la calidad de vida en cada etapa.
              Duffy · Promise · Lalas.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-wide">
            {[
              { href: "#marcas", label: "Marcas" },
              { href: "#duffy", label: "Duffy" },
              { href: "#toallitas", label: "Toallitas" },
              { href: "#nosotros", label: "Nosotros" },
              { href: "#donde-comprar", label: "Dónde comprar" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-sm transition-colors hover:text-duffy-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Zanhang S.A. — Todos los derechos
          reservados.
        </div>
      </footer>
    </div>
  );
}
