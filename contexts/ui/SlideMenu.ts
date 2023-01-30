import { create } from 'zustand'

interface iUserContextUI {
  isOpen: boolean;
  setIsOpen: (currentState: boolean) => void;
}

export const useContextUI = create<iUserContextUI>((set) => ({
  isOpen: false,
  setIsOpen: (currentState: boolean) => {
    set((state) => ({
      ...state,
      isOpen: currentState,
    }));
  }
}));