// ---------- SERVIÇOS ----------
export const SERVICES = [
  { id: "01", name: "Brinquedos de Playground", tag: "Laudo" },
  { id: "02", name: "Sistemas de Exaustão Industrial", tag: "Laudo + ART" },
  { id: "03", name: "Ar Condicionado", tag: "PMOC" },
  { id: "04", name: "Máquinas NR-12", tag: "Laudo + ART" },
  { id: "05", name: "Máquinas Pesadas", tag: "Inspeção" },
  { id: "06", name: "NR-11 · Transportadores", tag: "Laudo" },
  { id: "07", name: "Desmanches", tag: "Laudo" },
  { id: "08", name: "Elevadores e Plataformas", tag: "Acessibilidade" },
  { id: "09", name: "Andaimes", tag: "ART montagem" },
  { id: "10", name: "Reclassificação de Monta-Cargas", tag: "Laudo" },
  { id: "11", name: "Exaustão · Tabacarias", tag: "Projeto" },
  { id: "12", name: "NR-13 · Vasos de Pressão", tag: "Inspeção" },
  { id: "13", name: "AVCB e CLCB · Corpo de Bombeiros", tag: "Documentação CBPMESP" },
];

// ---------- INFORMAÇÕES DO SITE / EMPRESA ----------
export const SITE_INFO = {
  brandName: "Pierri Soluções",
  tagline: "Engenharia Mecânica",
  referenceCode: "REF·001",
  locationLine: "Araraquara, SP · Atendimento Nacional",
  footerCopyright: "© 2026",
  // Cada item aponta para um id de seção (sem o #) ou string vazia para sem âncora
  navLinks: [
    { label: "Serviços", sectionId: "services" },
    { label: "Laudos e ARTs", sectionId: "crea" },
    { label: "Sobre", sectionId: "crea" },
    { label: "Contato", sectionId: "contact" },
  ] as const,
};

// ---------- DADOS PESSOAIS ----------
export const PERSONAL_INFO = {
  fullName: "Rafael Perches Pierri",
  shortName: "Rafael P. Pierri",
  title: "Eng. Mecânico",
  specialty: "Mecânica",
  fullTitle: "Engenheiro Mecânico",
};

// ---------- INFORMAÇÕES CREA ----------
export const CREA_INFO = {
  council: "CREA-SP",
  registrationNumber: "000.000.000-0",
  validity: "31/12/2030",
  status: "Ativo",
  emissionStatus: "Disponível",
};

// ---------- CONTATO ----------
export const CONTACT_INFO = {
  phone: "(16) 9 8194-9538",
  // Número no formato internacional sem símbolos (DDI + DDD + número)
  whatsappNumber: "5516981949538",
  whatsappMessage: "Olá! Vim pelo site da Pierri Soluções",
  email: "pierriengenhariamecanica@gmail.com",
  city: "Araraquara, SP",
  coverage: "Todo o Brasil",
  businessHours: "Seg-Sex, 8h-18h",
};

// Helper: monta a URL do WhatsApp com mensagem pré-preenchida
export const getWhatsAppUrl = () => {
  const { whatsappNumber, whatsappMessage } = CONTACT_INFO;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
};

// ---------- TEXTOS FIXOS DA INTERFACE ----------
export const UI_TEXTS = {
  hero: {
    headingPart1: "Conformidade técnica",
    headingPart2: "para quem",
    headingPart3: "não pode errar.",
    description:
      "Laudos, ARTs e pareceres técnicos em conformidade com as normas vigentes. Atendemos clientes em todo o território nacional, com sede em Araraquara, SP.",
    ctaPrimary: "Ver serviços",
    ctaPrimarySection: "services", // id da seção de destino
    ctaSecondary: "Solicitar orçamento",
    ctaSecondarySection: "contact", // id da seção de destino
  },
  techCard: {
    title: "Ficha Técnica · Responsável",
    fields: {
      name: "Nome",
      title: "Título",
      crea: "CREA-SP",
      headquarters: "Sede",
      coverage: "Atuação",
      artEmission: "Emissão ART",
      specialties: "Especialidades",
    },
  },
  stats: {
    specialties: "Especialidades",
    artEmission: "Emissão própria",
    nationalCoverage: "Atendimento · Todo o Brasil",
    council: "CREA-SP",
  },
  services: {
    sectionTag: "Serviços",
    sideTag: "Laudos · ARTs · Pareceres",
  },
  creaSection: {
    tagLeft: "Registro",
    tagRight: "Profissional",
    headingLine1: "Engenheiro registrado",
    headingLine2: "no CREA-SP.",
    description:
      "Todo serviço emitido com ART registrada junto ao CREA-SP, garantindo validade legal e responsabilidade técnica sobre os documentos. O número de registro pode ser consultado diretamente no portal do CREA.",
    cardHeader: "CREA-SP · Conselho Regional",
    registrationLabel: "N° de Registro",
    validityLabel: "Validade",
  },
  contactSection: {
    tagLeft: "Contato",
    tagRight: "Solicitar orçamento",
    headingLine1: "Vamos falar",
    headingLine2: "sobre o seu projeto.",
    description:
      "Descreva o serviço necessário e retornamos com prazo, escopo e proposta. Atendemos todo o Brasil.",
    infoLabels: {
      email: "E-mail",
      headquarters: "Sede",
      coverage: "Atendimento",
      hours: "Horário",
      artEmission: "Emissão de ART",
    },
  },
};

export const NAV_LINKS = [
  { label: "Serviços",      sectionId: "services" },
  { label: "Laudos e ARTs", sectionId: "crea"     },
  { label: "Sobre",         sectionId: "crea"     },
  { label: "Contato",       sectionId: "contact"  },
] as const;