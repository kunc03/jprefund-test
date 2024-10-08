import { create } from 'zustand';

const useFormRef = create((set, get) => ({
  formRef: null,
  setFormRef: (ref) => set({ formRef: ref }),
  submitForm: () => {
    const { formRef } = get();
    if (formRef) {
      formRef.dispatchEvent(
        new Event('submit', { bubbles: true, cancelable: true }),
      );
    }
  },
}));

export { useFormRef };
