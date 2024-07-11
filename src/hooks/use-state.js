import { create } from 'zustand';

export const useZustandState = create((set) => ({
  value: '',
  setValue: (newValue) => set({ value: newValue }),
}));
