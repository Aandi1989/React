import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import usersReducer from "./users-reducer";
import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";

let reducers=combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage:usersReducer,
    auth:authReducer
});

let store= createStore(reducers);

export default store;
