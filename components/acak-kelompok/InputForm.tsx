import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { IoRemoveCircleOutline } from "react-icons/io5";

import NameForm from "~/components/NameForm";
import ShuffleButton from "~/components/ShuffleButton";

interface InputInterface {
  handleRandomize: (listName: string[]) => Promise<void>;

  setListName: Dispatch<SetStateAction<string[]>>;

  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
}

export default function NameInputForm(props: InputInterface) {
  const [nameLength, setNameLength] = useState<number>(0);
  const [tempListName, setTempListName] = useState<string[]>([]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleRandomize(tempListName);
        }}
      >
        <NameForm
          setTempListName={setTempListName}
          setNameLength={setNameLength}
          nameLength={nameLength}
        />

        {/* checkbox */}
        <div className="mt-5">
          <div>
            <label htmlFor="start-number" className="text-xl font-medium">
              Mau bikin berapa kelompok?
            </label>
            <input
              id="start-number"
              type="number"
              className="input-primary mt-3 block"
              onChange={(e) => props.handleInputChange(e)}
            />
          </div>
        </div>
        <div className="mt-4 space-x-10">
          {/* shuffle button */}
          <ShuffleButton />

          {/* reset button */}
          <button
            type="reset"
            onClick={() => {
              props.setListName([]);
              props.handleReset();

              setNameLength(0);
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
