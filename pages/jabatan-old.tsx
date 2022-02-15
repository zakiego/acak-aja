import { useState } from "react";

import { ShuffleArray, SplitString } from "~/components/Helper";
import NameInputForm from "~/components/jabatan/NameInputForm-old";
import RandomResult from "~/components/jabatan/RandomResult-old";
import Layout from "~/components/Layout";

export default function AcakJabatan() {
  const [listName, setListName] = useState<string[]>([]);
  const [listMatkul, setListMatkul] = useState<{ mk: string }[]>([{ mk: "" }]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;
    const list = [...listMatkul];
    list[index]["mk"] = value;
    setListMatkul(list);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...listMatkul];
    list.splice(index, 1);
    setListMatkul(list);
  };

  const handleAddClick = () => {
    setListMatkul([...listMatkul, { mk: "" }]);
  };

  async function randomFunction(event: React.SyntheticEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
    };

    const list = target.name.value;
    setListName(ShuffleArray(SplitString(list)));
  }

  return (
    <Layout title={"Acak Jabatan"}>
      <div className="space-y-6 divide-y-2 divide-dashed">
        <NameInputForm
          randomFunction={randomFunction}
          setListName={setListName}
        />

        <div>
          <div className="mt-6">
            <RandomResult
              handleAddClick={handleAddClick}
              listMatkul={listMatkul}
              listName={listName}
              handleInputChange={handleInputChange}
              handleRemoveClick={handleRemoveClick}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// https://www.cluemediator.com/add-or-remove-input-fields-dynamically-with-reactjs
