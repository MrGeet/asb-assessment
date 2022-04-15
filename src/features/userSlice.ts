import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  firstName: string;
  lastName: string;
}

const initialState: IUser = {
  firstName: 'Bruce',
  lastName: 'Wayne',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, { payload: name }: PayloadAction<string>) => {
      state.firstName = name;
    },
  },
});

export default userSlice.reducer;
