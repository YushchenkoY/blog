import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'
import { POST_FETCHING,  success, error} from '../actions/postAction'


function* fetchData() {
    try {
        const posts = yield call(fetch, 'https://bloggy-api.herokuapp.com/posts')
        yield put(success(posts))
    }
    catch(err) {
        yield put(error())
    }
}



function* rootSaga() {
    yield all([
        takeEvery(POST_FETCHING, fetchData)
    ])
}

export default rootSaga