import { create } from 'zustand';

interface useQrScanProps {
  value: string;
  onCapture: (newValue: string) => void;
}

const useQrScan = create<useQrScanProps>((set) => ({
  value: '',
  onCapture: (newValue: string) => set({ value: newValue }),
}));

export { useQrScan };
