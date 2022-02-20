import { SetStateAction, useState } from "react";
import { IoAdd, IoRemoveCircleOutline, IoTrashOutline } from "react-icons/io5";

import { Position, SplitString } from "../Helper";
import { mockJabatan, mockName } from "../Mock";
import NameFormExample from "../NameFormExample";
import ShuffleButton from "../ShuffleButton";

interface InputInterface {
  randomFunction: (tempListName: string[]) => Promise<void>;

  setListPosition: (value: SetStateAction<Position[]>) => void;

  listPosition: Position[];

  handleRemoveClick: (index: number) => void;
  handleAddClick: () => void;
  handleInpuChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    propertyToChange: "name" | "amount",
  ) => void;
}

export default function NameInputFormExample(props: InputInterface) {
  const [nameLength, setNameLength] = useState<number>(
    SplitString(mockName).length,
  );
  const [tempListName, setTempListName] = useState<string[]>(
    SplitString(mockName),
  );
  const handleEnterJabatan = async (event: any) => {
    if (event.key.toLowerCase() === "enter") {
      event.preventDefault();

      const form = event.target.form;
      const index = [...form].indexOf(event.target);

      //  check is in the last of column, if yes, add new column
      if (form.length - index == 6) {
        await props.handleAddClick();
      }

      // if no, just to move next column
      form.elements[index + 3].focus();
    }
  };

  const handleEnterJumlah = async (event: any) => {
    if (event.key.toLowerCase() === "enter") {
      event.preventDefault();

      const form = event.target.form;
      const index = [...form].indexOf(event.target);

      //  check is in the last of column, if yes, add new column
      if (form.length - index == 5) {
        await props.handleAddClick();
      }

      // if no, just to move next column
      form.elements[index + 3].focus();
    }
  };

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          props.randomFunction(tempListName);
        }}
      >
        <NameFormExample />

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
                <th className="head-table px-3 py-3">Jumlah</th>
                <th className="head-table"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockJabatan.map(({ name, amount }, id) => {
                return (
                  <tr key={id}>
                    <td className="py-2 pl-3 text-sm">{id + 1}</td>
                    <td className="px-3 py-2 text-sm">
                      <input
                        disabled={true}
                        placeholder="Nama jabatan yang mau diacak"
                        value={name}
                        onKeyDown={(e) => {
                          handleEnterJabatan(e);
                        }}
                        onChange={async (e) => {
                          e.preventDefault();
                          props.handleInpuChange(e, id, "name");
                        }}
                        type="text"
                        className="disable input-secondary w-full text-sm"
                      ></input>
                    </td>
                    <td className="w-16 text-sm">
                      <input
                        disabled={true}
                        defaultValue={amount}
                        min={1}
                        type="number"
                        onKeyDown={(e) => {
                          handleEnterJumlah(e);
                        }}
                        onChange={async (e) => {
                          e.preventDefault();
                          props.handleInpuChange(e, id, "amount");
                        }}
                        className="disable input-secondary w-full text-sm"
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
                    disabled={true}
                    onClick={async (e) => {
                      e.preventDefault();
                      props.handleAddClick();
                    }}
                    className="disable flex items-center justify-center"
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
            disabled={true}
            onClick={() => {
              props.setListPosition([{ name: "", amount: 1, member: [] }]);
              setNameLength(0);
            }}
            className="disable button-clear"
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
