import { useAppDispatch } from "@/hooks/useAppDispatch";
import { store } from "@/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import "../config/i18n"; // i18n konfiguratsiyasini yuklash

// Context yaratish
const MyContext = createContext(null);
export const ConfigProvider = ({ children }) => {
  // Context Provider komponenti
  const dispatch = useAppDispatch();

  // store.subscribe(() => {
  //   AsyncStorage.setItem(
  //     "config",
  //     JSON.stringify(store.getState().configSlice)
  //   );
  // });
  // store.subscribe(() => {
  //   AsyncStorage.setItem("reduxState", JSON.stringify(store.getState()));
  // });
  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
};
