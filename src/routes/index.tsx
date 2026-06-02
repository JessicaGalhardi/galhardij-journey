import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Linkedin, Github, Languages, ChevronLeft, ChevronRight, Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import heroAsset from "@/assets/jsons/hero-illustration.png.asset.json";
import cineAsset from "@/assets/jsons/cine.png.asset.json";
import gymAsset from "@/assets/jsons/gym.png.asset.json";
import pianoAsset from "@/assets/jsons/piano.png.asset.json";
import planeAsset from "@/assets/jsons/plane.png.asset.json";
import cvAsset from "@/assets/cv.pdf.asset.json";

const CV_LABEL: Record<"pt" | "en" | "it" | "es", string> = {
  pt: "Baixar CV",
  en: "Download CV",
  it: "Scarica CV",
  es: "Descargar CV",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jessica Galhardi — Currículo Interativo" },
      { name: "description", content: "Currículo interativo de Jessica Galhardi — QA, Front-end e IA." },
      { property: "og:title", content: "Jessica Galhardi — Currículo Interativo" },
      { property: "og:description", content: "QA, Front-end e IA. Curiosa por natureza." },
    ],
  }),
  component: Index,
});

type Lang = "pt" | "en" | "it" | "es";

const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

const T: Record<Lang, {
  badge: string;
  subtitle: string;
  nav: { about: string; journey: string; contact: string };
  about: { tag: string; quote: string };
  aboutSite: { title: string; body: string };
  journeyTitle: { tag: string; heading: string };
  journey: { year: string; role: string; note: string }[];
  contact: { tag: string; heading1: string; headingAccent: string; heading2: string; body: string; cta: string };
  socials: string;
  footer: string;
}> = {
  pt: {
    badge: "Tecnologia + Criatividade + IA",
    subtitle: "Criatividade, tecnologia e inteligência artificial. Explorando novas formas de transformar ideias em experiências digitais.",
    nav: { about: "Sobre", journey: "Jornada", contact: "Contato" },
    about: { tag: "01 · Quem sou eu", quote: "Sou movida pela curiosidade. A tecnologia me apresentou a resolução de problemas — mas entender pessoas e descobrir novas perspectivas é o que realmente me move." },
    aboutSite: { title: "Sobre este site", body: "Cada imagem, conceito e experiência presentes neste site refletem minha curiosidade sobre o que acontece quando criatividade e tecnologia se encontram. O site e a arte principal foram criados por mim utilizando prompts originais e ferramentas de inteligência artificial generativa, como Gemini, ChatGPT e Lovable. Este espaço é um retrato da minha jornada através do design, da tecnologia, do storytelling e da inteligência artificial." },
    journeyTitle: { tag: "02 · Jornada", heading: "Um caminho entre culturas." },
    journey: [
      { year: "2009-2018", role: "Suporte ao Cliente · Suporte QA", note: "Brasil" },
      { year: "2019–2022", role: "Restauração e produção", note: "Itália" },
      { year: "2023", role: "Analista de QA", note: "Itália" },
      { year: "2024", role: "QA / Desenvolvedora Front-end", note: "Itália" },
      { year: "Hoje", role: "EstudandoIA · Prompt Engineering · Automação", note: "Brasil" },
    ],
    contact: { tag: "03 · Vamos conversar", heading1: "Vamos construir algo", headingAccent: "curioso", heading2: "juntos.", body: "Interessada em oportunidades que combinem tecnologia, criatividade, comunicação, aprendizado e resolução de problemas.", cta: "Entre em contato" },
    socials: "Me encontre",
    footer: "© 2026 Jessica Galhardi",
  },
  en: {
    badge: "Creative Technologist · AI Explorer · 2026",
    subtitle: "Creativity, technology and artificial intelligence. Exploring new ways to transform ideas into digital experiences.",
    nav: { about: "About", journey: "Journey", contact: "Contact" },
    about: { tag: "01 · Who I am", quote: "I am driven by curiosity. Technology introduced me to problem solving — but understanding people and discovering new perspectives is what truly moves me." },
    aboutSite: { title: "About this website", body: "Every image, concept and experience on this website reflects my curiosity about what happens when creativity meets technology. The webpage and hero artwork were created by me using original prompts and generative AI like Gemini, ChatGpt and Loveable. This space is a snapshot of my journey through design, technology, storytelling and artificial intelligence." },
    journeyTitle: { tag: "02 · Journey", heading: "A path across cultures." },
    journey: [
      { year: "2009-2018", role: "Customer Support · QA Support", note: "Brazil" },
      { year: "2019–2022", role: "Food industry and production", note: "Italy" },
      { year: "2023", role: "QA Analyst", note: "Italy" },
      { year: "2024", role: "QA Analyst / Front-end Developer", note: "Italy" },
      { year: "Today", role: "Studying AI · Prompt Engineering · Automation", note: "Brazil" },
    ],
    contact: { tag: "03 · Let's talk", heading1: "Let's build something", headingAccent: "curious", heading2: "together.", body: "Interested in roles combining technology, creativity, communication, learning and problem solving.", cta: "Get in touch" },
    socials: "Find me",
    footer: "© 2026 Jessica Galhardi",
  },
  it: {
    badge: "Creatività + Tecnologia + IA",
    subtitle: "Tecnologia, curiosità e connessione umana. Professionista italo-brasiliana all'intersezione tra QA, front-end e IA.",
    nav: { about: "Chi sono", journey: "Percorso", contact: "Contatti" },
    about: { tag: "01 · Chi sono", quote: "Sono mossa dalla curiosità. La tecnologia mi ha introdotto al problem solving — ma capire le persone e scoprire nuove prospettive è ciò che davvero mi muove." },
    aboutSite: { title: "Su questo sito", body: "Ogni immagine, concetto ed esperienza presenti su questo sito riflettono la mia curiosità per ciò che accade quando creatività e tecnologia si incontrano. Il sito e l'immagine principale sono stati creati da me utilizzando prompt originali e strumenti di intelligenza artificiale generativa come Gemini, ChatGPT e Lovable. Questo spazio rappresenta una fotografia del mio percorso attraverso il design, la tecnologia, lo storytelling e l'intelligenza artificiale." },
    journeyTitle: { tag: "02 · Percorso", heading: "Un cammino tra culture." },
    journey: [
      { year: "2009-2018", role: "Assistenza Clienti · QA Support", note: "Brazil" },
      { year: "2019–2022", role: "Ristorazione e produzione", note: "Italia" },
      { year: "2023", role: "QA Analyst", note: "Italia" },
      { year: "2024", role: "QA / Sviluppatrice Front-end", note: "Italia" },
      { year: "Oggi", role: "IA · Prompt Engineering · Automazione", note: "Brasile" },
    ],
    contact: { tag: "03 · Parliamone", heading1: "Costruiamo qualcosa di", headingAccent: "curioso", heading2: "insieme.", body: "Interessata a ruoli che uniscano tecnologia, creatività, comunicazione, apprendimento e problem solving.", cta: "Contattami" },
    socials: "Trovami",
    footer: "© 2026 Jessica Galhardi",
  },
  es: {
    badge: "Creatividad + Tecnología + IA",
    subtitle: "Tecnología, curiosidad y conexión humana. Profesional ítalo-brasileña en la intersección de QA, front-end e IA.",
    nav: { about: "Sobre mí", journey: "Trayectoria", contact: "Contacto" },
    about: { tag: "01 · Quién soy", quote: "Me mueve la curiosidad. La tecnología me presentó la resolución de problemas — pero entender a las personas y descubrir nuevas perspectivas es lo que realmente me impulsa." },
    aboutSite: { title: "Sobre este sitio", body: "Cada imagen, concepto y experiencia presentes en este sitio web reflejan mi curiosidad por lo que sucede cuando la creatividad y la tecnología se encuentran. El sitio web y la imagen principal fueron creados por mí utilizando prompts originales y herramientas de inteligencia artificial generativa como Gemini, ChatGPT y Lovable. Este espacio es una muestra de mi recorrido a través del diseño, la tecnología, el storytelling y la inteligencia artificial." },
    journeyTitle: { tag: "02 · Trayectoria", heading: "Un camino entre culturas." },
    journey: [
      { year: "2009-2018", role: "Atención al Cliente · Soporte QA", note: "Brasil" },
      { year: "2019–2022", role: "Hostelería y producción", note: "Italia" },
      { year: "2023", role: "Analista QA", note: "Previnet" },
      { year: "2024", role: "QA / Desarrolladora Front-end", note: "Italia" },
      { year: "Hoy", role: "Estudiando IA · Prompt Engineering · Automatización", note: "Brasil" },
    ],
    contact: { tag: "03 · Hablemos", heading1: "Construyamos algo", headingAccent: "curioso", heading2: "juntos.", body: "Interesada en roles que combinen tecnología, creatividad, comunicación, aprendizaje y resolución de problemas.", cta: "Contáctame" },
    socials: "Encuéntrame",
    footer: "© 2026 Jessica Galhardi",
  },
};

const photos = [
  { src: cineAsset.url, caption: { pt: "Cinema", en: "Cinema", it: "Cinema", es: "Cine" } },
  { src: gymAsset.url, caption: { pt: "Treino", en: "Gym", it: "Palestra", es: "Gimnasio" } },
  { src: pianoAsset.url, caption: { pt: "Piano", en: "Piano", it: "Pianoforte", es: "Piano" } },
  { src: planeAsset.url, caption: { pt: "Viagens", en: "Travel", it: "Viaggi", es: "Viajes" } },
];

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jessica-galhardi", Icon: Linkedin, accent: "from-[#0a66c2] to-[#1e88e5]" },
  { name: "Instagram", href: "https://www.instagram.com/jess_galhardi/", Icon: Instagram, accent: "from-[#f58529] via-[#dd2a7b] to-[#8134af]" },
  { name: "GitHub", href: "https://github.com/JessicaGalhardi", Icon: Github, accent: "from-[#24292e] to-[#57606a]" },
];

function LanguageSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const current = LANGUAGES.find((l) => l.code === lang)!;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-white/25"
        >
          <Languages className="h-4 w-4" />
          <span>{current.flag} {current.label}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onSelect={() => setLang(l.code)}
            className={`gap-3 ${l.code === lang ? "text-primary font-semibold" : ""}`}
          >
            <span className="text-lg">{l.flag}</span>
            <span>{l.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function PhotoCarousel({ lang }: { lang: Lang }) {
  const [idx, setIdx] = useState(0);
  const total = photos.length;
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);
  return (
    <div className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-secondary shadow-xl md:aspect-[5/4]">
        {photos.map((p, i) => (
          <img
            key={p.src}
            src={p.src}
            alt={p.caption[lang]}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[6000] ease-out ${i === idx ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
          <p className="font-display text-xl italic text-white">{photos[idx].caption[lang]}</p>
        </div>
        <button
          onClick={prev}
          aria-label="prev"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-foreground shadow hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          aria-label="next"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-foreground shadow hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`go to ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

function MountainTimeline({ items }: { items: { year: string; role: string; note: string }[] }) {
  const W = 1000;
  const H = 340
  const peakYs = [110, 70, 130, 60, 100];
  const peaks = items.map((it, i) => {
    const x = ((i + 1) * W) / (items.length + 1);
    const y = peakYs[i % peakYs.length];
    return { ...it, x, y };
  });

  const baseline = 280;
  const ridgePoints: [number, number][] = [[0, baseline]];
  peaks.forEach((p, i) => {
    ridgePoints.push([p.x, p.y]);
    if (i < peaks.length - 1) {
      const nextX = peaks[i + 1].x;
      const valleyX = (p.x + nextX) / 2;
      ridgePoints.push([valleyX, 200 + (i % 2) * 20]);
    }
  });
  ridgePoints.push([W, baseline]);

  const ridgeD = ridgePoints
    .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
    .join(" ");
  const fillD = `${ridgeD} L ${W} ${H} L 0 ${H} Z`;

  return (
    <div className="overflow-x-auto pb-4">
      <div className="min-w-[720px]">
        <svg viewBox={`0 0 ${W} ${H + 90}`} className="w-full" role="img" aria-label="Career timeline mountains">
          <defs>
            <linearGradient id="mountFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="ridgeStroke" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          <path d={fillD} fill="url(#mountFill)" />
          <path id="ridgePath" d={ridgeD} fill="none" stroke="url(#ridgeStroke)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

          {peaks.map((p, i) => (
            <g key={i}>
              <line x1={p.x} y1={p.y} x2={p.x} y2={p.y - 24} stroke="var(--primary)" strokeWidth="1.5" />
              <polygon points={`${p.x},${p.y - 24} ${p.x + 14},${p.y - 20} ${p.x},${p.y - 16}`} fill="var(--primary)" />
              <circle cx={p.x} cy={p.y} r="5" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
              <text x={p.x} y={p.y - 34} textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--foreground)">{p.year}</text>
              <text x={p.x} y={H + 30} textAnchor="middle" fontSize="14" fontFamily="Fraunces, serif" fill="var(--foreground)">
                {p.role.length > 28 ? p.role.slice(0, 26) + "…" : p.role}
              </text>
              <text x={p.x} y={H + 52} textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">
                {p.note.length > 34 ? p.note.slice(0, 32) + "…" : p.note}
              </text>
            </g>
          ))}

          {/* Walking girl traveling along the ridge */}
          <g>
            <g>
              <circle cx="0" cy="-18" r="6" fill="#4a2a1a" />
              <circle cx="0" cy="-16" r="4.5" fill="#f3c8a8" />
              <polygon points="-6,-2 6,-2 4,-12 -4,-12" fill="var(--primary)" />
              <line x1="-2.5" y1="-2" x2="-2.5" y2="4" stroke="#4a2a1a" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2.5" y1="-2" x2="2.5" y2="4" stroke="#4a2a1a" strokeWidth="1.5" strokeLinecap="round" />
              <animateTransform attributeName="transform" type="translate" values="0 0; 0 -1.8; 0 0" dur="0.5s" repeatCount="indefinite" />
            </g>
            <animateMotion dur="20s" repeatCount="indefinite" rotate="auto">
              <mpath href="#ridgePath" />
            </animateMotion>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section
        className="homepage-bg relative"
        style={{ backgroundImage: `url(${heroAsset.url})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-background" />
        <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <span className="font-display text-lg italic text-foreground drop-shadow-sm">jg.</span>
          <div className="flex items-center gap-6">
            <nav className="hidden gap-6 text-xl font-medium text-foreground md:flex">
              <a href="#about" className="transition-colors hover:text-primary">{t.nav.about}</a>
              <a href="#journey" className="transition-colors hover:text-primary">{t.nav.journey}</a>
            </nav>
            <LanguageSwitcher lang={lang} setLang={setLang} />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-32 md:pt-24 md:pb-48">
          <div className="max-w-xl rounded-3xl bg-background/35 p-8 backdrop-blur-sm md:p-10">
            <p className="mb-4 text-md uppercase tracking-[0.3em] text-primary font-bold">
              {t.badge}
            </p>
            <h1 className="font-display text-6xl leading-[0.95] tracking-tight text-foreground md:text-8xl">
              Jessica
              <br />
              <span className="italic text-primary">Galhardi</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              {t.subtitle}
            </p>

            {/* Social icons */}
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{t.socials}</p>
              <div className="flex gap-3">
                {socials.map(({ name, href, Icon, accent }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg transition-transform hover:-translate-y-1 hover:rotate-[-4deg]`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
                      {name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href={cvAsset.url}
              download="Jessica_Galhardi_CV.pdf"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              {CV_LABEL[lang]}
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6">
        <section className="py-16">
          <div className="rounded-3xl border border-border bg-card/50 p-8">
            <h2 className="font-display text-3xl mb-4">{t.aboutSite.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.aboutSite.body}</p>
          </div>
        </section>

        <section id="about" className="grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-5">
            <PhotoCarousel lang={lang} />
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {t.about.tag}
            </p>
            <p className="mt-4 font-display text-3xl leading-snug md:text-4xl">
              {t.about.quote}
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-border" />

        <section id="journey" className="py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {t.journeyTitle.tag}
            </p>
            <h2 className="mt-4 font-display text-4xl">{t.journeyTitle.heading}</h2>
          </div>
          <MountainTimeline items={t.journey} />

          <div className="mt-12 flex justify-center">
            <a
              href={cvAsset.url}
              download="Jessica_Galhardi_CV.pdf"
              className="inline-flex items-center gap-2 rounded-2xl border border-primary bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              {CV_LABEL[lang]}
            </a>
          </div>
        </section>

        <div className="h-px w-full bg-border" />

        
      </main>

      <footer className="mx-auto flex max-w-6xl justify-between border-t border-border px-6 py-10 text-sm text-muted-foreground">
        <span>{t.footer}</span>
        <span className="font-display italic">Brazil · Italy</span>
      </footer>
    </div>
  );
}
