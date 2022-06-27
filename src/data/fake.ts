import * as _ from "lodash";

import { IVisitorEvent } from "../proxyclick/visitors";

const safeEvents: IVisitorEvent[] = [
  // exists
  {
    firstname: "Jon",
    lastname: "Snow",
    companyName: "The Wall",
    email: "jon@snow.com",
  },
  {
    firstname: "Daenerys",
    lastname: "Targaryen",
    companyName: "",
    email: "dtargaryen@proxyclick.com",
  },
  {
    firstname: "Tyrion",
    lastname: "Lannister",
    companyName: "",
    email: "tyrion@lannister.com",
  },
  {
    firstname: "Jaime",
    lastname: "Lannister",
    companyName: "",
    email: "jaime@lannister.com",
  },
];
const canFailEvent = [
  ...safeEvents,
  {
    firstname: "Bruce",
    lastname: "Wayne",
    companyName: "Wayne Corp",
    email: "batman@hero.com",
  },
];

export const getRandomEvent = (canFail: boolean = false): IVisitorEvent => {
  return canFail ? _.sample(canFailEvent) : _.sample(safeEvents);
};
