export const SITE_TITLE = "blade";

export const SITE_DESCRIPTION =
  `blade — a developer obsessed with sharp tools, clean code, and the terminal. Projects, writing, and the stack I build with.`.trim();

// GitHub username. Drives the GitHub nav link, and the Projects section when
// PROJECTS below is empty (falls back to auto-pulling your public repos).
export const GITHUB_USERNAME = "";

// Tagline shown under the name in the hero.
export const QUOTE = "Sharp tools. Clean code. Endless curiosity.";

export const ABOUT_ME =
  `I'm blade. I fell for code the night I realized I could *build* the tools I used every day — and I never looked back. I live in the terminal, obsess over fast software and clean abstractions, and believe the best tools feel invisible. When I'm not shipping, I'm reading source code for fun, sharpening my dotfiles, or rewriting something in Rust just to understand it a little deeper. Code isn't my job. It's my craft.`.trim();

// The tech I reach for, shown in the Tech section.
export const KNOWN_TECH =
  `Rust,Go,Typescript,Astro,Tailwindcss,Svelte,Nextjs,Python,Lua,Neovim,SQLite,Linux`.split(
    ",",
  );

export type Project = {
  name: string;
  description: string;
  url: string;
  homepage?: string;
  stars: number;
  language: string;
};

// Hand-picked projects. Leave this array empty to auto-pull from GitHub instead.
export const PROJECTS: Project[] = [
  {
    name: "forge",
    description:
      "A headless, fully accessible component library with zero runtime overhead. Bring your own styles; forge handles the hard parts — focus traps, ARIA, keyboard nav.",
    url: "https://github.com",
    homepage: "https://github.com/",
    stars: 23,
    language: "TypeScript",
  },
  {
    name: "no-cookie-analytics",
    description:
      "Self-hosted, privacy-first web analytics that ships as a single 8MB binary. No cookies, no tracking, no nonsense — just the numbers that matter.",
    url: "https://github.com",
    homepage: "https://github.com/",
    stars: 18,
    language: "Go",
  },
  {
    name: "rusty-cabinet",
    description:
      "A blazing-fast terminal file manager written in Rust. Vim-style keybindings, async previews, and it opens a 100k-file directory before your cursor stops blinking.",
    url: "https://github.com",
    stars: 12,
    language: "Rust",
  },
  {
    name: "keyboard-web",
    description:
      "A minimal, keyboard-driven static site generator. One config file, no plugins to wrangle, builds a thousand pages in under a second.",
    url: "https://github.com",
    stars: 8,
    language: "Go",
  },
  {
    name: "whetstone",
    description:
      "A TUI for practicing algorithms and data structures with spaced repetition. Sharpen the fundamentals a few minutes a day, right from your terminal.",
    url: "https://github.com",
    stars: 5,
    language: "TypeScript",
  },
  {
    name: "dotfiles",
    description:
      "My obsessively tuned Neovim + zsh + tmux setup. Years of small refinements, documented and reproducible with a single bootstrap script.",
    url: "https://github.com",
    stars: 4,
    language: "Lua",
  },
];

export const NAV_LINKS: Array<{ title: string; href?: string }> = [
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/#about" },
  { title: "GitHub", href: "https://github.com/" + GITHUB_USERNAME },
];
