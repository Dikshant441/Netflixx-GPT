import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieDisplay: null,
    gptMovieNameDispaly : null,
  },
  reducers: {
    toggleGptSearchVier: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const  { movieNames, movieResults} = action.payload;
      state.gptMovieNameDispaly = movieNames;
      state.gptMovieDisplay = movieResults;
    },
  },
});

export const { toggleGptSearchVier, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
