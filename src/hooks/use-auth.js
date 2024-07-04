import { create } from 'zustand';

const useAuth = create((set) => ({
  auth: {
    status: '',
    user: {},
  }, // klo sudah login ganti jadi authenticated
  onAuth: (newAuth) => set({ auth: newAuth }),
}));

export { useAuth };
