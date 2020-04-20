import {combineReducers,createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {todoReducer} from "../Store/TODOS/reducer";


const rootReducer = combineReducers({
    todo:todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore(){
    const store = createStore(
        rootReducer,composeWithDevTools(applyMiddleware())
    );
    return store;
}