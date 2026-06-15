import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Bot, Check, CircleUserRound, MapPin, Menu, QrCode, Sparkles, TicketCheck, Users, WandSparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import logoAsset from "@/assets/poppop-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PopPop — Learn, Meet, Grow & Collaborate" },
      { name: "description", content: "Join PopPop, the participation layer for learning, real experiences, communities and collaboration." },
      { property: "og:title", content: "PopPop — The Internet, built for doing" },
      { property: "og:description", content: "Learn together. Meet together. Grow together. Collaborate together." },
    ],
  }),
  component: Index,
});

const layers = [
  { name: "School", styles: "border-school/25 hover:border-school/70", accent: "text-school", icon: "01", text: "Workshops, cohorts, mentorship and learning communities built around showing up and growing together.", examples: "AI workshops · Bootcamps · Founder circles" },
  { name: "Social", styles: "border-social/25 hover:border-social/70", accent: "text-social", icon: "02", text: "Discover people and real experiences—from coffee meetups to creator events and travel communities.", examples: "Meetups · Mixers · Photography walks" },
  { name: "Community", styles: "border-community/25 hover:border-community/70", accent: "text-community", icon: "03", text: "Turn one-time attendance into lasting relationships through rooms, chats, stories and shared rituals.", examples: "Study rooms · Clubs · Local communities" },
  { name: "Collab", styles: "border-collab/25 hover:border-collab/70", accent: "text-collab", icon: "04", text: "Move relationships into action. Plan, invite, book venues, split costs and execute together.", examples: "Film shoots · Weekend trips · Team sessions" },
] as const;

const roles = [
  ["Student", "Find cohorts, clubs and mentors that keep you moving."],
  ["Creator", "Host masterclasses, meet your people and make together."],
  ["Organizer", "Ticket, verify, track attendance and follow up."],
  ["Community Builder", "Build rooms, rituals and recurring participation."],
  ["Venue Partner", "Get direct bookings and community exposure."],
  ["Brand", "Create experiences people actively choose to join."],
];

const aiSystems = ["AI Event Planner", "AI Community Assistant", "AI Discovery Engine", "AI Networking Assistant", "AI Venue Recommendations", "AI Participation Insights"];

function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [joined, setJoined] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setJoined(true); };
  return joined ? (
    <div className="flex min-h-14 items-center gap-3 rounded-2xl border border-community/40 bg-community/10 px-5 text-left text-sm text-foreground"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-community text-background"><Check className="size-4" /></span><span><strong>You’re in the first wave.</strong><br/><span className="text-muted-foreground">Watch your inbox for your referral link.</span></span></div>
  ) : (
    <form onSubmit={submit} className={compact ? "flex gap-2" : "grid gap-3 sm:grid-cols-[1fr_auto]"}>
      <label className="sr-only" htmlFor={compact ? "footer-email" : "hero-email"}>Email address</label>
      <Input id={compact ? "footer-email" : "hero-email"} required type="email" placeholder="you@wherever.com" className="h-14 rounded-xl border-input bg-card px-5 text-base shadow-sm focus-visible:ring-2" />
      <Button variant="pop" size="xl" type="submit">Join the waitlist <ArrowRight /></Button>
    </form>
  );
}

function SectionHeading({ eyebrow, children, text }: { eyebrow: string; children: ReactNode; text: string }) {
  return <div className="mb-12 max-w-3xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">{eyebrow}</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">{children}</h2><p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{text}</p></div>;
}

function ProductPreview() {
  return <div className="relative mx-auto aspect-[4/5] w-full max-w-[510px] lg:aspect-square">
    <div className="absolute inset-5 rounded-[2rem] border border-border bg-card shadow-lg" />
    <div className="absolute left-0 top-[8%] w-[82%] rounded-2xl border border-school/30 bg-card p-4 shadow-lg sm:p-5">
      <div className="flex items-center justify-between"><span className="rounded-full border border-school/30 bg-school/10 px-3 py-1 text-xs font-semibold text-school">SCHOOL</span><span className="text-xs text-muted-foreground">SAT · 11:00</span></div>
      <h3 className="mt-5 text-xl font-semibold">AI for Everyday Creators</h3><p className="mt-1 text-sm text-muted-foreground">A hands-on workshop · Mumbai</p>
      <div className="mt-5 flex items-end justify-between"><div className="flex -space-x-2">{["A","M","R","+"] .map((x) => <span key={x} className="grid size-9 place-items-center rounded-full border-2 border-card bg-secondary text-xs font-bold">{x}</span>)}</div><QrCode className="size-12 text-school" /></div>
    </div>
    <div className="absolute bottom-[8%] right-0 w-[78%] rounded-2xl border border-social/30 bg-card p-4 shadow-lg sm:p-5">
      <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-social/10 text-social"><MapPin /></span><div><p className="text-xs text-muted-foreground">NEXT EXPERIENCE</p><h3 className="font-semibold">Founder Coffee Circle</h3></div></div>
      <div className="mt-5 rounded-xl border border-border bg-muted/50 p-3 text-sm"><span className="text-muted-foreground">AI match found</span><p className="mt-1 font-medium">6 builders nearby share your interests.</p></div>
    </div>
    <div className="absolute bottom-[2%] left-[5%] rounded-full border border-community/30 bg-card px-4 py-2 text-xs text-community shadow-md">● 342 people participating now</div>
  </div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState("Student");
  return <main className="min-h-screen bg-background text-foreground">
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl"><div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
      <a href="#top" aria-label="PopPop home"><img src="./logo.png" alt="PopPop" className="h-10 w-auto object-contain" /></a>
      <div className="hidden justify-center gap-7 text-sm text-muted-foreground lg:flex">{[["Why PopPop","why"],["How it works","how"],["Early access","access"],["Community","community"],["FAQ","faq"]].map(([label,id]) => <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">{label}</a>)}</div>
      <Button asChild variant="pop" className="hidden lg:inline-flex"><a href="#join">Get early access</a></Button>
      <Button variant="ghost" size="icon" aria-label="Toggle menu" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
      {menuOpen && <div className="absolute left-4 right-4 top-20 grid gap-2 rounded-2xl border border-border bg-popover p-4 shadow-2xl lg:hidden">{[["Why PopPop","why"],["How it works","how"],["Early access","access"],["Community","community"],["FAQ","faq"]].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3 hover:bg-accent">{label}</a>)}</div>}
    </div></nav>

    <section id="top" className="relative flex min-h-screen items-center border-b border-border pt-28"><div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
      <div className="reveal-up"><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] shadow-sm"><Sparkles className="size-4 text-highlight"/> Early access · First wave</div>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[.93] tracking-[-0.065em] sm:text-7xl lg:text-[5.7rem]">The internet,<br/><span className="text-gradient">built for doing.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Most platforms are built for scrolling. PopPop is the participation layer for learning, meeting, growing and collaborating—together.</p>
        <div id="join" className="mt-9 max-w-xl"><WaitlistForm/><p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><Check className="size-3 text-primary"/> No spam. Your referral link moves you up the invite queue.</p></div>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground"><span><strong className="text-foreground">2,400+</strong> early participants</span><span>Zero commission on small events</span><span>Built by Orbit XII</span></div>
      </div><ProductPreview/>
    </div></section>

    <section id="why" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32"><SectionHeading eyebrow="01 · Why PopPop exists" text="Four connected layers turn curiosity into attendance, attendance into relationships, and relationships into action.">Stop consuming.<br/><span className="text-gradient">Start participating.</span></SectionHeading>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{layers.map((item) => <article key={item.name} className={`group rounded-2xl border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${item.styles}`}><div className={`mb-12 flex items-center justify-between ${item.accent}`}><span className="text-xs font-bold tracking-widest">{item.icon}</span><ArrowRight className="transition-transform group-hover:translate-x-1"/></div><h3 className="text-2xl font-semibold">{item.name}</h3><p className="mt-3 leading-7 text-muted-foreground">{item.text}</p><p className={`mt-6 text-xs font-medium ${item.accent}`}>{item.examples}</p></article>)}</div>
    </section>

    <section id="community" className="border-y border-border bg-secondary/40"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32"><SectionHeading eyebrow="02 · Choose your lane" text="Tell PopPop how you want to participate. We’ll shape your first wave around the people, places and experiences that fit.">Everyone has a way<br/>to <span className="text-gradient">show up.</span></SectionHeading>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{roles.map(([name,text]) => <button key={name} onClick={() => setRole(name)} className={`group relative cursor-pointer rounded-2xl border p-6 text-left transition-all hover:-translate-y-1 ${role === name ? "border-primary bg-primary/5 shadow-pop" : "border-border bg-card shadow-sm hover:border-primary/40 hover:shadow-md"}`}><div className="flex items-start justify-between"><CircleUserRound className={role === name ? "text-primary" : "text-muted-foreground"}/>{role === name && <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-4"/></span>}</div><h3 className="mt-8 text-xl font-semibold">{name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></button>)}</div>
    </div></section>

    <section id="how" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32"><SectionHeading eyebrow="03 · What you can do" text="A participation loop designed to move naturally from discovery to real-world action—and back again.">One place. Four ways<br/>to <span className="text-gradient">move together.</span></SectionHeading>
      <div className="grid border-y border-border md:grid-cols-4">{["Learn together","Meet together","Grow together","Collaborate together"].map((x,i) => <div key={x} className="border-b border-border px-5 py-8 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"><span className="text-xs text-muted-foreground">0{i+1}</span><h3 className="mt-8 text-xl font-semibold">{x}</h3></div>)}</div>
      <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_.9fr]"><div className="rounded-3xl border border-school/25 bg-card p-6 sm:p-8"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-widest text-school">Live cohort</span><span className="text-xs text-muted-foreground">Week 2 of 4</span></div><h3 className="mt-8 text-3xl font-semibold">30-Day Creator Bootcamp</h3><div className="mt-8 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full w-1/2 rounded-full bg-school"/></div><div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">{["Branding ✓","Content →","Audience","Monetize"].map(x=><div key={x} className="rounded-xl border border-border bg-muted/40 p-3">{x}</div>)}</div></div>
        <div className="rounded-3xl border border-collab/25 bg-card p-6 sm:p-8"><span className="text-xs font-bold uppercase tracking-widest text-collab">Collab plan</span><h3 className="mt-8 text-2xl font-semibold">Weekend creator trip</h3><div className="mt-7 space-y-3">{[[Users,"Invite 8 people"],[MapPin,"Book the venue"],[TicketCheck,"Split travel costs"]].map(([Icon,text]) => { const I = Icon as typeof Users; return <div key={String(text)} className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm"><I className="text-collab"/>{String(text)}</div>})}</div></div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{["AI Workshop","Founder Meetup","Study Room","Photography Walk","Dinner Circle","Film Shoot","Language Cohort","Startup Brainstorm"].map(x=><span key={x} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">{x}</span>)}</div>
    </section>

    <section id="access" className="border-y border-border bg-secondary/40"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:py-32"><SectionHeading eyebrow="04 · Early access unlocks" text="Not another set of automation tools. AI that helps people discover the right room, meet the right person and turn intent into a real plan.">AI that increases<br/><span className="text-gradient">participation.</span></SectionHeading>
      <div className="grid gap-3 sm:grid-cols-2">{aiSystems.map((x,i) => <div key={x} className="rounded-2xl border border-border bg-card p-5 shadow-sm"><div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">{i % 2 ? <Bot/> : <WandSparkles/>}</span><span className="text-xs text-muted-foreground">0{i+1}</span></div><h3 className="mt-7 font-semibold">{x}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{["Build agendas and coordinate activities.","Keep conversations useful and welcoming.","Find relevant communities and experiences.","Meet people with meaningful overlap.","Match every plan with the right place.","Understand attendance and engagement."][i]}</p></div>)}</div>
    </div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32"><SectionHeading eyebrow="05 · The ecosystem" text="Each layer makes the next one stronger. Every workshop, meetup and plan creates relationships worth returning for.">A network effect powered<br/>by <span className="text-gradient">showing up.</span></SectionHeading>
      <div className="grid gap-3 lg:grid-cols-7">{["School","Social","Community","Collab","Relationships","Recurring participation","Network effects"].map((x,i)=><div key={x} className="relative flex min-h-32 items-end rounded-2xl border border-border bg-card p-4 shadow-sm"><span className="absolute left-4 top-4 text-xs text-muted-foreground">0{i+1}</span><h3 className="font-semibold">{x}</h3>{i<6&&<ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-5 text-primary lg:block"/>}</div>)}</div>
    </section>

    <section className="border-y border-border bg-secondary/40"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32"><div className="grid gap-12 lg:grid-cols-2"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">06 · Why join now</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">The waitlist is our<br/><span className="text-gradient">first community.</span></h2></div><div className="grid gap-4 sm:grid-cols-2">{["Founding member status","Priority first-wave access","Referral queue movement","PopPop-hosted experiences","Limited founder badge","Founder Circle invitations"].map(x=><div key={x} className="flex items-center gap-3 border-b border-border py-4"><Check className="size-4 text-community"/><span>{x}</span></div>)}</div></div></div></section>

    <section id="faq" className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-32"><SectionHeading eyebrow="FAQ" text="The essentials before you join the first wave.">A few things<br/><span className="text-gradient">you may wonder.</span></SectionHeading><Accordion type="single" collapsible>{[["Is PopPop another social media app?","No. PopPop is built around participation: attending, learning, meeting and making—not passive scrolling."],["Who is early access for?","Students, creators, organizers, community builders, venue partners and brands who want to help shape the first participation network."],["How do referrals work?","After joining, you’ll receive a personal invite link. Meaningful referrals move you closer to the front of the limited invite wave."],["Can PopPop support both small and large events?","Yes—from a five-person film shoot to a 5,000-person conference, with ticketing, QR entry and attendance verification built in."]].map(([q,a])=><AccordionItem value={q} key={q} className="border-border"><AccordionTrigger className="py-6 text-left text-lg hover:no-underline">{q}</AccordionTrigger><AccordionContent className="max-w-2xl text-base leading-7 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></section>

    <section className="px-5 pb-8 sm:px-8"><div className="electric-wash relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center shadow-sm sm:px-10 sm:py-24"><div className="relative mx-auto max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Your invitation starts here</p><h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">Don’t just watch<br/>what happens next.</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">Help build the participation layer of the internet—one workshop, meetup, room and collaboration at a time.</p><div className="mx-auto mt-8 max-w-xl"><WaitlistForm/><p className="mt-3 text-xs text-muted-foreground">Private by default. Unsubscribe anytime.</p></div></div></div></section>

    <footer className="mx-auto max-w-7xl px-5 py-10 sm:px-8"><div className="flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"><img src={'./logo.png'} alt="PopPop" className="h-9 w-auto object-contain"/><p className="text-sm text-muted-foreground">Learn together. Meet together. Grow together. Collaborate together.</p><p className="text-xs text-muted-foreground">© 2026 Orbit XII Technologies</p></div></footer>
    <div className="fixed inset-x-4 bottom-4 z-40 rounded-2xl border border-border bg-background/90 p-2 shadow-2xl backdrop-blur-xl md:hidden"><Button asChild variant="pop" size="xl" className="w-full"><a href="#join">Join the PopPop waitlist <ArrowRight/></a></Button></div>
  </main>;
}
