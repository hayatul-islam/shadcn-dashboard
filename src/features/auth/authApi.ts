

import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userNotLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/admins/login",
        method: "POST",
        body: data,
      }),
    }),

    otpVerification: builder.mutation({
      query: (data) => ({
        url: "/admins/otp-login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["login"],
    }),

    getMe: builder.query({
      query: () => ({
        url: "/admins/me",
        method: "GET",
      }),
      providesTags: ["login"],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              user: result?.data?.payload,
            })
          );
        } catch (err) {
          if (err) {
          dispatch(userNotLoggedIn(err));
          }
        }
      },
    }),

    logout: builder.mutation({
      query: (data) => ({
        url: "/admins/logout",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["login"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetMeQuery,
  useLogoutMutation,
  useOtpVerificationMutation,
} = authApi;
