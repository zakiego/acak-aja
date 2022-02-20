import Link from "next/link";
import { useState } from "react";

import NameInputFormExample from "~/components/acak-jabatan/InputFormExample";
import RandomResult from "~/components/acak-jabatan/RandomResult";
import {
  FilterArrayJSONNotNull,
  GroupByNGroupJabatan,
  Position,
  ShuffleArray,
} from "~/components/Helper";
import Layout from "~/components/Layout";
import { mockJabatan } from "~/components/Mock";

export default function AcakJabatan() {
  const [listPosition, setListPosition] = useState<Position[]>(mockJabatan);
  const [groups, setGroups] = useState<Position[]>([]);

  async function randomFunction(tempListName: string[]) {
    const data = GroupByNGroupJabatan(
      FilterArrayJSONNotNull(listPosition),
      ShuffleArray([...tempListName]) as string[],
    );
    setGroups(data);
  }

  const handleAddClick = () => {
    setListPosition([...listPosition, { name: "", amount: 1, member: [] }]);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...listPosition];
    list.splice(index, 1);
    setListPosition(list);
  };

  const handleInpuChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    propertyToChange: "name" | "amount",
  ) => {
    const { value } = e.target;
    const list = [...listPosition];
    if (propertyToChange == "amount") {
      list[index][propertyToChange] = parseInt(value);
    }
    if (propertyToChange == "name") {
      list[index][propertyToChange] = value;
    }
    setListPosition(list);
  };

  return (
    <Layout title={"Contoh Acak Jabatan"}>
      <div className="mb-5 text-center">
        <Link href="/acak-jabatan" passHref>
          <a className=" text-mini-link">
            Klik di sini untuk kembali ke halaman sebelumnya
          </a>
        </Link>
      </div>

      <div className=" mx-auto mb-5 max-w-max rounded-md bg-rose-700/80 px-2 text-white opacity-75">
        Contoh
      </div>

      <div className=" space-y-6 divide-y-2 divide-dashed">
        <NameInputFormExample
          setListPosition={setListPosition}
          handleRemoveClick={handleRemoveClick}
          handleInpuChange={handleInpuChange}
          handleAddClick={handleAddClick}
          randomFunction={randomFunction}
          listPosition={listPosition}
        />

        {groups.length > 0 && (
          <div>
            <div className="mt-6">
              <RandomResult groups={groups} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
