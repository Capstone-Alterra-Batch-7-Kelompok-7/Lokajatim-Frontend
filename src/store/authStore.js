import { create } from "zustand";

export const useAuth = create((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
}));
