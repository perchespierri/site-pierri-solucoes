"use client";

import {
  SERVICES,
  SITE_INFO,
  PERSONAL_INFO,
  CREA_INFO,
  CONTACT_INFO,
  UI_TEXTS,
  NAV_LINKS,
} from "@/constants";
import GearIcon from "@/public/icons/GearIcon";
import { WhatsAppIcon } from "@/public/icons/WhatsAppIcon";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function scrollTo(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

function getWhatsAppUrl() {
  const { whatsappNumber, whatsappMessage } = CONTACT_INFO;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}

// ─── NavBar ───────────────────────────────────────────────────────────────────

function NavBar() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-y-4 px-4 sm:px-8 md:px-13 py-4 border-b-2 border-foreground bg-background/90">
      <div className="flex items-center gap-3">
        <GearIcon size={40} />
        <div>
          <p className="text-[13px] font-medium tracking-widest text-foreground uppercase leading-none">
            {SITE_INFO.brandName}
          </p>
          <p className="text-[9px] text-primary mt-0.5 tracking-widest font-mono uppercase">
            {SITE_INFO.tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-7.5 text-[11px] tracking-[0.08em] text-secondary uppercase order-3 md:order-2 w-full md:w-auto">
        {NAV_LINKS.map((item, idx) => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.sectionId)}
            className={`cursor-pointer bg-transparent border-none p-0 transition-colors hover:text-foreground ${
              idx === 0 ? "text-foreground" : ""
            } ${idx === NAV_LINKS.length - 1 ? "text-primary font-medium" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="text-[9px] font-mono text-muted border border-foreground/20 py-1.5 px-3 tracking-[0.08em] bg-background/70 order-2 md:order-3">
        {CREA_INFO.council}&nbsp;&nbsp;
        <span className="text-secondary">{CREA_INFO.registrationNumber}</span>
      </div>
    </nav>
  );
}

// ─── HeroSection ─────────────────────────────────────────────────────────────

function HeroSection() {
  const totalServices = SERVICES.length;
  const { hero, techCard } = UI_TEXTS;

  return (
    <section className="px-4 sm:px-8 md:px-13 py-8 md:py-16 border-b border-foreground/10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 md:gap-13 items-start">
      <div>
        <div className="bg-background inline-flex flex-wrap items-stretch mb-4 md:mb-8">
          <div className="bg-foreground text-background text-[9px] font-mono tracking-[0.12em] py-1.5 px-3 uppercase">
            {SITE_INFO.referenceCode}
          </div>
          <div className="border border-foreground/20 border-l-0 text-[9px] font-mono text-muted py-1.5 px-3 tracking-[0.08em] uppercase">
            {SITE_INFO.locationLine}
          </div>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] leading-[1.05] font-normal text-foreground -tracking-[0.01em]">
          {hero.headingPart1}<br />
          {hero.headingPart2}<br />
          <em className="italic text-primary">{hero.headingPart3}</em>
        </h1>

        <div className="flex mt-5 md:mt-7 max-w-full lg:max-w-130">
          <div className="w-0.5 bg-primary self-stretch shrink-0 mr-4.5" />
          <p className="text-[13px] text-body-text leading-[1.8]">{hero.description}</p>
        </div>

        <div className="flex flex-wrap gap-2.5 mt-6 md:mt-9 items-center">
          <button
            onClick={() => scrollTo("services")}
            className="bg-foreground text-background px-6 py-3 text-[11px] tracking-widest uppercase cursor-pointer border-none transition-opacity hover:opacity-80"
          >
            {hero.ctaPrimary}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-background text-foreground border border-foreground/25 px-6 py-3 text-[11px] tracking-widest uppercase cursor-pointer transition-opacity hover:opacity-70"
          >
            {hero.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Ficha técnica */}
      <div className="border border-foreground/15 bg-white overflow-hidden mt-1 w-full">
        <div className="bg-foreground px-4.5 py-2.5">
          <p className="text-[9px] font-mono tracking-[0.12em] text-card-light uppercase">
            {techCard.title}
          </p>
        </div>
        <div className="py-1.5">
          <table className="w-full border-collapse text-[11px]">
            <tbody>
              <tr className="border-b border-foreground/5">
                <td className="py-2.5 px-4.5 text-muted font-mono text-[9px] tracking-[0.08em] uppercase whitespace-nowrap">
                  {techCard.fields.name}
                </td>
                <td className="py-2.5 px-4.5 text-foreground font-medium text-xs">
                  {PERSONAL_INFO.shortName}
                </td>
              </tr>
              <tr className="border-b border-foreground/5">
                <td className="py-2.5 px-4.5 text-muted font-mono text-[9px] tracking-[0.08em] uppercase">
                  {techCard.fields.title}
                </td>
                <td className="py-2.5 px-4.5 text-foreground text-xs">{PERSONAL_INFO.title}</td>
              </tr>
              <tr className="border-b border-foreground/5">
                <td className="py-2.5 px-4.5 text-muted font-mono text-[9px] tracking-[0.08em] uppercase">
                  {techCard.fields.crea}
                </td>
                <td className="py-2.5 px-4.5 text-primary font-mono text-[11px] tracking-[0.06em]">
                  {CREA_INFO.registrationNumber}
                </td>
              </tr>
              <tr className="border-b border-foreground/5">
                <td className="py-2.5 px-4.5 text-muted font-mono text-[9px] tracking-[0.08em] uppercase">
                  {techCard.fields.headquarters}
                </td>
                <td className="py-2.5 px-4.5 text-foreground text-xs">{CONTACT_INFO.city}</td>
              </tr>
              <tr className="border-b border-foreground/5">
                <td className="py-2.5 px-4.5 text-muted font-mono text-[9px] tracking-[0.08em] uppercase">
                  {techCard.fields.coverage}
                </td>
                <td className="py-2.5 px-4.5 text-foreground text-xs">{CONTACT_INFO.coverage}</td>
              </tr>
              <tr className="border-b border-foreground/5">
                <td className="py-2.5 px-4.5 text-muted font-mono text-[9px] tracking-[0.08em] uppercase">
                  {techCard.fields.artEmission}
                </td>
                <td className="py-2.5 px-4.5">
                  <span className="bg-success/10 text-success text-[9px] py-1 px-2.5 tracking-[0.08em] uppercase font-mono border border-success/20">
                    {CREA_INFO.status}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-2.5 px-4.5 text-muted font-mono text-[9px] tracking-[0.08em] uppercase">
                  {techCard.fields.specialties}
                </td>
                <td className="py-2.5 px-4.5 text-primary font-serif text-base">
                  {totalServices}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─── StatsBar ─────────────────────────────────────────────────────────────────

function StatsBar() {
  const { stats } = UI_TEXTS;

  return (
    <section className="flex flex-col sm:flex-row flex-wrap border-b border-foreground/10 bg-card-light">
      <div className="flex-1 min-w-35 py-6 px-4 sm:px-8 md:px-13 border-b sm:border-b-0 sm:border-r border-foreground/10">
        <p className="font-serif text-3xl sm:text-4xl text-foreground font-normal -tracking-[0.02em]">
          {SERVICES.length}+
        </p>
        <p className="text-[9px] text-muted mt-1.5 tracking-widest uppercase font-mono">
          {stats.specialties}
        </p>
      </div>
      <div className="flex-1 min-w-35 py-6 px-4 sm:px-8 md:px-13 border-b sm:border-b-0 sm:border-r border-foreground/10">
        <p className="font-serif text-3xl sm:text-4xl text-foreground font-normal">ART</p>
        <p className="text-[9px] text-muted mt-1.5 tracking-widest uppercase font-mono">
          {stats.artEmission}
        </p>
      </div>
      <div className="flex-1 min-w-35 py-6 px-4 sm:px-8 md:px-13 border-b sm:border-b-0 sm:border-r border-foreground/10">
        <p className="font-serif text-3xl sm:text-4xl text-primary font-normal italic">Nacional</p>
        <p className="text-[9px] text-muted mt-1.5 tracking-widest uppercase font-mono">
          {stats.nationalCoverage}
        </p>
      </div>
      <div className="flex-1 min-w-35 py-6 px-4 sm:px-8 md:px-13">
        <p className="font-mono text-lg sm:text-xl text-foreground tracking-[0.04em]">
          {CREA_INFO.council}
        </p>
        <p className="text-[9px] text-muted mt-1.5 tracking-[0.08em] font-mono">
          {CREA_INFO.registrationNumber}
        </p>
      </div>
    </section>
  );
}

// ─── ServicesSection ──────────────────────────────────────────────────────────

function ServicesSection() {
  const { services } = UI_TEXTS;

  return (
    <section id="services" className="px-4 sm:px-8 md:px-13 py-8 md:py-13 border-b border-foreground/10">
      <div className="flex flex-wrap items-center mb-4 md:mb-6 gap-2">
        <div className="bg-foreground text-background text-[9px] font-mono tracking-[0.12em] py-1 px-2.5 uppercase">
          {services.sectionTag}
        </div>
        <div className="flex-1 h-px bg-foreground/15 hidden sm:block" />
        <div className="text-[9px] font-mono text-muted py-1 px-2.5 border bg-background border-foreground/12 uppercase tracking-[0.08em]">
          {services.sideTag}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 border border-foreground/10 bg-foreground/5">
        {SERVICES.map((service, index) => {
          const isLast       = index === SERVICES.length - 1;
          const isEven       = index % 2 === 0;
          const borderRight  = isEven ? "sm:border-r border-foreground/5" : "";
          const borderBottom = !isLast ? "border-b border-foreground/5" : "";
          const colSpan      = isLast && SERVICES.length % 2 !== 0 ? "sm:col-span-2" : "";

          return (
            <div
              key={service.id}
              className={`bg-background px-5 py-4 flex justify-between items-center gap-2 ${borderRight} ${borderBottom} ${colSpan}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono text-accent min-w-4">{service.id}</span>
                <span className="text-[13px] text-foreground font-medium">{service.name}</span>
              </div>
              <span className="text-[8px] text-primary font-mono tracking-[0.08em] whitespace-nowrap border border-primary/25 py-0.5 px-1.5 uppercase">
                {service.tag}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── CreaSection ─────────────────────────────────────────────────────────────

function CreaSection() {
  const { creaSection } = UI_TEXTS;

  return (
    <section id="crea" className="px-4 sm:px-8 md:px-13 py-8 md:py-13 border-b border-foreground/10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div>
        <div className="inline-flex items-stretch mb-4 md:mb-6">
          <div className="bg-foreground text-background text-[9px] font-mono tracking-[0.12em] py-1 px-2.5 uppercase">
            {creaSection.tagLeft}
          </div>
          <div className="border border-foreground/20 border-l-0 text-[9px] bg-background font-mono text-muted py-1 px-2.5 tracking-[0.08em] uppercase">
            {creaSection.tagRight}
          </div>
        </div>
        <h2 className="font-serif text-3xl sm:text-[34px] font-normal mb-4.5 text-foreground leading-[1.15]">
          {creaSection.headingLine1}<br />
          {creaSection.headingLine2}
        </h2>
        <p className="text-[13px] text-secondary leading-[1.8]">{creaSection.description}</p>
      </div>

      <div className="border border-foreground/15 bg-white overflow-hidden relative w-full">
        <div className="bg-foreground px-5 py-3 flex justify-between items-center">
          <p className="text-[9px] font-mono text-accent tracking-[0.12em] uppercase">
            {creaSection.cardHeader}
          </p>
          <div className="w-5 h-5 border border-border-dark flex items-center justify-center">
            <div className="w-2 h-2 bg-border-dark" />
          </div>
        </div>
        <div className="p-5 pt-5.5 pb-5">
          <p className="font-serif text-xl text-foreground font-normal mb-0.5">
            {PERSONAL_INFO.fullName}
          </p>
          <p className="text-[11px] text-muted mb-4.5 font-mono tracking-[0.04em]">
            {PERSONAL_INFO.fullTitle} · Especialidade: {PERSONAL_INFO.specialty}
          </p>
          <div className="h-px bg-foreground/10 mb-4.5" />
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[9px] text-muted font-mono mb-1 tracking-[0.08em] uppercase">
                {creaSection.registrationLabel}
              </p>
              <p className="text-lg font-mono text-primary tracking-widest">
                {CREA_INFO.registrationNumber}
              </p>
            </div>
            <div className="w-13 h-13 rounded-full border border-foreground/15 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center">
                <p className="text-[7px] font-mono text-muted text-center leading-[1.3] tracking-[0.04em]">
                  CREA<br />SP
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3.5 pt-3.5 border-t border-foreground/5 flex justify-between">
            <span className="text-[9px] font-mono text-accent tracking-[0.08em] uppercase">
              {creaSection.validityLabel} · {CREA_INFO.validity}
            </span>
            <span className="text-[9px] font-mono text-success-light tracking-[0.08em] uppercase">
              ● {CREA_INFO.status}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ContactSection ───────────────────────────────────────────────────────────

function ContactSection() {
  const { contactSection } = UI_TEXTS;

  return (
    <section id="contact" className="px-4 sm:px-8 md:px-13 py-8 md:py-13 border-b border-foreground/10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
      <div>
        <div className="inline-flex items-stretch mb-4 md:mb-6">
          <div className="bg-foreground text-background text-[9px] font-mono tracking-[0.12em] py-1 px-2.5 uppercase">
            {contactSection.tagLeft}
          </div>
          <div className="border border-foreground/20 border-l-0 text-[9px] bg-background font-mono text-muted py-1 px-2.5 tracking-[0.08em] uppercase">
            {contactSection.tagRight}
          </div>
        </div>
        <h2 className="font-serif text-3xl sm:text-[34px] font-normal mb-4.5 text-foreground leading-[1.15]">
          {contactSection.headingLine1}<br />
          {contactSection.headingLine2}
        </h2>
        <p className="text-[13px] text-secondary leading-[1.8] mb-7">
          {contactSection.description}
        </p>

        {/* wa.me detecta automaticamente desktop (WhatsApp Web) vs mobile (app nativo) */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-success/90 border border-success/20 px-5 py-3 cursor-pointer transition-opacity hover:opacity-85"
        >
          <WhatsAppIcon />
          <span className="text-[13px] text-black font-mono tracking-[0.04em]">
            {CONTACT_INFO.phone}
          </span>
        </a>
      </div>

      <div className="border border-foreground/10 overflow-hidden bg-white w-full">
        <div className="px-5 py-4 border-b border-foreground/5 flex flex-wrap justify-between items-center gap-2">
          <span className="text-[9px] text-muted font-mono tracking-[0.08em] uppercase">
            {contactSection.infoLabels.email}
          </span>
          <span className="text-[11px] text-body-text font-mono break-all">{CONTACT_INFO.email}</span>
        </div>
        <div className="px-5 py-4 border-b border-foreground/5 flex justify-between items-center">
          <span className="text-[9px] text-muted font-mono tracking-[0.08em] uppercase">
            {contactSection.infoLabels.headquarters}
          </span>
          <span className="text-[11px] text-body-text">{CONTACT_INFO.city}</span>
        </div>
        <div className="px-5 py-4 border-b border-foreground/5 flex justify-between items-center">
          <span className="text-[9px] text-muted font-mono tracking-[0.08em] uppercase">
            {contactSection.infoLabels.coverage}
          </span>
          <span className="text-[11px] text-body-text">{CONTACT_INFO.coverage}</span>
        </div>
        <div className="px-5 py-4 border-b border-foreground/5 flex justify-between items-center">
          <span className="text-[9px] text-muted font-mono tracking-[0.08em] uppercase">
            {contactSection.infoLabels.hours}
          </span>
          <span className="text-[11px] text-body-text">{CONTACT_INFO.businessHours}</span>
        </div>
        <div className="px-5 py-4 flex justify-between items-center">
          <span className="text-[9px] text-muted font-mono tracking-[0.08em] uppercase">
            {contactSection.infoLabels.artEmission}
          </span>
          <span className="text-[9px] text-success-light bg-success/10 border border-success/20 py-1 px-2.5 font-mono tracking-[0.08em] uppercase">
            {CREA_INFO.emissionStatus}
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="p-4 sm:px-8 md:px-13 flex flex-col md:flex-row justify-between items-center gap-4 border-t-2 border-foreground bg-background/90">
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <GearIcon size={40} />
        <span className="text-[11px] tracking-widest uppercase text-foreground font-medium">
          {SITE_INFO.brandName}
        </span>
        <span className="text-[10px] text-accent ml-1 hidden sm:inline">·</span>
        <span className="text-[10px] text-muted tracking-[0.06em] hidden sm:inline">
          {SITE_INFO.tagline}
        </span>
      </div>
      <span className="text-[9px] text-muted font-mono tracking-[0.08em] uppercase text-center">
        {CREA_INFO.council} {CREA_INFO.registrationNumber} · {SITE_INFO.footerCopyright}
      </span>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const PierriSolucoesSite = () => {
  return (
    <div className="
      min-h-screen
      bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
      text-base overflow-hidden border border-foreground/15 bg-background text-foreground font-sans
      bg-size-[36px_36px] sm:bg-size-[20px_20px] md:bg-size-[36px_36px]
    ">
      <NavBar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <CreaSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PierriSolucoesSite;