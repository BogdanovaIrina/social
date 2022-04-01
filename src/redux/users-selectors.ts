import {reducersType} from "./store";
import {createSelector} from "reselect";
import {UserType} from "./user-reducer";

const setUsers = (state:reducersType) => state.users
export const getpages = (state:reducersType) => state.users.pagesize
export const getUserscount = (state:reducersType) => state.users.userscount
export const getCurrentPage = (state:reducersType) => state.users.currentpage
export const getIsLoading = (state:reducersType) => state.users.isLoading
export const getIsFollowing = (state:reducersType) => state.users.isFollowing

//@ts-ignore
export const getUsersSuper = createSelector(setUsers, (users):Array<UserType> => {
    users.users.filter(u => true)
})