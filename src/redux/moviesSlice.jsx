import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch all movies
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await fetch('/movies_data.json');
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
});

// Fetch a movie by ID
export const fetchMovieById = createAsyncThunk('movies/fetchMovieById', async (id) => {
  const response = await fetch('/movies_data.json');
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const movies = await response.json();
  const movie = movies.find(movie => movie.id === id);
  if (!movie) {
    throw new Error('Movie not found');
  }
  return movie;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    selectedMovie: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectMovies = (state) => state.movies.movies;
export const selectSelectedMovie = (state) => state.movies.selectedMovie;
export const selectLoading = (state) => state.movies.loading;
export const selectError = (state) => state.movies.error;

export default moviesSlice.reducer;