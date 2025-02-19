import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store"; // `store.ts` dan import qilish

export const useAppDispatch: () => AppDispatch = useDispatch;
