import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Instagram, Linkedin, Github, Languages, ChevronLeft, ChevronRight, Download } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import heroAsset from "@/assets/images/hero-illustration.png";
import cineAsset from "@/assets/images/cine.png";
import gymAsset from "@/assets/images/gym.png";
import pianoAsset from "@/assets/images/piano.png";
import planeAsset from "@/assets/images/plane.png";

import journeyMapAsset from "@/assets/images/journey-map-v2.png";
import journeyPlaneAsset from "@/assets/images/journey-plane.png";

/*import cvAsset from "@/assets/pdfs/JESSICA_GALHARDI_EN.pdf";
import cvAssetPt from "@/assets/pdfs/JESSICA_GALHARDI_PT.pdf";
import cvAssetIt from "@/assets/pdfs/JESSICA_GALHARDI_IT.pdf";
import cvAssetEs from "@/assets/pdfs/JESSICA_GALHARDI_ES.pdf";*/

import enMusic from "@/assets/musics/en-soundtrack.mp3";
import ptMusic from "@/assets/musics/pt-soundtrack.mp3";
import itMusic from "@/assets/musics/it-soundtrack.mp3";
import esMusic from "@/assets/musics/es-soundtrack.mp3";

import { useParallax } from "@/hooks/use-parallax";

const CV_LABEL: Record<"pt" | "en" | "it" | "es", string> = {
    pt: "Baixar CV",
    en: "Download CV",
    it: "Scarica CV",
    es: "Descargar CV",
};

const CV_FILES: Record<"pt" | "en" | "it" | "es", string> = {
  pt: "/pdfs/JESSICA_GALHARDI_PT.pdf",
  en: "/pdfs/JESSICA_GALHARDI_EN.pdf",
  it: "/pdfs/JESSICA_GALHARDI_IT.pdf",
  es: "/pdfs/JESSICA_GALHARDI_ES.pdf",
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

const MUSIC = {
    en: {
        label: " EN English - Soundtrack",
        src: enMusic,
        artist: "OpenMindAudio",
        artistUrl:
            "https://pixabay.com/users/openmindaudio-53602733/",
    },

    pt: {
        label: " BR Brasil - Trilha sonora",
        src: ptMusic,
        artist: "Diogo Simões",
        artistUrl:
            "https://pixabay.com/users/diogodasilvasimoes-53114343/",
    },

    it: {
        label: " IT Italia - Colonna sonora",
        src: itMusic,
        artist: "Stanislav Barantsov",
        artistUrl:
            "https://pixabay.com/music/folk-italian-trip-158592/",
    },

    es: {
        label: " ES España - Banda sonora",
        src: esMusic,
        artist: "YellowBirdBeats",
        artistUrl:
            "https://pixabay.com/users/yellowbirdbeats-47643651/",
    },
} as const;

export function Gmail(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor" 
            {...props}
        >
            {/* Um único path simplificado e sólido do ícone do Gmail (estilo envelope preenchido) */}
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    );
}

type JourneyItem = { period: string; location: string; title: string; body: string; accent: "green" | "red" | "blue" | "violet" };
type Strength = { title: string; body: string };

const T: Record<Lang, {
    badge: string;
    subtitle: string;
    nav: { about: string; journey: string; contact: string };
    about: { tag: string; quote: string };
    aboutSite: { title: string; body: string };
    journeyTitle: { tag: string; heading: string };
    journey: JourneyItem[];
    strengths: Strength[];
    socials: string;
    footer: string;
}> = {
    pt: {
        badge: "Tecnologia + Criatividade + IA",
        subtitle: "Criatividade, tecnologia e inteligência artificial. Explorando novas formas de transformar ideias em experiências digitais.",
        nav: { about: "Sobre", journey: "Jornada", contact: "Contato" },
        about: { tag: "01 · Quem sou eu", quote: "Sou movida pela curiosidade. A tecnologia me apresentou a resolução de problemas — mas entender pessoas e descobrir novas perspectivas é o que realmente me move." },
        aboutSite: { title: "Sobre este site", body: "Cada imagem, conceito e experiência presentes neste site refletem minha curiosidade sobre o que acontece quando criatividade e tecnologia se encontram. O site e a arte principal foram criados por mim utilizando prompts originais e ferramentas de inteligência artificial generativa, como Gemini, ChatGPT e Lovable." },
        journeyTitle: { tag: "02 · Jornada", heading: "Um caminho entre culturas." },
        journey: [
            { period: "Brasil (2009–2017)", location: "🇧🇷 Brasil", title: "Atendimento ao Cliente e Qualidade", body: "Construí uma base sólida em atendimento ao cliente, resolução de problemas e processos de qualidade. Trabalhei em contato direto com clientes e equipes técnicas, aprendendo a transformar necessidades em soluções práticas.", accent: "green" },
            { period: "Itália (2019–2022)", location: "🇮🇹 Itália", title: "Experiência Internacional", body: "Atuei em restaurantes e ambientes de produção enquanto me adaptava a um novo país e cultura. Desenvolvi resiliência, flexibilidade e habilidades de comunicação em ambientes multiculturais e dinâmicos.", accent: "red" },
            { period: "Itália (2023–2024)", location: "🇮🇹 Itália", title: "Suporte de Aplicações, QA e Desenvolvimento Front-end", body: "Retornei à área de tecnologia, contribuindo para a qualidade de software, resolução de problemas e melhorias na experiência do usuário em empresas internacionais, fortalecendo habilidades técnicas e analíticas.", accent: "blue" },
            { period: "Hoje", location: "🌍", title: "Design, Tecnologia e IA", body: "Explorando a interseção entre criatividade, tecnologia e inteligência artificial por meio de projetos pessoais, design e aprendizado contínuo.", accent: "violet" },
        ],
        strengths: [
            { title: "Boa Comunicação", body: "Comunico com clareza, escuto ativamente e construo relações positivas." },
            { title: "Criativa e Curiosa", body: "Gosto de aprender, criar e dar vida a novas ideias." },
            { title: "Adaptável e Resiliente", body: "Me adapto rapidamente a novos ambientes e mantenho o foco em soluções." },
            { title: "Aberta a Oportunidades", body: "Animada para contribuir, crescer e gerar impacto positivo onde estiver." },
        ],
        socials: "Entre em contato comigo",
        footer: "© 2026 Jessica Galhardi",
    },
    en: {
        badge: "Creative Technologist · AI Explorer · 2026",
        subtitle: "Creativity, technology and artificial intelligence. Exploring new ways to transform ideas into digital experiences.",
        nav: { about: "About", journey: "Journey", contact: "Contact" },
        about: { tag: "01 · Who I am", quote: "I am driven by curiosity. Technology introduced me to problem solving — but understanding people and discovering new perspectives is what truly moves me." },
        aboutSite: { title: "About this website", body: "Every image, concept and experience on this website reflects my curiosity about what happens when creativity meets technology. The webpage and hero artwork were created by me using original prompts and generative AI like Gemini, ChatGPT and Lovable." },
        journeyTitle: { tag: "02 · Journey", heading: "A path across cultures." },
        journey: [
            { period: "Brazil (2009–2017)", location: "🇧🇷 Brazil", title: "Customer Support & Quality Assurance", body: "Built a strong foundation in customer service, problem solving and quality processes. Worked closely with customers and technical teams, learning how to translate needs into practical solutions.", accent: "green" },
            { period: "Italy (2019–2022)", location: "🇮🇹 Italy", title: "International Experience", body: "Worked in restaurants and production environments while adapting to a new country and culture. Developed resilience, flexibility and communication skills in fast-paced multicultural workplaces.", accent: "red" },
            { period: "Italy (2023–2024)", location: "🇮🇹 Italy", title: "Application Support, QA & Front-end Development", body: "Returned to the technology field, contributing to software quality, troubleshooting and user experience improvements for international companies while strengthening technical and analytical skills.", accent: "blue" },
            { period: "Today", location: "🌍", title: "Design, Technology & AI", body: "Exploring the intersection of creativity, technology and artificial intelligence through personal projects, design and continuous learning.", accent: "violet" },
        ],
        strengths: [
            { title: "Strong Communicator", body: "I communicate clearly, listen actively and build positive relationships." },
            { title: "Creative & Curious", body: "I enjoy learning, creating and bringing ideas to life." },
            { title: "Adaptable & Resilient", body: "I thrive in new environments, adapt quickly and stay solution-oriented under pressure." },
            { title: "Open to Opportunities", body: "I'm excited to contribute, grow and make a positive impact wherever I can." },
        ],
        socials: "Get in touch",
        footer: "© 2026 Jessica Galhardi",
    },
    it: {
        badge: "Creatività + Tecnologia + IA",
        subtitle: "Tecnologia, curiosità e connessione umana. Professionista italo-brasiliana all'intersezione tra QA, front-end e IA.",
        nav: { about: "Chi sono", journey: "Percorso", contact: "Contatti" },
        about: { tag: "01 · Chi sono", quote: "Sono mossa dalla curiosità. La tecnologia mi ha introdotto al problem solving — ma capire le persone e scoprire nuove prospettive è ciò che davvero mi muove." },
        aboutSite: { title: "Su questo sito", body: "Ogni immagine, concetto ed esperienza presenti su questo sito riflettono la mia curiosità per ciò che accade quando creatività e tecnologia si incontrano. Il sito e l'immagine principale sono stati creati da me utilizzando prompt originali e strumenti di IA generativa come Gemini, ChatGPT e Lovable." },
        journeyTitle: { tag: "02 · Percorso", heading: "Un cammino tra culture." },
        journey: [
            { period: "Brasile (2009–2017)", location: "🇧🇷 Brasile", title: "Assistenza Clienti e Qualità", body: "Ho costruito solide basi nell'assistenza clienti, nella risoluzione dei problemi e nei processi di qualità. Ho collaborato a stretto contatto con clienti e team tecnici, imparando a trasformare le esigenze in soluzioni pratiche.", accent: "green" },
            { period: "Italia (2019–2022)", location: "🇮🇹 Italia", title: "Esperienza Internazionale", body: "Ho lavorato nella ristorazione e in ambienti produttivi mentre mi adattavo a un nuovo Paese e a una nuova cultura. Ho sviluppato resilienza, flessibilità e capacità comunicative in contesti multiculturali e dinamici.", accent: "red" },
            { period: "Italia (2023–2024)", location: "🇮🇹 Italia", title: "Supporto Applicativo, QA e Sviluppo Front-end", body: "Sono tornata al settore tecnologico contribuendo alla qualità del software, alla risoluzione dei problemi e al miglioramento dell'esperienza utente in aziende internazionali, rafforzando competenze tecniche e analitiche.", accent: "blue" },
            { period: "Oggi", location: "🌍", title: "Design, Tecnologia e IA", body: "Esploro l'incontro tra creatività, tecnologia e intelligenza artificiale attraverso progetti personali, design e apprendimento continuo.", accent: "violet" },
        ],
        strengths: [
            { title: "Comunicazione Efficace", body: "Comunico con chiarezza, ascolto attivamente e costruisco relazioni positive." },
            { title: "Creativa e Curiosa", body: "Amo imparare, creare e dare vita a nuove idee." },
            { title: "Adattabile e Resiliente", body: "Mi adatto rapidamente a nuovi ambienti e resto orientata alle soluzioni." },
            { title: "Aperta alle Opportunità", body: "Entusiasta di contribuire, crescere e generare impatto positivo ovunque." },
        ],
        socials: "Mettiti in contatto con me",
        footer: "© 2026 Jessica Galhardi",
    },
    es: {
        badge: "Creatividad + Tecnología + IA",
        subtitle: "Tecnología, curiosidad y conexión humana. Profesional ítalo-brasileña en la intersección de QA, front-end e IA.",
        nav: { about: "Sobre mí", journey: "Trayectoria", contact: "Contacto" },
        about: { tag: "01 · Quién soy", quote: "Me mueve la curiosidad. La tecnología me presentó la resolución de problemas — pero entender a las personas y descubrir nuevas perspectivas es lo que realmente me impulsa." },
        aboutSite: { title: "Sobre este sitio", body: "Cada imagen, concepto y experiencia presentes en este sitio web reflejan mi curiosidad por lo que sucede cuando la creatividad y la tecnología se encuentran. El sitio y la imagen principal fueron creados por mí utilizando prompts originales y herramientas de IA generativa como Gemini, ChatGPT y Lovable." },
        journeyTitle: { tag: "02 · Trayectoria", heading: "Un camino entre culturas." },
        journey: [
            { period: "Brasil (2009–2017)", location: "🇧🇷 Brasil", title: "Atención al Cliente y Calidad", body: "Construí una base sólida en atención al cliente, resolución de problemas y procesos de calidad. Trabajé estrechamente con clientes y equipos técnicos, aprendiendo a transformar necesidades en soluciones prácticas.", accent: "green" },
            { period: "Italia (2019–2022)", location: "🇮🇹 Italia", title: "Experiencia Internacional", body: "Trabajé en restaurantes y entornos de producción mientras me adaptaba a un nuevo país y cultura. Desarrollé resiliencia, flexibilidad y habilidades de comunicación en ambientes multiculturales y dinámicos.", accent: "red" },
            { period: "Italia (2023–2024)", location: "🇮🇹 Italia", title: "Soporte de Aplicaciones, QA y Desarrollo Front-end", body: "Regresé al sector tecnológico, contribuyendo a la calidad del software, la resolución de problemas y las mejoras en la experiencia del usuario para empresas internacionales, fortaleciendo mis habilidades técnicas y analíticas.", accent: "blue" },
            { period: "Hoy", location: "🌍", title: "Diseño, Tecnología e IA", body: "Explorando la intersección entre creatividad, tecnología e inteligencia artificial a través de proyectos personales, diseño y aprendizaje continuo.", accent: "violet" },
        ],
        strengths: [
            { title: "Gran Comunicadora", body: "Comunico con claridad, escucho activamente y construyo relaciones positivas." },
            { title: "Creativa y Curiosa", body: "Disfruto aprender, crear y dar vida a nuevas ideas." },
            { title: "Adaptable y Resiliente", body: "Me adapto rápido a nuevos entornos y mantengo el foco en soluciones." },
            { title: "Abierta a Nuevas Oportunidades", body: "Con ganas de contribuir, crecer y generar impacto positivo donde esté." },
        ],
        socials: "Ponte en contacto conmigo",
        footer: "© 2026 Jessica Galhardi",
    },
};

const photos = [
    { src: cineAsset, caption: { pt: "Cinema", en: "Cinema", it: "Cinema", es: "Cine" } },
    { src: gymAsset, caption: { pt: "Treino", en: "Gym", it: "Palestra", es: "Gimnasio" } },
    { src: pianoAsset, caption: { pt: "Piano", en: "Piano", it: "Pianoforte", es: "Piano" } },
    { src: planeAsset, caption: { pt: "Viagens", en: "Travel", it: "Viaggi", es: "Viajes" } },
];

const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jessica-galhardi", Icon: Linkedin, accent: "from-[#0a66c2] to-[#1e88e5]" },
    { name: "Instagram", href: "https://www.instagram.com/jess_galhardi/", Icon: Instagram, accent: "from-[#f58529] via-[#dd2a7b] to-[#8134af]" },
    { name: "GitHub", href: "https://github.com/JessicaGalhardi", Icon: Github, accent: "from-[#24292e] to-[#57606a]" },
    { name: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=jessica.galhardi@al.infnet.edu.br", Icon: Gmail, accent: "from-[#ea4335] via-[#fbbc05] to-[#34a853]" },
];

const ACCENTS: Record<JourneyItem["accent"], { dot: string; text: string; ring: string }> = {
    green: { dot: "bg-emerald-500", text: "text-emerald-700", ring: "ring-emerald-200" },
    red: { dot: "bg-red-500", text: "text-red-700", ring: "ring-red-200" },
    blue: { dot: "bg-sky-500", text: "text-sky-700", ring: "ring-sky-200" },
    violet: { dot: "bg-violet-500", text: "text-violet-700", ring: "ring-violet-200" },
};

// Label positions over the map, in % of container (x = left, y = top)
const MAP_LABELS: Array<{ x: number; y: number; align: "left" | "right" }> = [
    { x: 4, y: 70, align: "left" },   // Brazil 2009-2017 → SP skyline area
    { x: 72, y: 78, align: "right" }, // Italy 2019-2022 → Venice / restaurant
    { x: 70, y: 8, align: "right" },  // Italy 2023-2024 → Dolomites / Garda
    { x: 4, y: 8, align: "left" },    // Today → sky / clouds
];

function LanguageSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
    const current = LANGUAGES.find((l) => l.code === lang)!;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type="button"
                    className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-white/25"
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
        <div className="w-full max-w-full min-w-0 px-2 mx-auto overflow-x-hidden">
            <div className="relative w-full aspect-square sm:aspect-[4/5] md:aspect-[5/4] overflow-hidden rounded-2xl bg-secondary shadow-xl">
                {photos.map((p, i) => (
                    <img
                        key={p.src}
                        src={p.src}
                        alt={p.caption[lang]}
                        className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-[6000] ease-out ${i === idx ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
                    />
                ))}
                <div className="absolute w-full  object-cover object-center inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
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

function Index() {
    const [lang, setLang] = useState<Lang>("en");
    const t = T[lang];

    const currentMusic = MUSIC[lang];
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    src: "/music/en-soundtrack.mp3"

    const toggleMusic = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            await audioRef.current.play();
            setIsPlaying(true);
        }
    };

    useParallax();
    return (
        <div className="min-h-screen bg-background text-foreground">
            <section
                className="relative w-full min-h-[60vh] md:min-h-0 md:h-auto overflow-hidden">

                <div
                    className="homepage-bg layer absolute inset-0 w-full h-full bg-contain bg-top bg-no-repeat z-0"
                    data-depth="1.2"
                    style={{ backgroundImage: `url(${heroAsset})`
                 }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-background" />

                {/* 1. CORRIGIDO: sm:flex-row (com W no final). No celular empilha (flex-col), no PC fica lado a lado */}
                <div className="relative z-10 mx-auto flex flex-col sm:flex-row max-w-6xl items-center justify-between gap-4 px-6 py-8">

                    {/* LOGO: Fica na esquerda no PC, e no topo centralizado no celular */}
                    <span className="font-display text-lg italic text-foreground drop-shadow-sm">jg.</span>

                    {/* CONTAINER DA DIREITA: Responsável por alinhar os menus e o player */}
                    {/* No celular ele empilha tudo no centro (flex-col items-center) */}
                    {/* No PC, ele vira uma linha e joga os elementos para as pontas (md:flex-row) */}
                    <div className="flex flex-col items-center sm:items-end md:flex-row md:items-center gap-4">

                        {/* Bloco do Menu + Botão de Tradução */}
                        <div className="flex items-center gap-6">
                            <nav className="hidden gap-6 text-xl font-medium text-foreground md:flex">
                                <a href="#about" className="transition-colors hover:text-primary">{t.nav.about}</a>
                                <a href="#journey" className="transition-colors hover:text-primary">{t.nav.journey}</a>
                            </nav>

                            {/* Botão de tradução */}
                            <LanguageSwitcher lang={lang} setLang={setLang} />
                        </div>

                        {/* Tag de áudio escondida */}
                        <audio
                            ref={audioRef}
                            src={currentMusic.src}
                            loop
                        />

                        {/* PLAYER DE MÚSICA: No celular ele cai automaticamente para baixo do LanguageSwitcher */}
                        <div
                            onClick={toggleMusic}
                            className="cursor-pointer rounded-xl md:rounded-2xl bg-background/40 px-3 py-2 md:px-4 md:py-3 backdrop-blur-md max-w-[220px] sm:max-w-sm overflow-hidden"
                        >
                            {/* CORRIGIDO: Removido o gap duplicado */}
                            <p className="text-[11px] md:text-sm font-medium flex items-center gap-1.5 truncate">
                                <span className="shrink-0">{isPlaying ? "⏸" : "|▶"}</span>
                                <span className="truncate">{currentMusic.label}</span>
                            </p>

                            <p className="mt-0.5 md:mt-1 text-[10px] md:text-xs text-muted-foreground truncate">
                                <a
                                    href={currentMusic.artistUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="hover:underline"
                                >
                                    {currentMusic.artist}
                                </a>
                                {" · "}
                                <a
                                    href="https://pixabay.com/music/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="hover:underline"
                                >
                                    Pixabay
                                </a>
                            </p>
                        </div>

                    </div> {/* Fim do container da direita */}
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-32 md:pt-24 md:pb-48">
                    <div className="max-w-xl rounded-3xl bg-background/35 p-8 backdrop-blur-sm md:p-10">
                        <p className="mb-4 text-md uppercase tracking-[0.3em] text-primary font-bold">
                            {t.badge}
                        </p>
                        <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
                            Jessica
                            <br />
                            <span className="italic text-primary">Galhardi</span>
                        </h1>
                        <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
                            {t.subtitle}
                        </p>

                        <div className="mt-8">
                            <p className="mb-3 text-xl uppercase tracking-[0.25em] text-muted-foreground font-bold text-primary">{t.socials}</p>
                            <div className="flex gap-3">

                                {socials.map(({ name, href, Icon, accent }) => (
                                    <a
                                        key={name}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                        className={`group relative  flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg transition-transform hover:-translate-y-1 hover:rotate-[-4deg]`}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>

                                ))}


                            </div>

                        </div>

                        <a
                            href={CV_FILES[lang]}
                            download="Jessica_Galhardi_CV.pdf"
                            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
                        >
                            <Download className="h-4 w-4" />
                            {CV_LABEL[lang]}
                        </a>
                    </div>
                </div>
            </section>

            <main className="mx-auto max-w-6xl px-4 sm:px-6 min-w-0 overflow-x-hidden">
                <section className="py-12 md:py-16">
                    <div className="rounded-3xl border border-border bg-card/50 p-8">
                        <h2 className="font-display text-3xl mb-4">{t.aboutSite.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{t.aboutSite.body}</p>
                    </div>
                </section>

                <section id="about" className="grid grid-cols-12 gap-4 md:gap-8 py-16 md:py-24 items-center">
                    <div className="col-span-12 md:col-span-5">
                        <PhotoCarousel lang={lang} />
                    </div>
                    <div className="col-span-12 md:col-span-7 min-w-0">
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                            {t.about.tag}
                        </p>
                        <p className="mt-3 font-display text-xl sm:text-2xl md:text-4xl leading-snug">
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

                    {/* Illustrated map */}
                    {/* Animated illustrated map with floating period labels */}
                    <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                        <img
                            src={journeyMapAsset}
                            alt={t.journeyTitle.heading}
                            className="block h-auto w-full"
                            loading="lazy"
                        />

                        {/* Flight path + animated plane overlay */}
                        <svg
                            viewBox="0 0 1536 1024"
                            preserveAspectRatio="none"
                            className="pointer-events-none absolute inset-0 h-full w-full"
                        >
                            <defs>
                                <path
                                    id="flightPath"
                                    d="M 280 720 C 520 360, 1020 360, 1280 540"
                                    fill="none"
                                />
                            </defs>
                            <use
                                href="#flightPath"
                                stroke="rgba(255,255,255,0.85)"
                                strokeWidth="3"
                                strokeDasharray="10 12"
                                strokeLinecap="round"
                                fill="none"
                            />
                            <g>
                                <image
                                    href={journeyPlaneAsset}
                                    width="120"
                                    height="120"
                                    x="-60"
                                    y="-60"
                                    style={{ filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.25))" }}
                                />
                                <animateMotion
                                    dur="14s"
                                    repeatCount="indefinite"
                                    rotate="auto"
                                    keyPoints="0;1;1"
                                    keyTimes="0;0.85;1"
                                    calcMode="linear"
                                >
                                    <mpath href="#flightPath" />
                                </animateMotion>
                            </g>
                        </svg>

                        {/* Floating period labels */}
                        {t.journey.map((j, i) => {
                            const pos = MAP_LABELS[i];
                            const a = ACCENTS[j.accent];
                            return (
                                <div
                                    key={i}
                                    className={`absolute hidden max-w-[26%] rounded-xl bg-white/90 p-3 shadow-lg ring-1 ${a.ring} backdrop-blur-sm md:block`}
                                    style={{
                                        left: `${pos.x}%`,
                                        top: `${pos.y}%`,
                                        textAlign: pos.align,
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className={`inline-block h-2.5 w-2.5 rounded-full ${a.dot}`} />
                                        <span className={`text-xs font-bold ${a.text}`}>{j.period}</span>
                                    </div>
                                    <p className="mt-1 font-display text-sm leading-tight text-foreground">{j.title}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile-only stacked period list (map labels hide on small screens) */}
                    <div className="mt-6 grid grid-cols-1 gap-3 md:hidden">
                        {t.journey.map((j, i) => {
                            const a = ACCENTS[j.accent];
                            return (
                                <div key={i} className={`rounded-xl border border-border bg-card p-4 ring-1 ${a.ring}`}>
                                    <div className="flex items-center gap-2">
                                        <span className={`inline-block h-2.5 w-2.5 rounded-full ${a.dot}`} />
                                        <span className={`text-xs font-bold ${a.text}`}>{j.period}</span>
                                    </div>
                                    <p className="mt-1 font-display text-base leading-tight">{j.title}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <a
                            href={CV_FILES[lang]}
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

            <footer className="ultima-secao mx-auto flex max-w-6xl justify-between border-t border-border px-6 py-10 text-sm text-muted-foreground">
                <span>{t.footer}</span>
                <span className="font-display italic">Brazil · Italy</span>
            </footer>

        </div>
    );
}
