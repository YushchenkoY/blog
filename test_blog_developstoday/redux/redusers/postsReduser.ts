import { IOnePost } from './../../type/posts';
import {POST_FETCHING, POST_SUCCESS, POST_ERROR} from '../actions/postAction'

export interface IPostsState {
    isloading: boolean;
    data: IOnePost[]    
}

interface IAction {
    type: string;
    payload: IOnePost[];
}

const initialState: IPostsState = {
    isloading: false,
    data: []
};

export const postsReduser = (state: IPostsState = initialState, action: IAction) => {
    switch (action.type) {
        case POST_FETCHING:
            return {...state, isloading: true} ;
        case POST_SUCCESS:
            return {...state, data:[...action.payload]};
        case POST_ERROR:
            return ;
        default:
            return state;
    }
}