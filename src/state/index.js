import Weedux, { middleware } from 'weedux';
import board, { initialState as boardState } from './board';

const { thunk } = middleware;

const objectReducer = reducers => (s, a) => {
    const newState = Object.keys(reducers).reduce(
        (state, k) => ({ ...state, [k]: reducers[k](state[k], a) }),
        { ...s },
    );

    console.groupCollapsed(`ACTION: ${a.type}`);
    console.log('Action:', a);
    console.log('Previous:', s);
    console.log('Current:', newState);
    console.groupEnd();

    return newState;
};

const initialState = {
    board: boardState,
};

const rootReducer = objectReducer({
    board,
});
const store = new Weedux(initialState, rootReducer, [thunk]);


export default store;
