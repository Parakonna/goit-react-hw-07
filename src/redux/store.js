import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlise";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filtersSlice";

const usersConfig = {
  key: "usersKey",
  storage,
  //   whitelist: ["users"], // blacklist: ["showProfilesList"]
};

export const store = configureStore({
    reducer: {
        contactsData: persistReducer(usersConfig, contactsReducer),
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);