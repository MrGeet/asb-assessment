import { RootState } from '../redux/store';

export const selectUserFullName = (state: RootState) => `${state.firstName} ${state.lastName}`;
export const selectUserFirstName = (state: RootState) => state.firstName;
export const selectUserLastName = (state: RootState) => state.lastName;
