import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},

  reducers: {
    storeUser(state, action) {
      console.log(current(state));
      console.log(action.payload);
      return { ...action.payload };
    },

    logout(state, action) {
      return {};
    },
  },
});

export const { storeUser, logout } = userSlice.actions;
export default userSlice.reducer;
