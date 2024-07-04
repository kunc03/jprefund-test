import { create } from 'zustand';

const useAuth = create((set) => ({
  auth: {
    status: 'guest',
    user: {},
  }, // klo sudah login ganti jadi authenticated
  onAuth: (newValue) => set({ value: newValue }),
}));

export { useAuth };
