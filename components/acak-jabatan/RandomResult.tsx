import { Position } from "~/components/Helper";

interface InputInterface {
  groups: Position[];
}

export default function RandomResult(props: InputInterface) {
  return (
    <>
      <h3 className="text-2xl font-medium">Hasil Pengacakan</h3>

      <div>
        {props.groups.map(({ name, member }, i) => {
          return (
            <div
              key={i}
              className="name-highlight mt-4 items-start justify-between space-y-2 md:mt-3 md:flex md:space-y-0 md:space-x-5"
            >
              <div className="w-full justify-between space-y-1 md:space-y-2">
                <div className="text-xl font-medium ">{name}</div>
                {member.length > 1 && (
                  <p className="opacity-60">Anggota: {member.length} orang</p>
                )}
                <ol className="list-disc space-y-1">
                  {member.map((people, id) => {
                    return (
                      <li className="ml-5" key={id}>
                        {people}
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
