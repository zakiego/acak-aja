import { IoRemoveCircleOutline } from "react-icons/io5";

import NameFormExample from "~/components/NameFormExample";
import ShuffleButton from "~/components/ShuffleButton";

interface InputInterface {
  handleRandomize: () => Promise<void>;

  mockName: string;
}

export default function NameInputFormExmple(props: InputInterface) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleRandomize();
        }}
      >
        <NameFormExample />

        {/* checkbox */}
        <div className="mt-5">
          <div>
            <label htmlFor="start-number" className="text-xl font-medium">
              Mau bikin berapa kelompok?
            </label>
            <input
              id="start-number"
              type="number"
              disabled={true}
              value={3}
              className="input-primary disable mt-3 block"
            />
          </div>
        </div>
        <div className="mt-4 space-x-10">
          {/* shuffle button */}
          <ShuffleButton />

          {/* reset button */}
          <button disabled={true} type="reset" className="button-clear disable">
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
