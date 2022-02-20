export type Position = {
  name: string;
  amount: number;
  member: string[];
};

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

export function GroupByNGroupGeneral(
  numberOfGroups: number,
  listName: string[],
) {
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

export function GroupByNGroupJabatan(
  listPosition: Position[],
  listName: string[],
) {
  let indexListName = 0;

  for (let i = 0; i < listPosition.length; i++) {
    const bucket = [];

    for (let x = 0; x < listPosition[i].amount; x++) {
      bucket.push(listName[indexListName]);
      indexListName++;
    }

    listPosition[i].member = bucket;
  }

  return listPosition;
}

export function FilterTrueDayOnly(listDay: { name: string; value: boolean }[]) {
  return listDay.filter(function (day) {
    return day.value;
  });
}

export function FilterArrayJSONNotNull(listPosition: Position[]) {
  return listPosition.filter(function (position) {
    return position.name;
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
