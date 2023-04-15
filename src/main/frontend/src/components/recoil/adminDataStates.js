import { atom } from "recoil";

export const currentAdminPageState = atom({
  key: "currentAdminPageState",
  default: "",
});

export const userDataState = atom({
  key: "userDataState",
  default: [],
});

export const subjectDataState = atom({
  key: "subjectDataState",
  default: [],
});
