import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import usersReducer from "./users-reducer";
import { combineReducers, createStore } from "redux";

let reducers=combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage:usersReducer
});

let store= createStore(reducers);

export default store;
