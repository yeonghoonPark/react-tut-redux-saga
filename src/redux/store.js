import { createStore } from "redux";

const dummyReducer = () => 100;

const store = createStore(dummyReducer);

export default store;
