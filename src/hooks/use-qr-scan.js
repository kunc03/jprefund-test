import { create } from 'zustand';

const useQrScan = create((set) => ({
  selectedValue: '',
  value: '',
  onSelected: (newValue) => set({ selectedValue: newValue }),
  onCapture: (newValue) => set({ value: newValue }),
}));

export { useQrScan };
