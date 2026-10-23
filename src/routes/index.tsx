import { useEffect, useRef, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroEtapaBebeAsset from "@/assets/hero-etapa-bebe.png.asset.json";
import heroEtapaAdultosAsset from "@/assets/hero-etapa-adultos.jpg.asset.json";
import heroEtapaMujeresAsset from "@/assets/hero-etapa-mujeres.jpg.asset.json";
import duffyLogo from "@/assets/duffy-logo.png.asset.json";
import zanhangLogo from "@/assets/zanhang-logo.png.asset.json";
import cottonPackAsset from "@/assets/duffy-cotton-pack.png.asset.json";
import premiumPackAsset from "@/assets/duffy-premium-pack.png.asset.json";
import juniorPackAsset from "@/assets/duffy-junior-pack.png.asset.json";
import wipesPlasticAsset from "@/assets/duffy-wipes-plastic.png.asset.json";
import wipesFlexAsset from "@/assets/duffy-wipes-flex.png.asset.json";
import wipesHardAsset from "@/assets/duffy-wipes-hard.png.asset.json";
import duffyBrandAsset from "@/assets/duffy-brand.png.asset.json";
import promiseBrandAsset from "@/assets/promise-brand.png.asset.json";
import lalasBrandAsset from "@/assets/lalas-brand-v2.png.asset.json";

const heroEtapaBebe = heroEtapaBebeAsset.url;
const heroEtapaAdultos = heroEtapaAdultosAsset.url;
const heroEtapaMujeres = heroEtapaMujeresAsset.url;
const cottonPack = cottonPackAsset.url;
const premiumPack = premiumPackAsset.url;
const juniorPack = juniorPackAsset.url;
const wipesPlastic = wipesPlasticAsset.url;
const wipesFlex = wipesFlexAsset.url;
const wipesHard = wipesHardAsset.url;
const duffyBrand = duffyBrandAsset.url;
const promiseBrand = promiseBrandAsset.url;
const lalasBrand = lalasBrandAsset.url;

const ML = {
  duffy:
    "https://listado.mercadolibre.com.ar/tienda/duffy/_Container_ESP-CEF1182EF34742269B309C284F2C39C63243800372-Duffy-Cotton",
  cotton:
    "https://listado.mercadolibre.com.ar/tienda/duffy/_Container_ESP-CEF1182EF34742269B309C284F2C39C63243800372-Duffy-Cotton",
  premium:
    "https://listado.mercadolibre.com.ar/tienda/duffy/_Container_ESP-CEF1182EF34742269B309C284F2C39C63243800372-Duffy-Premium",
  junior:
    "https://listado.mercadolibre.com.ar/tienda/duffy/_Container_ESP-CEF1182EF34742269B309C284F2C39C63243800372-Junior",
  toallitas:
    "https://listado.mercadolibre.com.ar/tienda/duffy/_Container_ESP-CEF1182EF34742269B309C284F2C39C63243800372-Toallitas-H%C3%BAmedas",
  promise: "https://listado.mercadolibre.com.ar/panales-adultos-promise",
  lalas: "https://listado.mercadolibre.com.ar/toallas-femeninas-lalas",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zanhang — Higiene descartable: Duffy, Promise y Lalas" },
      {
        name: "description",
        content:
          "Zanhang fabrica pañales para bebés (Duffy) y adultos (Promise) e higiene femenina (Lalas) en Argentina. Comprá en Mercado Libre.",
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
    logo: duffyBrand,
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
    logo: promiseBrand,
    tag: "Protección para adultos",
    desc: "Pañales para adultos con máxima absorción, ajuste suave y discreción total, para acompañar cada día con comodidad y dignidad.",
    bg: "bg-promise",
    soft: "bg-promise-soft",
    text: "text-white",
    href: "#promise",
    ml: ML.promise,
  },
  {
    name: "Lalas",
    logo: lalasBrand,
    tag: "Higiene femenina",
    desc: "Toallas y toallitas femeninas ultra suaves, con protección confiable y cómoda para acompañar cada día del mes.",
    bg: "bg-lalas",
    soft: "bg-lalas-soft",
    text: "text-white",
    href: "#lalas",
    ml: ML.lalas,
  },
];

const duffyProducts = [
  {
    img: cottonPack,
    alt: "Pañales Duffy Cotton",
    name: "Duffy Cotton",
    note: "P · M · G · XG · XXG",
    bg: "bg-duffy-cream",
    ml: ML.cotton,
    offset: "",
  },
  {
    img: premiumPack,
    alt: "Pañales Duffy Premium Cotton",
    name: "Duffy Premium Cotton",
    note: "Hiperpack · P a XXG",
    bg: "bg-duffy-orange-soft",
    ml: ML.premium,
    offset: "lg:mt-10",
  },
  {
    img: juniorPack,
    alt: "Pañales Duffy Junior",
    name: "Duffy Junior",
    note: "XXXG · +18 kg",
    bg: "bg-duffy-yellow-soft",
    ml: ML.junior,
    offset: "",
  },
  {
    img: wipesPlastic,
    alt: "Toallitas húmedas Duffy tapa plástica",
    name: "Toallitas Húmedas",
    note: "Tapa plástica · x48",
    bg: "bg-duffy-plum-soft/50",
    ml: ML.toallitas,
    offset: "lg:mt-10",
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

const retailers = [
  "Carrefour",
  "Makro",
  "Principales pañaleras del país",
  "Supermercados",
];

const stages = [
  {
    emoji: "🍼",
    age: "0 meses – 18 kg",
    title: "Bebés",
    desc: "Duffy los cuida desde el primer upa y Duffy Junior sigue el ritmo de los más grandes e inquietos: toque algodón, súper secos día y noche y orejas repegables.",
    brand: "Duffy & Duffy Junior",
    href: "#duffy",
    bg: "bg-duffy-orange",
    text: "text-white",
  },
  {
    emoji: "🌸",
    age: "Cada día del mes",
    title: "Femenino",
    desc: "Lalas cuida con toallas y toallitas femeninas ultra suaves: confort delicado, protección confiable y libertad para sentirte vos.",
    brand: "Lalas",
    href: "#lalas",
    bg: "bg-lalas",
    text: "text-white",
  },
  {
    emoji: "💙",
    age: "Todas las edades",
    title: "Incontinencia",
    desc: "Promise acompaña a adultos y adultos mayores con pañales de máxima absorción, ajuste suave y discreción total.",
    brand: "Promise",
    href: "#promise",
    bg: "bg-promise",
    text: "text-white",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

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
            className="flex min-w-0 shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-plum focus-visible:ring-offset-2"
          >
            <img
              src={zanhangLogo.url}
              alt="Zanhang S.A."
              className="h-10 w-auto sm:h-12 md:h-14"
            />
          </a>
          <ul className="hidden items-center justify-center gap-7 text-sm font-bold uppercase tracking-wide md:flex lg:gap-8">
              {[
                { href: "#marcas", label: "Marcas" },
                { href: "#etapas", label: "Etapas" },
                { href: "#duffy", label: "Duffy" },
                { href: "#promise", label: "Promise" },
                { href: "#lalas", label: "Lalas" },
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
        {/* Blobs flotantes */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="zan-float-slow absolute -left-20 top-32 h-64 w-64 rounded-full bg-duffy-yellow opacity-70 blur-3xl" />
          <div
            className="zan-float absolute right-4 top-8 h-44 w-44 rounded-full bg-duffy-plum-soft opacity-40 blur-3xl"
            style={{ animationDelay: "1.4s" }}
          />
          <div
            className="zan-float-slow absolute bottom-8 left-1/3 h-52 w-52 rounded-full bg-duffy-orange-soft opacity-80 blur-3xl"
            style={{ animationDelay: "2.4s" }}
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-10 sm:pt-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:pb-24">
          <div>
            <p className="zan-rise font-script text-3xl text-duffy-plum sm:text-4xl">
              te acompañamos en cada etapa
            </p>
            <h1
              className="zan-rise mt-3 font-display text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "120ms" }}
            >
              Zanhang cuida{" "}
              <span className="text-duffy-plum">toda tu vida</span>
            </h1>
            <p
              className="zan-rise mt-6 max-w-lg text-lg leading-relaxed text-zinc-700"
              style={{ animationDelay: "240ms" }}
            >
              De la primera upa a los años dorados: desarrollamos y fabricamos
              pañales para bebés y adultos, higiene femenina y toallitas
              húmedas. Tres marcas, un mismo compromiso: mejorar tu calidad de
              vida en cada etapa.
            </p>
            <div
              className="zan-rise mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href="#marcas"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-duffy-plum px-7 py-3 text-sm font-bold text-white transition-all hover:bg-duffy-plum/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-plum focus-visible:ring-offset-2"
              >
                Ver las marcas <span aria-hidden>→</span>
              </a>
              <a
                href={ML.duffy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-duffy-plum px-7 py-3 text-sm font-bold text-zinc-900 transition-colors hover:bg-duffy-plum hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-plum focus-visible:ring-offset-2"
              >
                Comprar en Mercado Libre
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 items-start gap-3 sm:gap-4 lg:scale-[1.06] lg:origin-bottom">
            <img
              src={heroEtapaBebe}
              alt="Bebé jugando, línea Duffy"
              className="zan-float aspect-[2/3] w-full rounded-[28px] object-cover shadow-lg sm:rounded-[36px]"
            />
            <img
              src={heroEtapaMujeres}
              alt="Mujeres riendo juntas, línea Lalas"
              className="zan-float mt-5 aspect-[2/3] w-full rounded-[28px] object-cover shadow-lg sm:mt-8 sm:rounded-[36px] lg:mt-14"
              style={{ animationDelay: "0.8s" }}
            />
            <img
              src={heroEtapaAdultos}
              alt="Pareja mayor sonriendo, línea Promise"
              className="zan-float z-10 mt-10 aspect-[2/3] w-full rounded-[28px] object-cover shadow-lg sm:mt-16 sm:rounded-[36px] lg:mt-28"
              style={{ animationDelay: "1.6s" }}
            />
          </div>
        </div>
      </header>

      {/* Features ticker */}
      <div className="overflow-hidden bg-zinc-900 py-5 text-white">
        <div className="zan-marquee flex w-max items-center">
          {[0, 1].map((dup) => (
            <ul
              key={dup}
              aria-hidden={dup === 1}
              className="flex items-center gap-10 pr-10"
            >
              {features.map((f) => (
                <li key={f.sub} className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-black text-duffy-yellow">
                    {f.title}
                  </span>
                  <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-wide">
                    {f.sub}
                  </span>
                  <span aria-hidden className="ml-6 text-duffy-plum-soft">
                    ✦
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Brands */}
      <section id="marcas" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <p className="font-script text-3xl text-duffy-plum">nuestras marcas</p>
          <h2 className="mt-2 max-w-2xl font-display text-4xl font-black tracking-tight sm:text-5xl">
            Tres marcas, una misma fábrica de calidad
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {brands.map((b, i) => (
              <Reveal key={b.name} delay={i * 120} className="h-full">
              <article
                className={`group flex h-full flex-col rounded-[36px] ${b.bg} ${b.text} p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <img
                  src={b.logo}
                  alt={b.name}
                  width={300}
                  height={160}
                  className="h-16 w-auto max-w-[230px] object-contain object-left transition-transform duration-300 group-hover:scale-105 sm:h-20"
                />
                <p className="mt-2 font-script text-2xl opacity-90">{b.tag}</p>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Life stages */}
      <section id="etapas" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <Reveal>
            <p className="font-script text-3xl text-duffy-plum">
              de la primera upa a los años dorados
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-black tracking-tight sm:text-5xl">
              Zanhang te acompaña en cada etapa de tu vida
            </h2>
            <p className="mt-4 max-w-xl text-lg text-zinc-700">
              Un mismo cuidado que crece con vos, marca tras marca.
            </p>
          </Reveal>
          <div className="relative mt-14">
            <div
              aria-hidden
              className="zan-dash-line absolute inset-x-16 top-12 hidden h-1 rounded-full opacity-40 lg:block"
            />
            <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stages.map((s, i) => (
                <Reveal key={s.title} delay={i * 140} className="h-full">
                  <li
                    className={`group flex h-full flex-col rounded-[36px] ${s.bg} ${s.text} p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl`}
                  >
                    <span
                      aria-hidden
                      className="zan-float text-5xl"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    >
                      {s.emoji}
                    </span>
                    <p className="mt-5 text-xs font-bold uppercase tracking-widest opacity-70">
                      {s.age}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-black">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed opacity-90">
                      {s.desc}
                    </p>
                    <a
                      href={s.href}
                      className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/25 px-4 py-2 text-xs font-bold backdrop-blur-sm transition-colors hover:bg-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {s.brand} <span aria-hidden>→</span>
                    </a>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Duffy lineup */}
      <section
        id="duffy"
        className="relative scroll-mt-24 overflow-hidden bg-duffy-yellow"
      >
        <div
          aria-hidden
          className="zan-float-slow pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/45 blur-3xl"
        />
        <div
          aria-hidden
          className="zan-float pointer-events-none absolute -right-20 bottom-8 h-80 w-80 rounded-full bg-duffy-plum/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-12 lg:py-28">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <img
                src={duffyLogo.url}
                alt="Duffy"
                width={480}
                height={360}
                className="h-14 w-auto sm:h-16"
              />
              <p className="mt-4 font-script text-3xl text-duffy-plum sm:text-4xl">
                del primer upa a correr libres
              </p>
              <h2 className="mt-1 font-display text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
                Nuestros pañales
              </h2>
              <p className="mt-3 max-w-xl text-zinc-800">
                Tres líneas para acompañar cada etapa, del recién nacido al que
                ya corre libre. Y toallitas húmedas para la limpieza de cada
                día.
              </p>
            </div>
            <span className="rounded-full bg-duffy-plum px-5 py-2 text-sm font-bold text-white">
              Tecnología japonesa N°1
            </span>
          </div>
          <div className="mt-14 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {duffyProducts.map((p, i) => (
              <Reveal key={p.name} delay={i * 120} className={`h-full ${p.offset}`}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[36px] bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div
                    className={`flex h-44 items-center justify-center overflow-hidden px-5 ${p.bg}`}
                  >
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="max-h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.07]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-black leading-tight text-zinc-900">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wide text-duffy-plum">
                      {p.note}
                    </p>
                    <a
                      href={p.ml}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-duffy-plum px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-duffy-plum/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duffy-plum focus-visible:ring-offset-2"
                    >
                      Comprar <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise — adult diapers */}
      <article
        id="promise"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 lg:px-12"
      >
        <Reveal>
        <div className="overflow-hidden rounded-[36px] bg-promise p-8 text-white shadow-sm sm:p-12">
          <p className="font-script text-3xl opacity-90">
            protección en cada momento
          </p>
          <img
            src={promiseBrand}
            alt="Promise"
            width={480}
            height={190}
            className="mt-2 h-14 w-auto sm:h-16"
          />
          <p className="mt-4 max-w-2xl text-lg leading-relaxed opacity-95">
            Pañales para adultos con máxima absorción y ajuste suave, pensados
            para dar comodidad, seguridad y discreción todos los días, de día
            y de noche.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {[
              "Máxima absorción",
              "Ajuste suave y discreto",
              "Uso diurno y nocturno",
              "Cintura elástica",
            ].map((c) => (
              <li
                key={c}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur-sm"
              >
                {c}
              </li>
            ))}
          </ul>
          <a
            href={ML.promise}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-promise transition-all hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-promise"
          >
            Ver Promise en Mercado Libre <span aria-hidden>→</span>
          </a>
        </div>
        </Reveal>
      </article>

      {/* Lalas — feminine care */}
      <article
        id="lalas"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-6 lg:px-12"
      >
        <Reveal>
        <div className="overflow-hidden rounded-[36px] bg-lalas p-8 text-white shadow-sm sm:p-12">
          <p className="font-script text-3xl opacity-90">
            suavidad todos los días
          </p>
          <img
            src={lalasBrand}
            alt="Lalas"
            width={480}
            height={260}
            className="mt-2 h-20 w-auto sm:h-24"
          />
          <p className="mt-4 max-w-2xl text-lg leading-relaxed opacity-95">
            Higiene femenina ultra suave: toallas y toallitas femeninas con
            protección confiable y confort delicado para acompañar cada día
            del mes.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {[
              "Ultra suaves",
              "Protección confiable",
              "Confort delicado",
              "Para cada día del mes",
            ].map((c) => (
              <li
                key={c}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur-sm"
              >
                {c}
              </li>
            ))}
          </ul>
          <a
            href={ML.lalas}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-lalas transition-all hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-lalas"
          >
            Ver Lalas en Mercado Libre <span aria-hidden>→</span>
          </a>
        </div>
        </Reveal>
      </article>

      {/* Wipes */}
      <section id="toallitas" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <Reveal>
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
                  className="flex w-full max-w-xs flex-col items-center rounded-[28px] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
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
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="scroll-mt-24 bg-duffy-plum text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img
                src={zanhangLogo.url}
                alt="Logo de Zanhang S.A."
                className="w-44 rounded-[24px] bg-white p-3 shadow-lg sm:w-52"
              />
              <p className="mt-5 font-script text-3xl text-duffy-yellow">nosotros</p>
              <h2 className="mt-2 font-display text-4xl font-black tracking-tight sm:text-5xl">
                Industria argentina con estándar internacional
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-white/85">
                Desde 2020 fabricamos productos de higiene descartables con
                tecnología japonesa y controles de calidad en cada lote.
                Pañales para bebés y adultos, higiene femenina y toallitas
                húmedas que llegan a todo el país.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  n: "2020",
                  d: "Año de fundación",
                  card: "bg-white shadow-lg",
                  num: "text-duffy-plum",
                  label: "text-duffy-plum/70",
                },
                {
                  n: "3",
                  d: "Marcas propias",
                  card: "bg-white shadow-lg",
                  num: "text-duffy-plum",
                  label: "text-duffy-plum/70",
                },
                {
                  n: "100%",
                  d: "Fabricación nacional",
                  card: "bg-white shadow-lg",
                  num: "text-duffy-plum",
                  label: "text-duffy-plum/70",
                },
                {
                  n: "+40",
                  d: "Personas en el equipo",
                  card: "bg-white shadow-lg",
                  num: "text-duffy-plum",
                  label: "text-duffy-plum/70",
                },
              ].map((s) => (
                <li
                  key={s.d}
                  className={`rounded-[24px] p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] ${s.card}`}
                >
                  <p className={`font-display text-3xl font-black ${s.num}`}>
                    {s.n}
                  </p>
                  <p
                    className={`mt-1 text-sm font-semibold uppercase tracking-wide ${s.label}`}
                  >
                    {s.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Where to buy */}
      <section
        id="donde-comprar"
        className="scroll-mt-24 overflow-hidden bg-duffy-yellow-soft"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid items-end gap-6 border-b-2 border-duffy-plum/20 pb-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="font-script text-3xl text-duffy-plum">cerca tuyo</p>
              <h2 className="mt-1 max-w-2xl font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Elegí cómo querés encontrarnos
              </h2>
            </div>
            <p className="max-w-sm text-base font-semibold text-zinc-700 md:text-right">
              Tres marcas argentinas para acompañarte, estés donde estés.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col rounded-[36px] bg-white p-7 shadow-lg sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-duffy-yellow text-2xl" aria-hidden="true">
                ●
              </div>
              <h3 className="mt-7 font-display text-3xl font-black text-duffy-plum">
                En tiendas físicas
              </h3>
              <p className="mt-3 text-zinc-700">
                Encontrá nuestros productos en las principales cadenas y
                pañaleras de todo el país.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {retailers.map((retailer, index) => (
                  <li
                    key={retailer}
                    className="flex items-center gap-4 rounded-[24px] bg-duffy-yellow-soft px-5 py-4 font-display text-lg font-black leading-tight"
                  >
                    <span className="text-sm text-duffy-plum" aria-hidden="true">
                      0{index + 1}
                    </span>
                    {retailer}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-8 font-script text-2xl text-duffy-plum">
                cuidado para cada etapa
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[36px] bg-duffy-plum p-7 text-white shadow-xl sm:p-10">
              <div
                className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[36px] border-duffy-yellow/90"
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col">
                <span className="inline-flex self-start rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-wider">
                  Distribuidores y comercios
                </span>
                <h3 className="mt-6 font-display text-3xl font-black sm:text-4xl">
                  ¿Querés vender nuestros productos?
                </h3>
                <p className="mt-3 max-w-md text-white/85">
                  Sumate a la red de comercios, pañaleras y distribuidores que
                  trabajan con Duffy, Lalas y Promise en todo el país.
                </p>
                <a
                  href="mailto:ventas@zanhang.com.ar?subject=Quiero%20vender%20productos%20Zanhang"
                  className="mt-8 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-white px-7 py-3 font-display text-base font-black uppercase text-duffy-plum transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-duffy-yellow"
                >
                  Contactanos
                  <span aria-hidden="true">↗</span>
                </a>
                <p className="mt-auto pt-8 font-script text-2xl text-duffy-yellow">
                  crezcamos juntos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fábrica */}
      <section id="fabrica" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal>
              <p className="font-script text-3xl text-duffy-plum">dónde estamos</p>
              <h2 className="mt-2 font-display text-4xl font-black uppercase leading-[0.95] text-zinc-900 sm:text-5xl">
                Nuestra fábrica
              </h2>
              <p className="mt-5 max-w-md text-lg text-zinc-700">
                Producimos en Fátima, Provincia de Buenos Aires, desde donde
                abastecemos a todo el país.
              </p>
              <p className="mt-6 font-display text-xl font-black text-duffy-plum">
                Av. Dr. Arturo Frondizi 2088
                <br />
                B1629 Fátima, Provincia de Buenos Aires
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Dr.+Arturo+Frondizi+2088,+B1629+Fatima,+Provincia+de+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-duffy-plum px-7 py-3 font-display text-base font-black uppercase text-white transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-duffy-plum/40"
              >
                Cómo llegar
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div
              className="overflow-hidden rounded-[36px] border-4 border-duffy-plum/10 shadow-lg"
              data-reveal
            >
              <iframe
                title="Mapa de la fábrica de Zanhang en Fátima, Provincia de Buenos Aires"
                src="https://www.google.com/maps?q=Av.%20Dr.%20Arturo%20Frondizi%202088%2C%20B1629%20Fatima%2C%20Provincia%20de%20Buenos%20Aires&output=embed"
                className="h-[360px] w-full sm:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
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
              { href: "#etapas", label: "Etapas" },
              { href: "#duffy", label: "Duffy" },
              { href: "#promise", label: "Promise" },
              { href: "#lalas", label: "Lalas" },
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
