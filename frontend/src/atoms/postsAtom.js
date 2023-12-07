import { atom } from "recoil";

const postsAtom = atom({
  key: "postsAtom",
  default: JSON.parse(localStorage.getItem("user-threads")),
});

export default postsAtom;
