import Head from "next/head";
import Image from "next/image";

import Icon from "~/public/next-tailwind.svg";

export default function Home() {
  return (
    <div className="vercel flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-12 text-center md:px-20">
        <Image
          src={Icon}
          height={100}
          width={400}
          alt="Next.js + Tailwind CSS"
        />

        <h1 className="mt-5 text-2xl font-bold md:text-5xl">
          <a href="https://nextjs.org/">Next.js</a> and{" "}
          <a
            className="border-b-2 border-transparent text-[#06B6D4]  transition-all duration-500 hover:border-b-2 hover:border-[#06B6D4]"
            href="https://nextjs.org"
          >
            Tailwind CSS
          </a>
        </h1>

        <div className="mt-4 text-base opacity-40 md:text-2xl">
          With TypeSciprt, Jest, Prettier, and ESLint
        </div>

        <a
          href="https://github.com/zakiego/nextjs-typescript-tailwindcss-starter"
          className="mt-7 border-b-2 border-transparent text-[#06B6D4] transition-all duration-500 hover:border-b-2 hover:border-[#06B6D4]"
        >
          view github repository
        </a>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="ml-2">
            <Image
              height={16}
              width={70.75}
              src="/vercel.svg"
              alt="Vercel Logo"
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
