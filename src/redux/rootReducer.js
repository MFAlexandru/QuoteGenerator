import { combineReducers } from "redux";
import quoteReducer from "./Quoter/quoter.reducer";

const rootReducer = combineReducers({
    index: quoteReducer
});

export default rootReducer;