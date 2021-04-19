import { postsReduser } from './postsReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers ({
    posts: postsReduser,
})

export default rootReducer;