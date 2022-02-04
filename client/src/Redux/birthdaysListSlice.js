import { createSlice } from '@reduxjs/toolkit'

export const birthdaysListSlice = createSlice({
  name: 'birthdays',
  initialState: {
    value: [
      {
        id: 'oijkefsiokfes',
        name: 'Oz Hershco',
        dob: 'January 16 1991',
        img: 'https://scontent.ftlv15-1.fna.fbcdn.net/v/t39.30808-6/272175406_10216686814001326_3942978407150892929_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mdxDMc-f7qEAX8mRU3k&_nc_ht=scontent.ftlv15-1.fna&oh=00_AT_wVHAaKWDfH_W2EBq-d-HtGQFGngiaBhHSwlGVnfosiA&oe=61FFE699'
      },
      {
        id: 'oijrertyhk6tfgkefsiokfes',
        name: 'Ilay Zemach',
        dob: 'February 14 1991',
        img: 'https://scontent.ftlv15-1.fna.fbcdn.net/v/t1.6435-9/147542212_10158272168906032_7331568512036177583_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=AXhQcz-qpDAAX8N8Vst&tn=CpZWFr9r-MNLQEyk&_nc_ht=scontent.ftlv15-1.fna&oh=00_AT-N2KcqUzYUZAkDz_QAOl26QQo06M-YC1d4F0JFWCiKhQ&oe=621FD45C'
      },
      {
        id: '98utihjnrkfduhjkn23',
        name: 'Fernanda Weizmann Becker',
        dob: 'October 7 1989',
        img: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/145832455_4188321034514775_6646261204331294047_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uOFY4R8DGg4AX8W5R08&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT_9mZCUE_L7TyJ46uCV4QresWfPsV4tZhvoH5YzH2dA-Q&oe=62225CBE'
      }
    ],
  },
  reducers: {
    updateBirthdaysList: (state, action) => {
      state.value = action.payload
    },
    addBirthday: (state, action) => {
      state.value.unshift(action.payload);
    },
    removeBirthdayById: (state,action)=>{
      const id = action.payload;
      state.value = state.value.filter((bday) => bday.id !== id);
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateBirthdaysList, addBirthday, removeBirthdayById } = birthdaysListSlice.actions

export default birthdaysListSlice.reducer