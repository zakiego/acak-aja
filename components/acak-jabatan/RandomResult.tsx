interface InputInterface {
  listPosition: string[];
  listName: string[];
}

export default function RandomResult(props: InputInterface) {
  return (
    <>
      <h3 className="text-2xl font-medium">Hasil Pengacakan</h3>
      <div>
        {props.listPosition.map((x, i) => {
          if (props.listPosition[i] == "") {
            return "";
          }

          return (
            <div
              key={i}
              className="name-highlight mt-4 items-center justify-between space-y-2 md:mt-3 md:flex md:space-y-0 md:space-x-5"
            >
              <div className=" w-full justify-between space-y-1 md:flex md:space-y-0">
                <div className="text-lg font-medium md:w-5/12 md:text-base">
                  {props.listPosition[i] || "-"}
                </div>
                <div className="md:w-6/12">{props.listName[i] || "-"}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
