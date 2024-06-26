import { IconType } from "react-icons";
import { BiEraser, BiSmile } from "react-icons/bi";
import { FaCode, FaHatWizard } from "react-icons/fa";
import {
  SiArchlinux,
  SiAstro,
  SiBun,
  SiCanva,
  SiConvertio,
  SiDebian,
  SiFontawesome,
  SiFreecodecamp,
  SiGithub,
  SiGitlab,
  SiGo,
  SiHashnode,
  SiNeovim,
  SiNextdotjs,
  SiNixos,
  SiNodedotjs,
  SiNotion,
  SiOpenai,
  SiPnpm,
  SiPython,
  SiReact,
  SiReddit,
  SiStackoverflow,
  SiStarship,
  SiTailwindcss,
  SiTmux,
  SiVercel,
  SiYoutube,
  SiZig,
  SiZsh,
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
    name: "Reddit",
    desc: "Reddit is an American social news aggregation, content rating, and forum social network.",
    site: "https://www.reddit.com/",
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
  {
    id: 13,
    icon: SiReddit,
    name: "Unixp*rn",
    desc: "Submit screenshots of *NIX desktops, themes, or anything else that will make ricers happy.",
    site: "https://www.reddit.com/r/unixporn/",
  },
  {
    id: 14,
    icon: BiSmile,
    name: "Hugging Face",
    desc: "A company based in New York City that develops computer tools for building applications using machine learning",
    site: "https://huggingface.co/",
  },
  {
    id: 15,
    icon: SiNotion,
    name: "Notion",
    desc: "Notion is a freemium productivity and note-taking web application developed by Notion Labs, Inc.",
    site: "https://www.notion.so/",
  },
  {
    id: 16,
    icon: SiFreecodecamp,
    name: "freeCodeCamp",
    desc: "freeCodeCamp is a non-profit organization that consists of an interactive learning web platform and more.",
    site: "https://www.freecodecamp.org/",
  },
  {
    id: 17,
    icon: SiStarship,
    name: "Starship",
    desc: "Starship is the minimal, blazing fast, and extremely customizable prompt for any shell!",
    site: "https://starship.rs/",
  },
  {
    id: 18,
    icon: SiZsh,
    name: "ZSH",
    desc: "The Z shell is a Unix shell that can be used as an interactive login shell and as a command interpreter for shell scripting.",
    site: "https://zsh.org/",
  },
  {
    id: 19,
    icon: SiStackoverflow,
    name: "StackOverflow",
    desc: "Stack Overflow is a question-and-answer website for computer programmers.",
    site: "https://stackoverflow.com/",
  },
  {
    id: 20,
    icon: SiNixos,
    name: "NixOS",
    desc: "NixOS is a free and open source Linux distribution based on the Nix package manager.",
    site: "https://nixos.org/",
  },
  {
    id: 21,
    icon: SiAstro,
    name: "Astro",
    desc: "Powering the world's fastest websites, client-side web apps, dynamic API endpoints, and everything in-between.",
    site: "https://astro.build/",
  },
  {
    id: 22,
    icon: SiHashnode,
    name: "Hashnode",
    desc: "Create and grow your developer blog, newsletter, or team engineering blog effortlessly with Hashnode.",
    site: "https://hashnode.com/",
  },
  {
    id: 23,
    icon: SiVercel,
    name: "Vercel",
    desc: "Vercel is the Frontend Cloud. Build, scale, and secure a faster, personalized web. Fast and easy deployment.",
    site: "https://vercel.com/",
  },
  {
    id: 24,
    icon: FaCode,
    name: "ShadCN UI",
    desc: "Beautifully designed components that you can copy and paste into your apps.",
    site: "https://ui.shadcn.com/",
  },
  {
    id: 25,
    icon: SiTmux,
    name: "TMUX",
    desc: "A terminal multiplexer that allows multiple terminal sessions to be accessed simultaneously in one window.",
    site: "https://github.com/tmux/tmux/wiki/",
  },
  {
    id: 25,
    icon: SiGitlab,
    name: "GitLab",
    desc: "A sort of a GitHub alternative, a DevOps software package that can develop, secure, and operate software.",
    site: "https://about.gitlab.com/",
  },
  {
    id: 26,
    icon: SiArchlinux,
    name: "Arch Linux",
    desc: "Independently developed x86-64 general-purpose Linux distro that provides the latest stable software. ",
    site: "https://archlinux.org/",
  },
  {
    id: 27,
    icon: SiDebian,
    name: "Debian Linux",
    desc: "A Linux distribution composed of free and open-source software and optionally non-free firmware.",
    site: "https://www.debian.org/",
  },
  {
    id: 28,
    icon: SiPython,
    name: "Python",
    desc: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
    site: "https://www.python.org/",
  },
  {
    id: 29,
    icon: SiOpenai,
    name: "ChatGPT",
    desc: "A free-to-use AI system for engaging conversations and witness the future of AI, all in one place",
    site: "https://chat.openai.com/",
  },
  {
    id: 30,
    icon: SiCanva,
    name: "Canva",
    desc: "A free-to-use online graphic design tool for creating presentations, posters, videos, logos and more.",
    site: "https://www.canva.com/",
  },
  {
    id: 31,
    icon: SiFontawesome,
    name: "Nerd Fonts",
    desc: "This is a modern iconic font aggregator, collection, and patcher where you can find a plethora of fonts.",
    site: "https://www.nerdfonts.com/",
  },
  {
    id: 32,
    icon: SiConvertio,
    name: "Convert IO",
    desc: "A platform where you can convert your files to any format. Convert files like png, jpg, jpeg, svg, etc.",
    site: "https://convertio.co/",
  },
  {
    id: 33,
    icon: BiEraser,
    name: "Remove BG",
    desc: "A wesite where you can remove image backgrounds 100% automatically in seconds with one click.",
    site: "https://remove.bg/",
  },
  {
    id: 34,
    icon: FaHatWizard,
    name: "Leonardo AI",
    desc: "Create production-quality visual assets for your projects with unprecedented quality, speed, and style-consistency.",
    site: "https://leonardo.ai/",
  },
  {
    id: 35,
    icon: SiNixos,
    name: "NixOS PKGS",
    desc: "Use the Nix package manager to search a large repository of over 100 000 packages for your NixOS system.",
    site: "https://search.nixos.org/packages",
  },
];
