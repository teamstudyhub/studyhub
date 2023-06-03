import {useDispatch} from "react-redux"
import { AppDispatch } from "./src/store";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;