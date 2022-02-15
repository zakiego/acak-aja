import { useState } from "react";

import { ShuffleArray, SplitString } from "~/components/Helper";
import InputFormExample from "~/components/jabatan/InputFormExample";
import RandomResult from "~/components/jabatan/RandomResult";
import Layout from "~/components/Layout";

export default function AcakJabatan() {
  const [listName, setListName] = useState<string[]>([
    ...ShuffleArray(SplitString(mockName)),
  ]);
  const [listPosition, setListPosition] = useState<string[]>([
    ...SplitString(mockPosition),
  ]);

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
      <div className="mb-5 max-w-max rounded-md bg-rose-700/80 px-2 text-white">
        Contoh
      </div>
      <div className="space-y-6 divide-y-2 divide-dashed">
        <InputFormExample
          mockName={mockName}
          mockPosition={SplitString(mockPosition)}
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

const mockName =
  "Udin\nAgus\nAsep\nKarni\nNurul\nLiat\nSepti\nWahyu\nArif\nSri\nMaya\nSiti\nReza\nAndri\nAmat\nKartika";
const mockPosition =
  "Ketua\nWakil Ketua\nSekretaris\nBendahara\nSeksi Kebersihan\nSeksi Keamanan";
