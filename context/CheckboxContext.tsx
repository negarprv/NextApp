import { createContext, ReactNode, useContext, useReducer } from "react";

interface CheckboxContextType {
  selectedCheckbox: number[];
  dispatch: React.Dispatch<ActionType>;
}

type ActionType =
  | { type: "ADD"; payload: number }
  | { type: "REMOVE"; payload: number };

const CheckboxContext = createContext<CheckboxContextType | undefined>(
  undefined
);

const checkboxReducer = (state: number[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

export const CheckboxProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCheckbox, dispatch] = useReducer(checkboxReducer, []);
  return (
    <CheckboxContext.Provider value={{ selectedCheckbox, dispatch }}>
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
