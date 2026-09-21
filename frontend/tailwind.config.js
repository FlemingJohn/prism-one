module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryHover: "var(--color-primary-hover)",
        primaryGlow: "var(--color-primary-glow)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        surfaceRaised: "var(--color-surface-raised)",
        border: "var(--color-border)",
        borderGlow: "var(--color-border-glow)",
        textMain: "var(--color-text-main)",
        textMuted: "var(--color-text-muted)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        badgeBackground: "var(--color-badge-background)",
        badgeBorder: "var(--color-badge-border)",
      },
    },
  },
  plugins: [],
}
