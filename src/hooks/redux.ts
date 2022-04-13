import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

/**
 * useDispatch with type
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * useSelect with type
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
