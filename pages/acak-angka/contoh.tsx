import Link from "next/link";
import { useState } from "react";

import NameInputFormExample from "~/components/acak-angka/InputFormExample";
import RandomResult from "~/components/acak-angka/RandomResult";
import { Range, ShuffleArray } from "~/components/Helper";
import Layout from "~/components/Layout";

type NumberProps = { start: number; end: number; amount: number };

export default function AcakAngka() {
  const [number, setNumber] = useState<NumberProps>({
    start: 4,
    end: 1000,
    amount: 5,
  });
  const [results, setResults] = useState<number[]>([]);

  async function handleRandomize() {
    const array = Range(number.start, number.end, 1, number.amount);
    setResults(ShuffleArray(array) as number[]);
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    part: "start" | "end" | "amount",
  ) => {
    const { value } = e.target;
    const temp = { ...number };
    temp[part] = parseInt(value);
    setNumber(temp);
  };

  const handleReset = () => {
    setResults([]);
  };

  return (
    <Layout title={"Contoh Acak Angka"}>
      <div className="mb-5 text-center">
        <Link href="/acak-angka" passHref>
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
          number={number}
          setNumber={setNumber}
          handleReset={handleReset}
          handleInputChange={handleInputChange}
          handleRandomize={handleRandomize}
        />

        {results.length > 0 && (
          <div>
            <div className="mt-6">
              <RandomResult results={results} number={number} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
