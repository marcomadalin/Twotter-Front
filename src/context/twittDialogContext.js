import { createContext, useReducer } from "react";

export const TwittDialogContext = createContext();

export function twittDialogReducer(state, action) {
  switch (action.type) {
    case "OPEN":
      return { dialog: true, key: state.key };
    case "CLOSE":
      return { dialog: false, key: state.key };
    case "UPDATE":
      return { dialog: state.dialog, key: state.key + 1 };
    default:
      return state;
  }
}

export function TwittDialogProvider({ children }) {
  const [state, dispatch] = useReducer(twittDialogReducer, {
    dialog: false,
    key: 0,
  });

  return (
    <TwittDialogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TwittDialogContext.Provider>
  );
}
