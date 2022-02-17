interface InputInterface {
  listName: string[];
  groups: string[][];
}

export default function RandomResult(props: InputInterface) {
  return (
    <>
      <h3 className="text-2xl font-medium">Hasil Pengacakan</h3>
      <div className="mt-7 md:grid md:grid-cols-2 md:gap-10">
        {props.groups.map((x, i) => {
          return (
            <div
              key={i}
              className="name-highlight mt-4 items-start justify-between space-y-2 md:mt-3 md:flex md:space-y-0 md:space-x-5"
            >
              <div className="w-full justify-between space-y-1 md:space-y-2">
                <div className="text-xl font-medium ">Kelompok {i + 1}</div>
                <p className="opacity-60">Anggota: {x.length} orang</p>
                <ol className="list-disc space-y-1">
                  {x.map((member) => {
                    return (
                      <li className="ml-5" key={member}>
                        {member}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
