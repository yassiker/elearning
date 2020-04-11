import { createSelector } from "reselect";

const selectDomain = () => state => {
  return state ? state.login : {};
};

export const selectAttemptLogin = () =>
  createSelector(
    selectDomain(),
    login => (login && login.attemptLoginLoading) || false
  );
