import { create } from 'zustand';
import dummyData from '@/dummy-refund-methods.json';

const useRegistrationOptions = create((set) => ({
  data: dummyData,
  deleteData: (id) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id
          ? {
              ...item,
              registrationInformation: {},
              isRegister: false,
              isChoose: false,
            }
          : item,
      ),
    })),
  setData: (id, registrationInformation) =>
    set((state) => {
      const isAnySelected = state.data.some((item) => item.isChoose);

      return {
        data: state.data.map((item) =>
          item.id === id
            ? {
                ...item,
                registrationInformation: {
                  ...item.registrationInformation,
                  ...registrationInformation,
                },
                isRegister: true,
                isChoose: isAnySelected ? item.isChoose : true,
              }
            : item,
        ),
      };
    }),
}));

export { useRegistrationOptions };
