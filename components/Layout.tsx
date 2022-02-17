import Footer from "./Footer";
import Navbar from "./Navbar";
import SEO from "./SEO";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <SEO title={title} />

      <div className="vercel">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center">
          <main className="mt-4 mb-16 flex w-full flex-1 flex-col px-8  md:px-20">
            <Navbar />
            <h1 className="mt-8 text-center text-4xl font-semibold">{title}</h1>
            <div className="mt-4">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
