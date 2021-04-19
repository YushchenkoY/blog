import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'
import { POST_FETCHING,  success, error} from '../actions/postAction'
import axios from 'axios';

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
        takeEvery(POST_FETCHING, fetchData)
    ])
}

export default rootSaga