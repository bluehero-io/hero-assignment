/**
 * Dutch copy for the jobs app.
 */
export const nl = {
  languageLabel: "Nederlands",
  nav: {
    brand: "Hero Jobs",
    primaryLinks: [
      { href: "/nl", label: "Werkgever overzicht" },
      { href: "/nl/roles", label: "Roloverzicht" },
      { href: "/nl/dashboard", label: "Hiring dashboard" }
    ],
    cta: "Start een rol"
  },
  footer: {
    title: "Recruitment control",
    description: "Realtime hiring intelligence voor mission operators.",
    secondary: "Gebouwd op veilige, compliant talent workflows."
  },
  home: {
    heroTitle: "Ontwerp de volgende hero missie",
    heroSubtitle: "Centraliseer rollen, kandidaten en voortgang met vertrouwen.",
    heroCta: "Bekijk hiring status",
    heroTag: "Employer-ready command",
    highlightTitle: "Waarom teams Hero Jobs kiezen",
    highlightSubtitle: "Operations-first hiring met transparante zichtbaarheid.",
    metrics: [
      { label: "Open rollen", value: "18" },
      { label: "Heroes in review", value: "57" },
      { label: "Gem. vultijd", value: "16 dagen" }
    ],
    highlights: [
      {
        title: "Missieklare pipelines",
        description: "Volg kandidaten met realtime alerts."
      },
      {
        title: "Veilige approvals",
        description: "Elke write gaat via public functions met RLS."
      },
      {
        title: "Recruitment partners",
        description: "Dedicated partners houden elke hire on track."
      }
    ]
  },
  roles: {
    title: "Actieve rol roster",
    subtitle: "Open missies klaar voor hero kandidaten.",
    filtersLabel: "Roltype",
    filters: ["Leiderschap", "Operations", "Engineering", "Design"],
    listings: [
      {
        id: "solar-core",
        title: "Director Hero Operations",
        team: "Solar Core",
        location: "Rotterdam, NL",
        type: "Hybride",
        summary: "Leid hero operationele readiness en escalatie reviews."
      },
      {
        id: "lumen-signal",
        title: "Talent Signal Analyst",
        team: "Lumen Signal",
        location: "Remote",
        type: "Remote",
        summary: "Analyseer hiring funnel kwaliteit met mission metrics."
      },
      {
        id: "orbit-design",
        title: "Experience Design Lead",
        team: "Orbit Labs",
        location: "Amsterdam, NL",
        type: "On-site",
        summary: "Ontwerp tactiele hero onboarding ervaringen."
      }
    ]
  },
  roleDetail: {
    title: "Rol command brief",
    sections: {
      mission: "Missiescope",
      outcomes: "Hiring outcomes",
      traits: "Ideale traits"
    },
    actions: {
      primary: "Open shortlist",
      secondary: "Deel brief"
    },
    outcomes: [
      "Lever candidate slate binnen 10 dagen",
      "Voltooi mission briefing packet",
      "Start onboarding plan"
    ],
    traits: [
      "Executive-level helderheid",
      "Operationele nauwkeurigheid",
      "Cross-functioneel leiderschap"
    ]
  },
  dashboard: {
    title: "Hiring dashboard",
    subtitle: "Monitor throughput en mission readiness.",
    pipelineTitle: "Huidige pipeline",
    pipelineSubtitle: "Live stages voor elke actieve rol.",
    pipeline: [
      { stage: "Nieuw", value: "22" },
      { stage: "Review", value: "11" },
      { stage: "Offer", value: "4" }
    ],
    actions: {
      primary: "Keuring missies",
      secondary: "Nodig stakeholders uit"
    }
  },
  loading: {
    title: "Hiring signals synchroniseren",
    subtitle: "Mission intelligence wordt geladen."
  },
  error: {
    title: "Command onderbroken",
    subtitle: "We kunnen dit scherm niet laden. Probeer opnieuw.",
    action: "Probeer opnieuw"
  },
  notFound: {
    title: "Signaal niet gevonden",
    subtitle: "Deze route valt buiten de missiegrid.",
    action: "Terug naar start"
  }
} as const;
