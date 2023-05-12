import { atom } from "recoil";

export const currentErrorState = atom({
  key: "currentError",
  defualt: ["", false],
});

export const registerSwitchState = atom({
  key: "registerSwitchState",
  default: true,
});

export const serverCheckState = atom({
  key: "serverCheck",
  default: "",
});
