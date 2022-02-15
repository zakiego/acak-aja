import Head from "next/head";
import Link from "next/link";

import Layout from "~/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Link href="/acak-jabatan">
          <a>Acak Jabatan</a>
        </Link>
      </Layout>
    </>
  );
}
