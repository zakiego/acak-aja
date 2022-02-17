import { Dispatch, SetStateAction } from "react";
import { IoRemoveCircleOutline } from "react-icons/io5";

import ShuffleButton from "~/components/ShuffleButton";

interface InputInterface {
  handleRandomize: () => Promise<void>;

  setNumber: Dispatch<
    SetStateAction<{
      start: number;
      end: number;
      amount: number;
    }>
  >;

  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    part: "start" | "end" | "amount",
  ) => void;

  handleReset: () => void;
}

export default function NameInputForm(props: InputInterface) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleRandomize();
        }}
      >
        <div className="flex justify-between gap-6">
          <div>
            <label htmlFor="start-number" className="text-xl font-medium">
              Dari
            </label>
            <input
              id="start-number"
              type="number"
              className="input-primary mt-3 block"
              placeholder="1"
              onChange={(e) => props.handleInputChange(e, "start")}
            />
          </div>

          <div>
            <label htmlFor="end-number" className="text-xl font-medium">
              Sampai
            </label>
            <input
              id="end-number"
              type="number"
              className="input-primary mt-3 block"
              placeholder="1000"
              onChange={(e) => props.handleInputChange(e, "end")}
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="amount-number" className="text-xl font-medium">
            Mau ngambil berapa angka?
          </label>
          <input
            id="amount-number"
            type="number"
            className="input-primary mt-3 block"
            placeholder="1"
            onChange={(e) => props.handleInputChange(e, "amount")}
          />
        </div>

        <div className="mt-4 space-x-10">
          {/* shuffle button */}
          <ShuffleButton />

          {/* reset button */}
          <button
            onClick={() => props.handleReset()}
            type="reset"
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
