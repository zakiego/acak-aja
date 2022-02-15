import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div className="vercel mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center">
      <main className="mt-8 mb-16 flex w-full flex-1 flex-col px-8  md:px-20">
        <div className="mx-auto  mb-5 max-w-max rounded-md bg-sky-300/60 px-2 py-1  text-center text-sm text-gray-800/75">
          preview version
        </div>
        <h1 className="text-center text-4xl font-semibold">{title}</h1>
        <div className="mt-7">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
