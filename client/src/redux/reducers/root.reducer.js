import { combineReducers } from "redux";
import clientReducer from "./client.reducer";
import errorsReducer from './errorsReducer';


const rootReducer = combineReducers({ 
    client: clientReducer, 
    errors: errorsReducer,
    
});
export default rootReducer;