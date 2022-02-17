interface InputInterface {
  results: number[];
  number: { start: number; end: number; amount: number };
}

export default function RandomResult(props: InputInterface) {
  return (
    <>
      <h3 className="text-2xl font-medium">Hasil Pengacakan</h3>
      <div>
        {props.results.map((x, i) => {
          return (
            <div
              key={i}
              className="name-highlight mt-4 items-center justify-between space-y-2 md:mt-3 md:flex md:space-y-0 md:space-x-5"
            >
              <div className="w-full justify-between space-y-1 md:space-y-2">
                <div className="text-lg font-medium md:w-5/12">
                  {props.results[i] || "-"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
