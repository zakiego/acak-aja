import Link from "next/link";
import { useState } from "react";

import InputForm from "~/components/acak-angka/InputForm";
import RandomResult from "~/components/acak-angka/RandomResult";
import { Range, ShuffleArray } from "~/components/Helper";
import Layout from "~/components/Layout";

type NumberProps = { start: number; end: number; amount: number };

export default function AcakAngka() {
  const [number, setNumber] = useState<NumberProps>({
    start: 0,
    end: 1,
    amount: 0,
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
    <Layout title={"Acak Angka"}>
      <div className="mb-10 text-center ">
        <Link href="/acak-angka/contoh" passHref>
          <a className=" text-mini-link">Klik di sini untuk melihat contoh</a>
        </Link>
      </div>

      <div className=" space-y-6 divide-y-2 divide-dashed">
        <InputForm
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
