"use client";

import { createContext, ReactNode, useContext, useReducer } from "react";

interface CheckboxContextType {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}

type StateType = {
  selectedCheckboxs: number[];
};

type ActionType = { type: "TOGGLE"; payload: number };

const CheckboxContext = createContext<CheckboxContextType | undefined>(
  undefined
);

const checkboxReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        selectedCheckboxs: state.selectedCheckboxs.includes(action.payload)
          ? state.selectedCheckboxs.filter((item) => item !== action.payload)
          : [...state.selectedCheckboxs, action.payload].sort((a, b) => {
              return a - b;
            }),
      };
    default:
      return state;
  }
};

export const CheckboxProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(checkboxReducer, {
    selectedCheckboxs: [],
  });
  return (
    <CheckboxContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckbox = () => {
  const context = useContext(CheckboxContext);

  if (context === undefined) {
    throw new Error("useCheckbox must be used within a CheckboxProvider");
  }

  return context;
};
