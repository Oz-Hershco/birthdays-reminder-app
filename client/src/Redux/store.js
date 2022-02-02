import { configureStore } from '@reduxjs/toolkit'
import birthdaysListSlice from './birthdaysListSlice'


export default configureStore({
  reducer: {
    birthdays: birthdaysListSlice,
  },
})