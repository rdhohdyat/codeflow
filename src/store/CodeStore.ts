import { create } from "zustand";

type CodeStore = {
  code: string;
  setCode: (code: string) => void;
}

export const useCodeStore = create<CodeStore>((set) => ({
  code: localStorage.getItem("code") || "", // Retrieve from localStorage on initialization
  setCode: (code) => {
    localStorage.setItem("code", code); // Save to localStorage
    set({ code });
  },
}));
