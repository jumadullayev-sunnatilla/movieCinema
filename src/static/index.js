import { useTranslation } from "react-i18next";

export const useMovieList = () => {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      title: t("movie_list.now_playing"),
      path: "now_playing",
    },
    {
      id: 2,
      title: t("movie_list.popular"),
      path: "popular",
    },
    {
      id: 3,
      title: t("movie_list.top_rated"),
      path: "top_rated",
    },
    {
      id: 4,
      title: t("movie_list.upcoming"),
      path: "upcoming",
    },
  ];
};

export const BILET__MONTH = [
  {
    day: "Pay",
    date: 23,
    id: 1,
  },
  {
    day: "Pay",
    id: 2,
    date: 23,
  },
  {
    day: "Pay",
    id: 3,
    date: 23,
  },
  {
    day: "Pay",
    date: 23,
    id: 4,
  },
  {
    day: "Pay",
    id: 5,
    date: 23,
  },
  {
    day: "Pay",
    date: 23,
    id: 1,
  },
  {
    day: "Pay",
    id: 2,
    date: 23,
  },
  {
    day: "Pay",
    id: 3,
    date: 23,
  },
  {
    day: "Pay",
    date: 23,
    id: 4,
  },
  {
    day: "Pay",
    id: 5,
    date: 23,
  },
];
export const CINEMATICA = [
  {
    id: 1,
    cinema: 1,
    vip: true,
    start_time: "11:30",
    price: 100000,
    gragraphics: 2,
  },
  {
    id: 1,
    cinema: 1,
    vip: true,
    start_time: "11:30",
    price: 100000,
    gragraphics: 2,
  },
  {
    id: 1,
    cinema: 1,
    vip: true,
    start_time: "11:30",
    price: 100000,
    gragraphics: 2,
  },
  {
    id: 1,
    cinema: 1,
    vip: true,
    start_time: "11:30",
    price: 100000,
    gragraphics: 2,
  },
  {
    id: 1,
    cinema: 1,
    vip: true,
    start_time: "11:30",
    price: 100000,
    gragraphics: 2,
  },
  {
    id: 1,
    cinema: 1,
    vip: true,
    start_time: "11:30",
    price: 100000,
    gragraphics: 2,
  },
  {
    id: 1,
    cinema: 1,
    vip: true,
    start_time: "11:30",
    price: 100000,
    gragraphics: 2,
  },
  {
    id: 1,
    cinema: 1,
    vip: true,
    start_time: "11:30",
    price: 100000,
    gragraphics: 2,
  },
];
