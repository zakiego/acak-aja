import Link from "next/link";
import { useState } from "react";

import InputForm from "~/components/acak-kelompok/InputForm";
import RandomResult from "~/components/acak-kelompok/RandomResult";
import { GroupByNGroup, ShuffleArray } from "~/components/Helper";
import Layout from "~/components/Layout";

export default function AcakKelompok() {
  const [listName, setListName] = useState<string[]>([]);
  const [groups, setGroups] = useState<string[][]>([]);
  const [numberOfGroups, setNumberOfGroups] = useState(1);

  async function handleRandomize(listName: string[]) {
    const groups = GroupByNGroup(
      numberOfGroups,
      ShuffleArray([...listName]) as string[],
    );
    setGroups(groups);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNumberOfGroups(parseInt(value));
  };

  const handleReset = () => {
    setGroups([]);
  };

  return (
    <Layout title={"Acak Kelompok"}>
      <div className="mb-10 text-center ">
        <Link href="/acak-kelompok/contoh">
          <a className="text-mini-link">Klik di sini untuk melihat contoh</a>
        </Link>
      </div>

      <div className=" space-y-6 divide-y-2 divide-dashed">
        <InputForm
          handleInputChange={handleInputChange}
          handleRandomize={handleRandomize}
          setListName={setListName}
          handleReset={handleReset}
        />

        {/* <div>{JSON.stringify(groups)}</div>
        <div>{numberOfGroups}</div> */}

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
