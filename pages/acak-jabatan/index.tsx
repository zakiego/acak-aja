import Link from "next/link";
import { useState } from "react";

import { ShuffleArray } from "~/components/Helper";
import InputForm from "~/components/jabatan/InputForm";
import RandomResult from "~/components/jabatan/RandomResult";
import Layout from "~/components/Layout";

export default function AcakJabatan() {
  const [listName, setListName] = useState<string[]>([]);
  const [listPosition, setListPosition] = useState<string[]>([""]);

  async function randomFunction(listName: string[]) {
    setListName(ShuffleArray([...listName]));
  }

  const handleAddClick = () => {
    setListPosition([...listPosition, ""]);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...listPosition];
    list.splice(index, 1);
    setListPosition(list);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;
    const list = [...listPosition];
    list[index] = value;
    setListPosition(list);
  };

  return (
    <Layout title={"Acak Jabatan"}>
      <Link href="/acak-jabatan/contoh">
        <a>Lihat Contoh</a>
      </Link>

      <div className="space-y-6 divide-y-2 divide-dashed">
        <InputForm
          handleInputChange={handleInputChange}
          handleRemoveClick={handleRemoveClick}
          handleAddClick={handleAddClick}
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
