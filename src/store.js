import { create } from "zustand";

const store = create((set) => ({
  currentStep: 0,
  userInputData: [],
  routeMap: {
    0 : '/book-chef',
    1 : '/occasion',
    2 : '/location',
    3 : '/date',
    4 : '/service',
    5 : '/people',
    6 : '/budget',
    7 : '/restriction',
    8 : '/summary'
  },
  addUserInputData: (data) =>
    set((state) => ({ userInputData: [...state.userInputData, data] })),
  incrementCurrentStep: () => set((state) => state.currentStep+1),
  decrementCurrentStep: () => set((state)=> state.currentStep>0 && state.currentStep-1)
}));

export const useStore = store;