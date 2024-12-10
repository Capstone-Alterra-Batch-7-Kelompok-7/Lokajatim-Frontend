import { create } from "zustand";

export const useUserStore = create((set) => ({
  email: null,
  name: null,
  id: null,
  role: null,
  address: null,
  setId: (id) => set({ id }),
  setEmail: (email) => set({ email }),
  setRole: (role) => set({ role }),
  setAddress: (address) => set({ address }),
  setName: (address) => set({ address }),
}));
