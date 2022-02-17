import { Dispatch, SetStateAction } from "react";
import { IoRemoveCircleOutline } from "react-icons/io5";

import ShuffleButton from "~/components/ShuffleButton";

type NumberProps = { start: number; end: number; amount: number };

interface InputInterface {
  handleRandomize: () => Promise<void>;

  number: NumberProps;
  setNumber: Dispatch<SetStateAction<NumberProps>>;

  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    part: "start" | "end" | "amount",
  ) => void;

  handleReset: () => void;
}

export default function NameInputFormExample(props: InputInterface) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleRandomize();
        }}
      >
        <div>
          <label htmlFor="start-number" className="text-xl font-medium">
            Acaknya dari angka berapa?
          </label>
          <input
            id="start-number"
            type="number"
            defaultValue={props.number.start}
            disabled={true}
            className="input-primary disable mt-3 block"
            onChange={(e) => props.handleInputChange(e, "start")}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="end-number" className="text-xl font-medium">
            Sampai angka berapa?
          </label>
          <input
            id="end-number"
            type="number"
            defaultValue={props.number.end}
            disabled={true}
            className="input-primary disable mt-3 block"
            onChange={(e) => props.handleInputChange(e, "end")}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="amount-number" className="text-xl font-medium">
            Mau ngambil berapa angka?
          </label>
          <input
            id="amount-number"
            type="number"
            defaultValue={props.number.amount}
            disabled={true}
            className="input-primary disable mt-3 block"
            onChange={(e) => props.handleInputChange(e, "amount")}
          />
        </div>

        <div className="mt-4 space-x-10">
          {/* shuffle button */}
          <ShuffleButton />

          {/* reset button */}
          <button
            // onClick={() => props.handleReset()}
            type="reset"
            disabled={true}
            className="button-clear disable"
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
