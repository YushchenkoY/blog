export const POST_FETCHING = 'POST_FETCHING'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_ERROR = 'POST_ERROR'


export function fetching() {
    return {
        type: POST_FETCHING,
        payload: ''
    }
};
export function success(data1: any) {
    return {
        type: POST_SUCCESS,
        payload: data1
    }
};
export function error() {
    return {
        type: POST_ERROR,
        payload: ''
    }
}