import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";

interface InputInterface {
  listMatkul: { mk: string }[];
  listName: string[];

  handleRemoveClick: (index: number) => void;
  handleAddClick: () => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
}

export default function RandomResult(props: InputInterface) {
  return (
    <>
      <h3 className="text-2xl font-medium">Hasil Pengacakan</h3>
      <div>
        {props.listMatkul.map((x, i) => {
          return (
            <div
              key={i}
              className="mt-9 items-center justify-between space-y-2 md:mt-3 md:flex md:space-y-0 md:space-x-5"
            >
              <input
                type="text"
                name="mk"
                className="input-secondary  w-full md:w-64"
                value={x.mk}
                onChange={(e) => props.handleInputChange(e, i)}
                placeholder="Nama jabatan"
              ></input>

              <div className="name-highlight w-full">
                {props.listName[i] || "-"}
              </div>

              <button
                className="button-clear flex items-center justify-end space-x-1 border-2 text-xs "
                onClick={() => props.handleRemoveClick(i)}
              >
                <p>Hapus</p>
                <IoTrashOutline className="h-5 w-5" />
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={props.handleAddClick} className="button-neutral mt-8">
          <div className="flex items-center  space-x-1">
            <div>Tambah jabatan</div>
            <div>
              <IoAddCircleOutline className="h-5 w-5" />
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
