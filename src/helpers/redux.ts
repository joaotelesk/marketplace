import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

/*  utilities */
import type { RootState, AppDispatch } from "../redux";

export const HelpDispatch: () => AppDispatch = useDispatch;
export const HelpSelector: TypedUseSelectorHook<RootState> = useSelector;
