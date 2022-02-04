import { createSlice } from '@reduxjs/toolkit'

export const birthdaysListSlice = createSlice({
  name: 'birthdays',
  initialState: {
    value: [],
  },
  reducers: {
    updateBirthdaysList: (state, action) => {
      state.value = action.payload
    },
    addBirthday: (state, action) => {
      state.value.unshift(action.payload);
      localStorage.setItem("birthdaysList", JSON.stringify(state.value));
    },
    removeBirthdayById: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((bday) => bday.id !== id);
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateBirthdaysList, addBirthday, removeBirthdayById } = birthdaysListSlice.actions

export default birthdaysListSlice.reducer