import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { IoAdd, IoRemoveCircleOutline, IoTrashOutline } from "react-icons/io5";

import NameForm from "../NameForm";
import ShuffleButton from "../ShuffleButton";

interface InputInterface {
  // randomFunction: (event: SyntheticEvent<Element, Event>) => Promise<void>;
  randomFunction: (listName: string[]) => Promise<void>;

  setListName: Dispatch<SetStateAction<string[]>>;
  setListPosition: Dispatch<SetStateAction<string[]>>;

  listPosition: string[];

  handleRemoveClick: (index: number) => void;
  handleAddClick: () => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
}

export default function NameInputForm(props: InputInterface) {
  const [nameLength, setNameLength] = useState<number>(0);
  const [tempListName, setTempListName] = useState<string[]>([]);

  const handleEnter = async (event: any) => {
    if (event.key.toLowerCase() === "enter") {
      event.preventDefault();

      const form = event.target.form;
      const index = [...form].indexOf(event.target);

      //  check is in the last of column, if yes, add new column
      if (form.length - index == 5) {
        await props.handleAddClick();
      }

      // if no, just to move next column
      form.elements[index + 2].focus();
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.randomFunction(tempListName);
        }}
      >
        <NameForm
          setTempListName={setTempListName}
          setNameLength={setNameLength}
          nameLength={nameLength}
        />

        {/* table */}
        <div className="mt-5">
          <label htmlFor="tablejabatan" className="text-xl font-medium">
            Jabatan
          </label>
          <table id="tablejabatan" className="main-table mt-3">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="head-table py-3 pl-3">
                  No
                </th>
                <th className="head-table px-3 py-3">Jabatan</th>
                <th className="head-table"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {props.listPosition.map((position, id) => {
                return (
                  <tr key={id}>
                    <td className="py-2 pl-3 text-sm">{id + 1}</td>
                    <td className="px-3 py-2 text-sm">
                      <input
                        placeholder="Nama jabatan yang mau diacak"
                        value={props.listPosition[id]}
                        onKeyDown={(e) => {
                          handleEnter(e);
                        }}
                        onChange={async (e) => {
                          e.preventDefault();
                          props.handleInputChange(e, id);
                        }}
                        type="text"
                        className="input-secondary w-full text-sm"
                      ></input>
                    </td>
                    <td className="px-3 py-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          props.handleRemoveClick(id);
                        }}
                      >
                        <IoTrashOutline className="h-5 w-5 text-rose-700/80 " />
                      </button>
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td className="py-2 pl-3 text-sm">
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      props.handleAddClick();
                    }}
                    className="flex items-center justify-center"
                  >
                    <IoAdd className="h-5 w-5" />
                  </button>
                </td>
                <td className="px-3 py-2 text-sm"></td>
                <td className="px-3 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 space-x-10">
          {/* shuffle button */}
          <ShuffleButton />

          {/* reset button */}
          <button
            type="reset"
            onClick={() => {
              props.setListName([]);
              props.setListPosition([""]);
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
