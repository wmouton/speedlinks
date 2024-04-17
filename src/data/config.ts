import { IconType } from "react-icons";
import {
  SiBun,
  SiGithub,
  SiGo,
  SiNeovim,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiReact,
  SiReddit,
  SiTailwindcss,
  SiYoutube,
  SiZig,
} from "react-icons/si";

interface DataProps {
  id: number;
  icon: IconType; // Assuming always IconType
  name: string;
  desc: string;
  site: string;
}

export const data: DataProps[] = [
  {
    id: 1,
    icon: SiYoutube,
    name: "YouTube",
    desc: "An American online video sharing and social media platform owned by the tech giant, Google.",
    site: "https://youtube.com/",
  },
  {
    id: 2,
    icon: SiGithub,
    name: "GitHub",
    desc: "The developer platform that allows developers to create, store, manage and share their code.",
    site: "https://github.com/",
  },
  {
    id: 3,
    icon: SiReddit,
    name: "Unixporn",
    desc: "Submit screenshots of *NIX desktops, themes, or anything else that will make ricers happy.",
    site: "https://www.reddit.com/r/unixporn/",
  },
  {
    id: 4,
    icon: SiNextdotjs,
    name: "Next.js",
    desc: "An open-source web dev framework providing server-side rendering and static website generation.",
    site: "https://nextjs.org/",
  },
  {
    id: 5,
    icon: SiReact,
    name: "React.js",
    desc: "A free and open-source front-end JavaScript library for building user interfaces based on components.",
    site: "https://react.dev/",
  },
  {
    id: 6,
    icon: SiBun,
    name: "Bun",
    desc: "A JavaScript runtime, package manager, test runner and bundler built from scratch using the Zig.",
    site: "https://bun.sh/",
  },
  {
    id: 7,
    icon: SiNodedotjs,
    name: "Node.js",
    desc: "A cross-platform, open-source JavaScript runtime env that can run on Windows, Linux, Unix, macOS, and more.",
    site: "https://nodejs.org",
  },
  {
    id: 8,
    icon: SiPnpm,
    name: "PNPM",
    desc: "PnPm is a fast and modern JS tool for installing and managing JavaScript packages.",
    site: "https://pnpm.io/",
  },
  {
    id: 9,
    icon: SiTailwindcss,
    name: "TailwindCSS",
    desc: "A utility-first CSS framework packed with classes like flex that can be composed to build any design.",
    site: "https://tailwindcss.com/",
  },
  {
    id: 10,
    icon: SiGo,
    name: "Go(Golang)",
    desc: "An open-source programming language with built-in concurrency and a robust standard library.",
    site: "https://go.dev/",
  },
  {
    id: 11,
    icon: SiZig,
    name: "Zig",
    desc: "A general-purpose programming language and toolchain for maintaining robust and reusable software.",
    site: "https://ziglang.org/",
  },
  {
    id: 12,
    icon: SiNeovim,
    name: "NeoVIM",
    desc: "Neovim is a modern and powerful text editor that is fully compatible with Vim and supports Lua plugins.",
    site: "https://neovim.io/",
  },
];
