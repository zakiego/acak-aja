import { Dispatch, SetStateAction } from "react";

import { SplitString } from "./Helper";

interface InputProps {
  setTempListName: Dispatch<SetStateAction<string[]>>;
  setNameLength: Dispatch<SetStateAction<number>>;
  nameLength: number;
}

export default function NameForm(props: InputProps) {
  return (
    <div>
      {/* form name */}
      <label htmlFor="name" className="text-xl font-medium">
        Nama
      </label>
      <textarea
        id="name"
        name="name"
        rows={10}
        className="input-primary mt-3"
        placeholder="Masukkan daftar nama di sini, pisahkan dengan enter"
        onChange={async (e) => {
          const list = SplitString(e.target.value);
          props.setTempListName(list);
          props.setNameLength(list.length);
        }}
      ></textarea>
      <div className="mt-3">Kamu memasukkan {props.nameLength} nama</div>
    </div>
  );
}
