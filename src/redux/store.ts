import { applyMiddleware, combineReducers, createStore } from "redux";
import { EmployeeReducer } from "./reducers/EmployeeReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({ store: EmployeeReducer })

export type State = ReturnType<typeof reducers>

export default createStore(reducers, applyMiddleware(thunk))