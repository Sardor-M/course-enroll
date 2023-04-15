import { atom } from "recoil";

export const currentPageState = atom({
  key: "currentPaeState",
  defualt: "",
});

export const currentErrorState = atom({
  key: "currentErrorState",
  default: false,
});

export const registerSwitchState = atom({
  key: "registerSwitchState",
  default: true,
});
