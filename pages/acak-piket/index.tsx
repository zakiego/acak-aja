import Link from "next/link";
import { useState } from "react";

import InputForm from "~/components/acak-piket/InputForm";
import RandomResult from "~/components/acak-piket/RandomResult";
import {
  DefaultDay,
  FilterTrueDayOnly,
  GroupByNGroup,
  ShuffleArray,
} from "~/components/Helper";
import Layout from "~/components/Layout";

type Hari = {
  name: string;
  value: boolean;
}[];

export default function AcakPiket() {
  const [listName, setListName] = useState<string[]>([]);
  const [listDay, setListDay] = useState<Hari>(DefaultDay);
  const [groups, setGroups] = useState<string[][]>([]);
  const [listDayResult, setListDayResult] = useState<Hari>([]);

  async function handleRandomize(listName: string[]) {
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
    <Layout title={"Acak Piket"}>
      <div className="mb-10 text-center ">
        <Link href="/acak-piket/contoh">
          <a className=" text-mini-link">Klik di sini untuk melihat contoh</a>
        </Link>
      </div>

      <div className=" space-y-6 divide-y-2 divide-dashed">
        <InputForm
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
