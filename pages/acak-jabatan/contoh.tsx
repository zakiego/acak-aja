import Link from "next/link";
import { useState } from "react";

import InputFormExample from "~/components/acak-jabatan/InputFormExample";
import RandomResult from "~/components/acak-jabatan/RandomResult";
import { ShuffleArray, SplitString } from "~/components/Helper";
import Layout from "~/components/Layout";
import { mockName, mockPosition } from "~/components/Mock";

export default function AcakJabatan() {
  const [listName, setListName] = useState<string[]>([
    ...(ShuffleArray(SplitString(mockName)) as string[]),
  ]);
  const [listPosition, setListPosition] = useState<string[]>([
    ...SplitString(mockPosition),
  ]);

  async function randomFunction(listName: string[]) {
    setListName(ShuffleArray([...listName]) as string[]);
  }

  return (
    <Layout title={"Contoh Acak Jabatan"}>
      <div className="mb-5 text-center">
        <Link href="/acak-jabatan" passHref>
          <a className=" rounded-md bg-gray-200/75 px-2 py-1.5 text-xs text-black/60 transition-all hover:bg-gray-300/75">
            Klik di sini untuk kembali ke halaman sebelumnya
          </a>
        </Link>
      </div>

      <div className=" mx-auto mb-5 max-w-max rounded-md bg-rose-700/80 px-2 text-white opacity-75">
        Contoh
      </div>

      <div className="space-y-6 divide-y-2 divide-dashed">
        <InputFormExample
          mockName={mockName}
          mockPosition={SplitString(mockPosition)}
          randomFunction={randomFunction}
          setListName={setListName}
          setListPosition={setListPosition}
          listPosition={listPosition}
        />

        {listName.length > 0 ? (
          <div>
            <div className="mt-6">
              <RandomResult listName={listName} listPosition={listPosition} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
}
