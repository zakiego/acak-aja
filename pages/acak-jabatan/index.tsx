import Link from "next/link";
import { useState } from "react";

import InputForm from "~/components/acak-jabatan/InputForm";
import RandomResult from "~/components/acak-jabatan/RandomResult";
import {
  FilterArrayJSONNotNull,
  GroupByNGroupJabatan,
  Position,
  ShuffleArray,
} from "~/components/Helper";
import Layout from "~/components/Layout";

export default function AcakJabatan() {
  const [listPosition, setListPosition] = useState<Position[]>([
    { name: "", amount: 1, member: [] },
  ]);
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
    <Layout title={"Acak Jabatan"}>
      <div className="mb-10 text-center">
        <Link href="/acak-jabatan/contoh" passHref>
          <a className=" text-mini-link">Klik di sini untuk melihat contoh</a>
        </Link>
      </div>

      <div className=" space-y-6 divide-y-2 divide-dashed">
        <InputForm
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
