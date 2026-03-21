// ─── BLOG POST DATA ────────────────────────────────────────────────────────────
//
// richText content blocks are typed objects rendered by <RichText />.
// Supported block types:
//   h1 | h2 | h3  — headings (with optional `id` for TOC anchor)
//   p              — paragraph with optional inline HTML
//   blockquote     — pull quote with teal left border
//   hr             — section divider
//   ul             — unordered list of items
//   ol             — ordered list of items
//   table          — comparison table { head: string[], rows: string[][] }
//   image          — figure with optional caption { src, alt, caption? }

export const POST = {
  category: { label: "Insights", slug: "insights" },
  date: "March 21, 2026",
  title: "Building Digital Products That Last: Our Process",
  lead: "How we approach every engagement — from discovery to launch — and why the details we obsess over are exactly what separates good work from great work.",
  coverImage: null, // replace with actual image path when available

  author: {
    name: "Fuad Əliyev",
    initials: "FA",
    avatar: null, // replace with actual image path when available
  },

  related: [
    {
      title: "Why Discovery Beats Delivery Every Time",
      slug: "why-discovery-beats-delivery",
      date: "March 14, 2026",
    },
    {
      title: "Design Systems: The Investment That Pays Back Immediately",
      slug: "design-systems-investment",
      date: "March 7, 2026",
    },
    {
      title: "What Good Client Communication Actually Looks Like",
      slug: "good-client-communication",
      date: "February 28, 2026",
    },
    {
      title: "Performance First: Building for Core Web Vitals from Day One",
      slug: "performance-first-core-web-vitals",
      date: "February 19, 2026",
    },
  ],

  toc: [
    { id: "discovery-first",      label: "Discovery First" },
    { id: "design-with-intent",   label: "Design with Intent" },
    { id: "building-for-scale",   label: "Building for Scale" },
    { id: "handoff-and-beyond",   label: "Handoff and Beyond" },
    { id: "why-it-matters",       label: "Why It Matters" },
  ],

  content: [
    {
      type: "h2",
      id: "discovery-first",
      text: "Discovery First",
    },
    {
      type: "p",
      html: "Before a single wireframe is drawn, we spend time understanding the problem. Not the brief — the problem. We sit with the people who will use the product, audit what exists, and map where the real friction lives. Most agencies skip this step. We build everything on it.",
    },
    {
      type: "blockquote",
      html: "The most expensive mistake in product design is building the right thing beautifully — for the wrong problem. <strong>— AD HOC</strong>",
    },
    {
      type: "p",
      html: "Our discovery phase typically includes competitive landscape mapping, user interviews, technical architecture review, and a clearly written strategy brief. By the time we open a design tool, every decision already has a reason behind it.",
    },
    {
      type: "hr",
    },
    {
      type: "h2",
      id: "design-with-intent",
      text: "Design with Intent",
    },
    {
      type: "p",
      html: "We design interfaces the way architects design buildings — every element earns its place. Typography is chosen for legibility and tone. Spacing creates rhythm, not just padding. Color communicates state, not just aesthetics.",
    },
    {
      type: "ul",
      items: [
        "<strong>Wireframes first:</strong> Low-fidelity structure before any visual polish. This is where real UX decisions happen.",
        "<strong>System thinking:</strong> Every component is designed as part of a system — not as a one-off screen.",
        "<strong>Prototype, then validate:</strong> Interactive prototypes are tested with real users before development begins.",
      ],
    },
    {
      type: "p",
      html: "The result is a visual language that is consistent, scalable, and ready for the engineering handoff without ambiguity.",
    },
    {
      type: "hr",
    },
    {
      type: "h2",
      id: "building-for-scale",
      text: "Building for Scale",
    },
    {
      type: "p",
      html: "Good design is only half the work. We build in Next.js with performance budgets, semantic HTML, and component architecture that your team can extend confidently after we leave.",
    },
    {
      type: "table",
      head: ["Principle", "What it means in practice"],
      rows: [
        ["Performance first", "Core Web Vitals green on launch day, not after"],
        ["Accessible by default", "WCAG 2.1 AA from component level up"],
        ["Clean handoff", "Documented components, no mystery code"],
        ["Scalable architecture", "Folder structure and naming your team will thank us for"],
      ],
    },
    {
      type: "p",
      html: "We write code the way we write briefs — clearly, with intention, and without shortcuts that create technical debt six months later.",
    },
    {
      type: "hr",
    },
    {
      type: "h2",
      id: "handoff-and-beyond",
      text: "Handoff and Beyond",
    },
    {
      type: "p",
      html: "We do not disappear at launch. Every project ends with a structured handoff: a recorded walkthrough of the codebase, annotated Figma files, and a 30-day window for questions, fixes, and minor adjustments.",
    },
    {
      type: "p",
      html: "Many clients stay longer. Some bring us in for the next version. A few have made us their permanent design and development partner. That outcome is what we build toward from day one.",
    },
    {
      type: "hr",
    },
    {
      type: "h2",
      id: "why-it-matters",
      text: "Why It Matters",
    },
    {
      type: "p",
      html: "A product that launches well does not guarantee a product that lasts. The teams that build for the long term — with a clear process, honest communication, and genuine craft — are the ones whose work still holds up two years later.",
    },
    {
      type: "blockquote",
      html: "We measure success not by how fast we shipped, but by how long it stands.",
    },
    {
      type: "p",
      html: "That is the AD HOC standard. And it is the only one we are willing to work to.",
    },
  ],
};
