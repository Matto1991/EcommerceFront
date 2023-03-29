import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: { token: null, user: null },

  reducers: {
    setToken(state, action) {
      return action.payload;
    },
  },
});

export const { setToken } = sessionSlice.actions;
export default sessionSlice.reducer;
