import { create } from "zustand";

const store = create((set) => ({
  currentStep: 0,
  userInputData: [],

  addUserInputData: (data) =>
    set((state) => ({ userInputData: [...state.userInputData, data] })),
  incrementCurrentStep: () => set((state) => state.currentStep+1),
  decrementCurrentStep: () => set((state)=> state.currentStep>0 && state.currentStep-1)
}));

export const useStore = store;