import { createSlice } from '@reduxjs/toolkit'

export const selectedBirthdaySlice = createSlice({
  name: 'selectedBirthday',
  initialState: {
    value: 0,
  },
  reducers: {
    setSelectedBirthday: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedBirthday } = selectedBirthdaySlice.actions

export default selectedBirthdaySlice.reducer