import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./slice/configSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

// Persist konfiguratsiyasi
const persistConfig = {
  key: "root", // Kalit (qaysi nom bilan saqlanishi)
  storage: AsyncStorage, // React Native uchun AsyncStorage, web uchun localStorage yoki sessionStorage
};

const persistedReducer = persistReducer(persistConfig, configReducer);

// console.log(await loadConfig());
export const store = configureStore({
  reducer: {
    configSlice: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Redux persist uchun kerak
    }),
  // preloadedState:
  // preloadedState: await loadConfig(),
  // preloadedState: await loadConfig(),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
