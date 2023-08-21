import { useContext } from "react";
import { TwittDialogContext } from "../context/twittDialogContext";

export function useTwittDialogContext() {
  const context = useContext(TwittDialogContext);

  if (!context) throw Error("Context out of bounds");
  return context;
}
