import Weedux, { middleware } from 'weedux';

const { thunk } = middleware;

const objectReducer = reducers => (s, a) => {
    const newState = { ...s };
    reducers.forEach((r) => {
        const initialState = s[r[0]];
        const reducedState = r[1](initialState, a);
        if (reducedState) {
            newState[r[0]] = reducedState;
        }
    });

    console.groupCollapsed(`ACTION: ${a.type}`);
    console.log('Action:', a);
    console.log('Previous:', s);
    console.log('Current:', newState);
    console.groupEnd();

    return newState;
};

const initialState = {
};

const rootReducer = objectReducer([
]);
const store = new Weedux(initialState, rootReducer, [thunk]);


export default store;
