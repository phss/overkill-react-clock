import { delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { updateClock } from "./actions";

export function* tickClock() {
  while (true) {
    yield put(updateClock(new Date()));
    yield call(delay, 1000);
  }
}

export default tickClock;
