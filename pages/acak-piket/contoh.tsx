import Link from "next/link";
import { useState } from "react";

import NameInputFormExample from "~/components/acak-piket/InputFormExample";
import RandomResult from "~/components/acak-piket/RandomResult";
import {
  DefaultDay,
  FilterTrueDayOnly,
  GroupByNGroup,
  ShuffleArray,
  SplitString,
} from "~/components/Helper";
import Layout from "~/components/Layout";
import { mockName } from "~/components/Mock";

type Hari = {
  name: string;
  value: boolean;
}[];

export default function AcakPiket() {
  const [listName, setListName] = useState<string[]>(SplitString(mockName));
  const [listDay, setListDay] = useState<Hari>(DefaultDay);
  const [groups, setGroups] = useState<string[][]>([]);
  const [listDayResult, setListDayResult] = useState<Hari>([]);

  async function handleRandomize() {
    const dayTrue = FilterTrueDayOnly(listDay);
    const numberOfGroups = dayTrue.length;

    const groups = GroupByNGroup(
      numberOfGroups,
      ShuffleArray([...listName]) as string[],
    );

    setListDayResult(dayTrue);
    setGroups(groups);
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { checked } = e.target;

    const list = [...listDay];
    list[index].value = checked;
    setListDay(list);
  };

  return (
    <Layout title={"Contoh Acak Piket"}>
      <div className="mb-5 text-center">
        <Link href="/acak-kelompok" passHref>
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
          handleInputChange={handleInputChange}
          handleRandomize={handleRandomize}
          setListName={setListName}
          setListDay={setListDay}
          listDay={listDay}
          setListDayResult={setListDayResult}
        />

        {/* <div>
          {listDay.map((day) => {
            return <div key={day.name}>{JSON.stringify(day)}</div>;
          })}
        </div> */}

        {listDayResult.length > 0 && (
          <div>
            <div className="mt-6">
              <RandomResult
                listName={listName}
                groups={groups}
                listDayResult={listDayResult}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
