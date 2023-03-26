import { createSlice, current } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: {token: null, user: null},

  reducers: {
    setToken(state, action) {
      console.log(current(state));
      console.log(action.payload);
      return { ...action.payload };
    }
  },
});

export const { setToken, logout } = sessionSlice.actions;
export default sessionSlice.reducer;
