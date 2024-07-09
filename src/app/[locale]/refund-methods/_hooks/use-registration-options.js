import { create } from 'zustand';
import dummyData from '@/dummy-refund-methods.json';

const useRegistrationOptions = create((set) => ({
  data: dummyData,
  setData: (data) => set({ data }),
}));

export { useRegistrationOptions };
