import { createStore } from "redux";

const reducerFunction = (state = { counter: 0 }, action) => {
    if (action.type === "add") {
        return { counter: state.counter + 1 };
    }

    if (action.type === "sub") {
        return { counter: state.counter - 1 };
    }

    if (action.type === "addBy") {
        return { counter: state.counter + 100 };
    }

    return state;
};

const store = createStore(reducerFunction);
export default store;
