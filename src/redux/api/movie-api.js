import { api } from "./index";

export const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query({
      query: () => ({
        url: `/movie/popular`,
      }),
      providesTags: ["Movie"],
    }),
  }),
});

export const { useGetMovieQuery } = movieApi;
