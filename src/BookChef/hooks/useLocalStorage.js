// src/useStore.js
import { create } from "zustand";

export const useStore = create((set) => ({
  userInputData: [],

  addUserInputData: (newData) =>
    set((state) => {
      const exists = state.userInputData.find((item) => item.id === newData.id);
      if (exists) {
        // Update if item already exists
        return {
          userInputData: state.userInputData.map((item) =>
            item.id === newData.id ? newData : item
          ),
        };
      } else {
        // Otherwise add new one
        return {
          userInputData: [...state.userInputData, newData],
        };
      }
    }),

  clearUserInputData: () => set({ userInputData: [] }),
}));
