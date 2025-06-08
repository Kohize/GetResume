import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Don',
  secondName: 'Frye',
  job: 'Software Developer',
  summary:
    'Highly motivated and detail-oriented software engineer with experience in developing scalable and maintainable software solutions. Proficient in a range of programming languages and comfortable working in a fast-paced environment.',
  education: [],
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
    addEducation: (state) => {
      state.education.push({
        id: nanoid(),
        institution: '',
        course: '',
        gpa: '',
        degree: 0,
      });
    },
    setEducation: (state, action) => {
      const { id, field, value } = action.payload;
      const educationItem = state.education.find((item) => item.id === id);
      if (educationItem) {
        educationItem[field] = value;
      }
    },
    removeEducation: (state, action) => {
      state.education = state.education.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setFirstName,
  setSecondName,
  setJob,
  setSummary,
  setEducation,
  addEducation,
  removeEducation,
} = resumeSlice.actions;
export default resumeSlice.reducer;
