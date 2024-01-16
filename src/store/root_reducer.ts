import { combineReducers, Reducer } from "redux";
import postsReducer from "./posts/postsSlice";

export const rootReducer: Reducer = combineReducers({
    posts: postsReducer
})