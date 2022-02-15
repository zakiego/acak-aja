import { GetServerSideProps } from "next";
import { useState } from "react";

import { ShuffleArray, SplitString } from "~/components/Helper";
import InputFormExample from "~/components/jabatan/InputFormExample";
import RandomResult from "~/components/jabatan/RandomResult";
import Layout from "~/components/Layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return { props: { id } };
};

interface Context {
  id: string;
}

export default function AcakJabatan({ id }: Context) {
  const data = [
    {
      class: "a",
      name: "Rafi Ardani\nMuhamad\nGaluh Fitria Rizqyandhanita\nAyu Azkiya\nAyu Permata Sari\nAzmi Anugerah Putri\nHekmah Nur Sari\nSalina\nMuhammad Aidin Noor\nJulvionisar\nHendra Kurniawan\nMuhammad Rahul\nAditya Dimas Anggi Putra\nPutri Handayani\nAnis Ruswati\nMilda\nYenni Permata Sari\nGinawati Widya Anggryani\nFaula Najmi Soraya\nHaura Nabila\nApriana Kurnia Ningsih\nFaridah Humairo\nFahrul Ruzi Setiawan\nMuhammad Rizky\nMuhammad Noor Faizi\nAhmad Anshari\nMuhammad Wirayuda Suryanata\nMuhammad William Syabani\nLuciandro Gideon Situmorang\nMuhammad Hadi Akbar\nMuhammad Putra\nRibka Sitanggang\nSiti Nabila\nNovita Adya Chiara\nNurul Khairin Fadiya\nSiti Maimunah\nNoor Fitri\nShinta Ardini Prasasti Ungawaru\nTazkia Aulia\nDewi Nuraini\nSiti Hamida\nDiva Khofiffah Zanuar Pramasti\nDiyah Yasmina Utami\nRatna Dila",
    },
    {
      class: "b",
      name: "Muhammad Nordin\nTaufin Rahmawan\nAisya Rahmadina\nAriska Rahmadani\nNor Aziziah\nLolla Apriliana Offianita\nSyarifah Soraya Alhadi\nMuhammad Jazuli Rahman\nDyllan Raditya Dienova\nMuhammad Rizcky Ramadhan\nPatrisius Ronald Dalanggali\nHakiki Noor\nFransiska Triokta Laundari\nAnita Grace Napitupulu\nNuriani\nCindy Ramadhita Putri\nAgustina\nSt. Rahmah\nKessia Kristina Hutabarat\nDina Amalina\nSiti Ramsiah\nAhmad Sawban Riski\nAjam\nMuhammad Audy Renata Putra\nMuhammad Fadhil\nKhansa Witha Prayuda\nMuhammad Rizky Anugrah Fadhilah\nEzza Akhnan Maulana Putra\nRizky Ircham Muzaki\nMuhammad Baldhi Drajat\nNeli Rahmawati\nAstri Dea Ranindiaz Vinanda\nFauzatul Helmiyah\nRirin Isnaeni Nur\nSava'Ah Intan Liani\nDine Bunata\nMutiara Khansa Nabila\nAliya Putri\nIsmawati\nAlifia Shindy Pramesti\nSyifa Sophia Nurmasitha\nRezky Amalia\nSiti Noor Ariani\nPuspa Ananda Putri\nRisnawati",
    },
    {
      class: "c",
      name: "Muhammad Huda Inayaturrahman\nMuhammad Aulia Rahman\nIrmayani\nSa'Adiah Dwitiya Morty\nAnggi Komalasari\nLatifah\nSiti Umriyyah\nMuhamad Agil Fahri\nMohammad Socheh Ridwan\nI Kadek Ukir Dwi Adnyana\nAhmad Jainudin\nAlkhairul Huda\nDewi\nMyra Pionera Prhameswari Priatna\nKartika Sindi Mahdalena\nRizky Amalia\nFarah Andina\nAnisa Findia Falahudin\nWidya\nRabiatul Ru'Yah\nAisyah Rizki Nuralvani\nAhmad Faqih\nHusni Norin\nM. Zakiyuddin Munziri\nMuhammad Aqilla Shiddik\nAhmad Riduan\nMuhammad Bayu Adithya Riedanto\nMuhammad Thoriq Islami\nAhmad Ardiansyah\nHelya Fadila\nMaya Isti\nSiti Nurhaliza Febriyanti\nAdistya Karamina Fasyah\nQolbiatul Fitria\nSiti Alya Hasana\nSiti Maryam\nTiti Khairunisa\nHilyatun Aulia\nAllisa Damayanti\nJumiati\nMaulidiya Sekarwangi\nNormala\nAhyati Kamilazzahra\nSakinah Mutmainnah",
    },
  ];

  const mockName = data.find((x) => x.class == id)?.name as string;

  const mockPosition =
    "Metode Penelitian Kuantitatif\nSosiologi Pendidikan\nSosiologi Perkoatan\nSosiologi Media\nGlobalisasi dan Isu Internasional\nSosiologi Industri\nSosiologi Gender\nSosiologi Keluarga\nSosiologi Pedesaan\nTipologi Sosial\nSosiologi Korupsi\nSosiologi Lingkungan\nSosiologi Politik\nSosiologi Kesehatan";

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
