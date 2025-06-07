import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Don',
  secondName: 'Frye',
  job: 'Software Developer',
  summary:
    'Highly motivated and detail-oriented software engineer with experience in developing scalable and maintainable software solutions. Proficient in a range of programming languages and comfortable working in a fast-paced environment.',
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setSecondName: (state, action) => {
      state.secondName = action.payload;
    },
    setJob: (state, action) => {
      state.job = action.payload;
    },
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
  },
});

export const { setFirstName, setSecondName, setJob, setSummary } =
  resumeSlice.actions;
export default resumeSlice.reducer;
