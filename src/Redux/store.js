import { configureStore } from '@reduxjs/toolkit'
import birthdaysListSlice from './birthdaysListSlice'
import selectedBirthdaySlice from './selectedBirthdaySlice'


export default configureStore({
  reducer: {
    birthdays: birthdaysListSlice,
    selectedBirthday: selectedBirthdaySlice
  },
})