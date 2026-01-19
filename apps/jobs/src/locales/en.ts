/**
 * English copy for the jobs app.
 */
export const en = {
  languageLabel: "English",
  nav: {
    brand: "Hero Jobs",
    primaryLinks: [
      { href: "/en", label: "Employer overview" },
      { href: "/en/roles", label: "Role roster" },
      { href: "/en/dashboard", label: "Hiring dashboard" }
    ],
    cta: "Launch a role"
  },
  footer: {
    title: "Recruitment control",
    description: "Real-time hiring intelligence for mission operators.",
    secondary: "Built on secure, compliant talent workflows."
  },
  home: {
    heroTitle: "Design the next hero mission",
    heroSubtitle: "Centralize roles, candidates, and progress with high-trust workflows.",
    heroCta: "Review hiring status",
    heroTag: "Employer-ready command",
    highlightTitle: "Why teams choose Hero Jobs",
    highlightSubtitle: "Operations-first hiring with transparent visibility.",
    metrics: [
      { label: "Open roles", value: "18" },
      { label: "Heroes in review", value: "57" },
      { label: "Avg. fill time", value: "16 days" }
    ],
    highlights: [
      {
        title: "Mission-ready pipelines",
        description: "Track candidates across stages with real-time alerts."
      },
      {
        title: "Secure approvals",
        description: "Every write flows through public functions with RLS."
      },
      {
        title: "Partnered recruiters",
        description: "Dedicated partners keep every hire on track."
      }
    ]
  },
  roles: {
    title: "Active role roster",
    subtitle: "Open missions ready for hero candidates.",
    filtersLabel: "Role type",
    filters: ["Leadership", "Operations", "Engineering", "Design"],
    listings: [
      {
        id: "solar-core",
        title: "Director of Hero Operations",
        team: "Solar Core",
        location: "Rotterdam, NL",
        type: "Hybrid",
        summary: "Lead hero operational readiness and escalation reviews."
      },
      {
        id: "lumen-signal",
        title: "Talent Signal Analyst",
        team: "Lumen Signal",
        location: "Remote",
        type: "Remote",
        summary: "Analyze hiring funnel quality with mission metrics."
      },
      {
        id: "orbit-design",
        title: "Experience Design Lead",
        team: "Orbit Labs",
        location: "Amsterdam, NL",
        type: "On-site",
        summary: "Craft tactile hero onboarding experiences."
      }
    ]
  },
  roleDetail: {
    title: "Role command brief",
    sections: {
      mission: "Mission scope",
      outcomes: "Hiring outcomes",
      traits: "Ideal traits"
    },
    actions: {
      primary: "Open shortlist",
      secondary: "Share brief"
    },
    outcomes: [
      "Secure candidate slate within 10 days",
      "Complete mission briefing packet",
      "Launch onboarding plan"
    ],
    traits: [
      "Executive-level clarity",
      "Operational rigor",
      "Cross-functional leadership"
    ]
  },
  dashboard: {
    title: "Hiring dashboard",
    subtitle: "Monitor hiring throughput and mission readiness.",
    pipelineTitle: "Current pipeline",
    pipelineSubtitle: "Live stages across every active role.",
    pipeline: [
      { stage: "New", value: "22" },
      { stage: "Review", value: "11" },
      { stage: "Offer", value: "4" }
    ],
    actions: {
      primary: "Approve missions",
      secondary: "Invite stakeholders"
    }
  },
  loading: {
    title: "Syncing hiring signals",
    subtitle: "Refreshing mission intelligence."
  },
  error: {
    title: "Command interruption",
    subtitle: "Unable to load this view. Please retry.",
    action: "Retry"
  },
  notFound: {
    title: "Signal not found",
    subtitle: "This route is outside the mission grid.",
    action: "Return home"
  }
} as const;
