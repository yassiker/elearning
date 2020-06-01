import { createSelector } from 'reselect';

const selectDomain = () => (state) => {
  return state ? state.login : {};
};

export const selectAttemptLogin = () =>
  createSelector(selectDomain(), (login) => (login && login.attemptLoginLoading) || false);

export const selectIsLoggedIn = () => createSelector(selectDomain(), (login) => (login && login.isLoggedIn) || false);
