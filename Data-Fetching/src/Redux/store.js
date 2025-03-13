import { applyMiddleware, createStore } from "redux";
import { fetchReducer } from "./fetchReducer";
import {thunk} from 'redux-thunk'


export const fetchStore = createStore(fetchReducer, applyMiddleware(thunk))