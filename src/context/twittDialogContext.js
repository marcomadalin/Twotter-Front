import { createContext, useReducer } from "react";

export const TwittDialogContext = createContext();

export function twittDialogReducer(state, action) {
  switch (action.type) {
    case "OPEN":
      return { dialog: true, response: state.response, key: state.key };
    case "CLOSE":
      return { dialog: false, response: null, key: state.key };
    case "OPEN_RESPONSE":
      return {
        dialog: true,
        response: action.payload.response,
        key: state.key,
      };
    case "UPDATE":
      return {
        dialog: state.dialog,
        response: null,
        key: state.key + 1,
      };
    default:
      return state;
  }
}

export function TwittDialogProvider({ children }) {
  const [state, dispatch] = useReducer(twittDialogReducer, {
    dialog: false,
    response: null,
    key: 0,
  });

  return (
    <TwittDialogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TwittDialogContext.Provider>
  );
}
