import { Voter } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

type VoterState = {
  voters: Voter[];
  loading: boolean;
  error: null | string;
};

const initialState: VoterState = {
  voters: [],
  loading: false,
  error: null,
};

export const voterSlice = createSlice({
  name: 'voter',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    clearError: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    setVoters: (state, action) => {
      return {
        ...state,
        voters: action.payload,
        loading: false,
        error: null,
      };
    },
    updateVoter: (state, action) => {
      // we get the id, status and remarks in the action.payload and we update the voter with the id in the state
      const { id, status, remarks } = action.payload;
      const index = state.voters.findIndex((voter) => voter.id === id);
      state.voters[index].status = status;
      state.voters[index].remarks = remarks;

      return state;
    },
  },
});

export const { setLoading, setError, clearError, updateVoter, setVoters } =
  voterSlice.actions;

export default voterSlice.reducer;
