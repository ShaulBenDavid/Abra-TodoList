import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Redux/todoListSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

  
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: {
        todos: persistedReducer,
  },
});

export const persistor = persistStore(store);
