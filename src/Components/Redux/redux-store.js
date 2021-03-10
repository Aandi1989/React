import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import { combineReducers, createStore } from "redux";

let reducers=combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer
});

let store= createStore(reducers);

export default store;
