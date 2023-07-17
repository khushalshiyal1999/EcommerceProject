import {combineReducers} from "redux";
import { cartreducer,signUpreducer } from "./reducer";


const rootred = combineReducers({
    cartreducer,
    signUpreducer
});


export default rootred