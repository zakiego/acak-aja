import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { useState } from "react";
import { IoRemoveCircleOutline, IoShuffle } from "react-icons/io5";

import { SplitString } from "../Helper";

interface InputInterface {
  randomFunction: (event: SyntheticEvent<Element, Event>) => Promise<void>;
  setListName: Dispatch<SetStateAction<string[]>>;
}

export default function NameInputForm(props: InputInterface) {
  const [listLength, setListLength] = useState<number>(0);
  return (
    <>
      <form onSubmit={props.randomFunction}>
        <label htmlFor="name" className="text-xl font-medium">
          Nama
        </label>
        <textarea
          id="name"
          name="name"
          rows={10}
          className="input-primary mt-3"
          placeholder="Masukkan daftar nama di sini"
          onChange={async (e) =>
            setListLength(SplitString(e.target.value).length)
          }
        ></textarea>
        <div className="mt-3">Kamu memasukkan {listLength} nama</div>
        <div className="mt-4 space-x-10">
          <button type="submit" className="button-submit mt-3 ">
            <div className="flex items-center space-x-1">
              <div>Acak</div>
              <IoShuffle className="h-6 w-6" />
            </div>
          </button>
          <button
            type="reset"
            onClick={() => {
              props.setListName([]);
              setListLength(0);
            }}
            className="button-clear"
          >
            <div className="flex items-center space-x-1">
              <div>Reset</div>
              <IoRemoveCircleOutline className="h-6 w-6" />
            </div>
          </button>
        </div>
      </form>
    </>
  );
}
