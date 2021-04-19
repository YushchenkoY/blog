import {createStore, combineReducers} from 'redux'
import { postsReduser } from './redusers/postsReduser';
import { IPostsState } from './redusers/postsReduser'

export interface IStore{
    posts: IPostsState;
}


const store: IStore = createStore(
    combineReducers ({
        posts: postsReduser,
    }),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;