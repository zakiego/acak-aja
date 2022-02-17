export function ShuffleArray(array: string[] | number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function SplitString(list: string): string[] {
  return list.split(/\r?\n/).filter(String);
}

export function CreateEmptyArrayInArray(numberOfGroups: number) {
  const bucket = [];

  for (let i = 0; i < numberOfGroups; i++) {
    bucket.push([]);
  }

  return bucket;
}

export function GroupByNGroup(numberOfGroups: number, listName: string[]) {
  const bucket: string[][] = CreateEmptyArrayInArray(numberOfGroups);

  let loopGrup = 0;

  for (let i = 0; i < listName.length; i++) {
    bucket[loopGrup].push(listName[i]);

    if (loopGrup < numberOfGroups - 1) {
      loopGrup++;
      continue;
    }

    loopGrup = 0;
  }

  return bucket;
}

export function FilterTrueDayOnly(listDay: { name: string; value: boolean }[]) {
  return listDay.filter(function (day) {
    return day.value;
  });
}

export function Range(
  start: number,
  stop: number,
  step: number,
  amount: number,
) {
  const createArray = Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step,
  );

  return ShuffleArray(createArray).slice(0, amount);
}

export const DefaultDay = [
  {
    name: "Senin",
    value: true,
  },
  {
    name: "Selasa",
    value: true,
  },
  {
    name: "Rabu",
    value: true,
  },
  {
    name: "Kamis",
    value: true,
  },
  {
    name: "Jum'at",
    value: true,
  },
  {
    name: "Sabtu",
    value: false,
  },
  {
    name: "Minggu",
    value: false,
  },
];

export const ResetDefaultDay = [
  {
    name: "Senin",
    value: false,
  },
  {
    name: "Selasa",
    value: false,
  },
  {
    name: "Rabu",
    value: false,
  },
  {
    name: "Kamis",
    value: false,
  },
  {
    name: "Jum'at",
    value: false,
  },
  {
    name: "Sabtu",
    value: false,
  },
  {
    name: "Minggu",
    value: false,
  },
];
