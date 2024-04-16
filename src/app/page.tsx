import Tip from "@/components/Tip";
import Image from "next/image";
import {
  SiBun,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiReact,
  SiReddit,
  SiYoutube,
} from "react-icons/si";

import { data } from "@/data/config";

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl bg-zinc-800/40 text-white px-5 gap-2">
          Welcome to <code className="font-mono font-bold">Speed Links</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-24 w-full items-end justify-center bg-black lg:static lg:size-auto lg:bg-none">
          <a
            className="text-white pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://wmouton.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built by{" "}
            <Image
              src="/wm.svg"
              alt="WM Logo"
              className="dark:invert bg-zinc-800/30 rounded-md px-2"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className="text-white text-xl mt-12">
        A list of quick links that I use regularly, maybe you use some of these
        as well, if you do...enjoy!
        <p className="text-xs text-zinc-500 pt-2 ">
          <Tip />
        </p>
      </div>
      <div className="text-white gap-4 mt-12 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {data.map(({ id, icon: IconComponent, site, name, desc }) => (
          <a
            key={id}
            href={site}
            className="group rounded-lg border border-zinc-800/30 px-5 py-4 transition-colors hover:border-zinc-700/30 hover:bg-zinc-800/30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl inline-flex gap-2 font-semibold">
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {typeof IconComponent === "string" ? (
                  <span className="text-3xl pt-0.5">{IconComponent}</span>
                ) : (
                  <IconComponent className="text-3xl pt-0.5" />
                )}
              </span>
              {name}
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">{desc}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
