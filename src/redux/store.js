import {createStore} from "redux";
import {randomPhrasesReducer} from "./randomPhrasesReducer";

export const store = createStore(randomPhrasesReducer);