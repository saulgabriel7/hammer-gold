interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}

export function PageIntro({ eyebrow, title, description, dark = false }: PageIntroProps) {
  return (
    <section className={`page-top ${dark ? "dark-grid text-white" : "bg-paper text-black"}`}>
      <div className="site-container py-20 sm:py-24 lg:py-32">
        <p className={`eyebrow ${dark ? "text-white/45" : "text-muted"}`}>{eyebrow}</p>
        <h1 className="display-title mt-6 max-w-[13ch]">{title}</h1>
        <p className={`body-large mt-7 max-w-3xl ${dark ? "text-white/60" : "text-muted"}`}>{description}</p>
      </div>
    </section>
  );
}
