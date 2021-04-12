import {createStore, combineReducers} from 'redux'
import { postsReduser } from '../redusers/postsReduser';




const store = createStore(
    combineReducers ({
        posts: postsReduser,
    }),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;