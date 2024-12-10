import { create } from "zustand";

export const useAuth = create((set) => ({
  email: "",
  id: null,
  setId: (id) => set({ id }),
  setEmail: (email) => set({ email }),
}));
