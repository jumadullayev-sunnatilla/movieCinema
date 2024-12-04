import { api } from "./index";

export const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query({
      query: ({ type, params }) => ({
        url: `/movie/${type}`,
        params,
      }),
      providesTags: ["Movie"],
    }),
  }),
});

export const { useGetMovieQuery } = movieApi;
