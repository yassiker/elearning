import { createSelector } from "reselect";

const selectDomain = () => state => {
  return state ? state.user : {};
};

export const selectUserRole = () =>
  createSelector(
    selectDomain(),
    user => (user && user.userRole) || ""
  );

export const selectfetchUserLoading = () =>
  createSelector(
    selectDomain(),
    user => (user && user.fetchUserLoading) || false
  );
