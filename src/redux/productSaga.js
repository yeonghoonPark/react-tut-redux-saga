import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:8000/products") //
    .then((res) => res.json());

  yield put({ type: SET_PRODUCT_LIST, data });
}

// function*은 generator function을 의미
export default function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
