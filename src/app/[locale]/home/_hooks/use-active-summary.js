import { create } from 'zustand';

const useActiveSummary = create((set) => ({
  selectedValue: '',
  selectedData: [],
  onSelected: (newValue) => set({ selectedValue: newValue }),
  onFetching: (newData) => set({ selectedData: newData }),
}));

export { useActiveSummary };
