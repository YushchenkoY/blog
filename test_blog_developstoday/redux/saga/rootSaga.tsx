import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'
import { POST_FETCHING, POST_DETAILS_FETCHING, SEND_COMMENT_REQ, success, error} from '../actions/postAction'
import axios from 'axios';
import postDetailsSaga from './postDetailsSaga';
import commentsSaga from './commentsSaga';

function* fetchData() {
    try {
        // console.log('asdfasdf');

        const response = yield axios.get('https://simple-blog-api.crew.red/posts');
        console.log(response);

        yield put(success(response.data))
    }
    catch(err) {
        // yield put(error())
    }
}



function* rootSaga() {
    yield all([
        takeEvery(POST_FETCHING, fetchData),
        takeEvery(POST_DETAILS_FETCHING, postDetailsSaga),
        takeEvery(SEND_COMMENT_REQ, commentsSaga),
    ])
}

export default rootSaga