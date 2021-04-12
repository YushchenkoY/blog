import {POST_FETCHING, POST_SUCCESS, POST_ERROR} from '../actions/postAction'


const initialState = {
    isloading: false,
    data: []
};

export const postsReduser = (state = initialState, action: any) => {
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