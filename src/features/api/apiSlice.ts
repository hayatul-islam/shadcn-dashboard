import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-tcd5.onrender.com/",
    credentials: "include",
  }),
  tagTypes: ["login"],
  endpoints: () => ({}),
});
