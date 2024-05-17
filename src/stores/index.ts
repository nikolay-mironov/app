import { configureStore } from "@reduxjs/toolkit";
import aboutMeReducer from "./meSlice";



const store = configureStore({
  reducer: {
    data: aboutMeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
