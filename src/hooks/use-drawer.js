import { create } from 'zustand';

const useDrawer = create((set) => ({
  isOpen: null,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export { useDrawer };
