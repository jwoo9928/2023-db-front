import { atom } from "recoil";
import { SearchParams } from "../types/store";

export const LoginState = atom<boolean>({
  key: "login state",
  default: false,
});

export const SearchState = atom<SearchParams | undefined>({
  key: "search state",
  default: undefined,
});
