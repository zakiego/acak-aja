import Link from "next/link";
import { useState } from "react";

import NameInputFormExmple from "~/components/acak-kelompok/InputFormExample";
import RandomResult from "~/components/acak-kelompok/RandomResult";
import { GroupByNGroup, ShuffleArray, SplitString } from "~/components/Helper";
import Layout from "~/components/Layout";
import { mockName } from "~/components/Mock";

export default function AcakKelompok() {
  const [listName, setListName] = useState<string[]>(SplitString(mockName));
  const [groups, setGroups] = useState<string[][]>([]);
  const [numberOfGroups, setNumberOfGroups] = useState(3);

  async function handleRandomize() {
    const groups = GroupByNGroup(
      numberOfGroups,
      ShuffleArray([...listName]) as string[],
    );
    setGroups(groups);
  }

  return (
    <Layout title={"Contoh Acak Kelompok"}>
      <div className="mb-5 text-center">
        <Link href="/acak-kelompok" passHref>
          <a className=" rounded-md bg-gray-200/75 px-2 py-1.5 text-xs text-black/60 transition-all hover:bg-gray-300/75">
            Klik di sini untuk kembali ke halaman sebelumnya
          </a>
        </Link>
      </div>

      <div className=" mx-auto mb-5 max-w-max rounded-md bg-rose-700/80 px-2 text-white opacity-75">
        Contoh
      </div>

      <div className=" space-y-6 divide-y-2 divide-dashed">
        <NameInputFormExmple
          mockName={mockName}
          handleRandomize={handleRandomize}
        />

        {groups.length > 0 && (
          <div>
            <div className="mt-6">
              <RandomResult listName={listName} groups={groups} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
