import { apiSlice } from '@/lib/services/apiSlice';
import { setError, setLoading, setVoters, updateVoter } from './voterSlice';

const voterApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVoters: builder.query({
      query: () => '/',
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));
        try {
          const { data } = await queryFulfilled;
          dispatch(setVoters(data.data));
        } catch (err) {
          console.log('err setting voter', err);
          dispatch(setError(err));
        }
      },
    }),

    updateVoter: builder.mutation({
      query: ({ id, status, remarks }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: { status, remarks },
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));
        try {
          const { data } = await queryFulfilled;
          dispatch(updateVoter(data.data));
        } catch (err) {
          console.log('err updating voter', err);
          dispatch(setError(err));
        }
      },
    }),
  }),
});

export const { useGetVotersQuery, useUpdateVoterMutation } = voterApiSlice;
