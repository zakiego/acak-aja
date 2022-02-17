import { Dispatch, SetStateAction } from "react";
import { IoRemoveCircleOutline } from "react-icons/io5";

// import NameForm from "~/components/NameForm";
import ShuffleButton from "~/components/ShuffleButton";

import NameFormExample from "../NameFormExample";

type Hari = {
  name: string;
  value: boolean;
}[];

interface InputInterface {
  handleRandomize: () => Promise<void>;

  setListName: Dispatch<SetStateAction<string[]>>;

  listDay: {
    name: string;
    value: boolean;
  }[];

  setListDay: Dispatch<SetStateAction<Hari>>;
  setListDayResult: Dispatch<SetStateAction<Hari>>;

  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
}

export default function NameInputFormExample(props: InputInterface) {
  // const [nameLength, setNameLength] = useState<number>(0);

  // const [tempListName, setTempListName] = useState<string[]>([]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleRandomize();
        }}
      >
        <NameFormExample
        // setTempListName={setTempListName}
        // setNameLength={setNameLength}
        // nameLength={nameLength}
        />

        {/* checkbox */}
        <div className="mt-5">
          <h3 className="text-xl font-medium">Hari Apa Aja Piketnya?</h3>
          <div className="mt-3 space-y-3">
            {props.listDay.map((day, id) => {
              return (
                <div key={day.name} className="flex items-center">
                  <input
                    id={day.name}
                    defaultChecked={day.value}
                    type="checkbox"
                    className="checkbox"
                    onChange={(e) => props.handleInputChange(e, id)}
                  />
                  <label className="ml-2" htmlFor={day.name}>
                    {day.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4 space-x-10">
          {/* shuffle button */}
          <ShuffleButton />

          {/* reset button */}
          <button disabled={true} type="reset" className="disable button-clear">
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
