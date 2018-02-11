import { delay } from 'redux-saga';
import { call } from 'redux-saga/effects';
import { tickClock } from './sagas'

describe("Saga", () => {
    it("tick clock every second", () => {
        const gen = tickClock();

        expect(gen.next().value.PUT.action.type).toEqual('UPDATE_CLOCK')
        expect(gen.next().value).toEqual(call(delay, 1000));
    });
});
