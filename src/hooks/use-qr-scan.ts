import { create } from 'zustand';

interface useQrScanProps {
  selectedValue: string;
  value: string;
  onSelected: (newValue: string) => void;
  onCapture: (newValue: string) => void;
}

const useQrScan = create<useQrScanProps>((set) => ({
  selectedValue: '',
  value: '',
  onSelected: (newValue: string) => set({ selectedValue: newValue }),
  onCapture: (newValue: string) => set({ value: newValue }),
}));

export { useQrScan };
