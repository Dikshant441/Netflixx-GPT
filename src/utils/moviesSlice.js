import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingmovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state , action) => {
            state.nowPlayingmovies = action.payload;
        },
    },
});

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;