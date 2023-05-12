import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfo",
  default: {},
});

export const courseListState = atom({
  key: "courseList",
  default: [],
});

export const waitingRegisterState = atom({
  key: "waitingRegister",
  default: [],
});

export const userPrevRegisterState = atom({
  key: "userPrevRegister",
  default: [],
});

export const courseListFilterState = atom({
  key: "courseListFilter",
  default: [],
});

export const registerFilterState = atom({
  key: "registerFilter",
  default: [],
});

export const prevRegisterFilterState = atom({
  key: "prevRegisterFilter",
  default: [],
});
