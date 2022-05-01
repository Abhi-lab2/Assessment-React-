import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./Auth/reducer";
import { todoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("Subscriber:", store.getState());
});

/* import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

// We can do sorting filtering over here... All opn can b done

export const initialState = {
   todos: [],
};

export const store = createStore(reducer, initialState);

//   window.__REDUX_DEVTOOLS_EXTENSION___ && window.__REDUX_DEVTOOLS_EXTENSION__()

// store.subscribe(() => {
console.log("Subscribe:", store.getState());
});
*/
