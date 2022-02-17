import Link from "next/link";

import Layout from "~/components/Layout";

export default function Home() {
  const menu = [
    {
      name: "Acak Kelompok",
      link: "/acak-kelompok",
    },
    {
      name: "Acak Jabatan",
      link: "/acak-jabatan",
    },
    {
      name: "Acak Piket",
      link: "/acak-piket",
    },

    {
      name: "Acak Angka",
      link: "/acak-angka",
    },
  ];

  return (
    <>
      <Layout>
        <div className="text-center">
          <h1 className="text-5xl font-bold md:text-7xl">Acak Aja</h1>
          <h3 className="mt-4 opacity-70 md:text-xl">
            Daripada tunjuk-tunjukkan
          </h3>
          <div className=" mx-auto mt-4 max-w-max ">
            <Link href="/saran">
              <a className="text-mini-link">Kamu punya saran?</a>
            </Link>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-7">
          {menu.map((menu) => {
            return (
              <Link key={menu.name} href={menu.link}>
                <a>
                  <div className="card">{menu.name}</div>
                </a>
              </Link>
            );
          })}
        </div>
      </Layout>
    </>
  );
}
