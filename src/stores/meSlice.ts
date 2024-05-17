import { createSlice } from "@reduxjs/toolkit";

import { aboutMeInfo } from "../mocks/aboutMe";
import { IAboutMe } from "../models";

type aboutMeState = {
  aboutMe: IAboutMe;
};
const initialState: aboutMeState = {
  aboutMe: aboutMeInfo,
};
const aboutMeSlice = createSlice({
  name: "aboutMeSlice",
  initialState,
  reducers: {},
});

// export const {} = aboutMeSlice.actions;
export default aboutMeSlice.reducer;
