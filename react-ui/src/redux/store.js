import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
// `rootReducer` is the file we created in step 4
import rootReducer from './reducers';

// this line connects allows the redux dev tools Chrome extension to see the store, or state, of the application
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// the reducers, the middleware, and the code that connects the redux dev tools Chrome extension to the appliation is exported in this manner
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


// Note
// `applyMiddleware` is necessary only when we have middleware which, in this case, is `thunk` but `thunk` is only necessary if we are doing asynchronous network calls
// In other words, if we were not concerned about `thunk`, we could simplify the export as `export default createStore(rootReducer, composeEnhancers());`