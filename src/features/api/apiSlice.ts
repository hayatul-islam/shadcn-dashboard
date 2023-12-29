import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://worklopedia-2.onrender.com/api/admin",
    credentials: "include",
  }),
  tagTypes: ["login"],
  endpoints: (builder) => ({}),
});
