import { api } from "./index";

export const genreApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGenre: build.query({
      query: () => ({
        url: `/genre/movie/list`,
      }),
      providesTags: ["Genre"],
    }),
  }),
});

export const { useGetGenreQuery } = genreApi;
