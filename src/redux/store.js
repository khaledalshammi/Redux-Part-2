//redux thunk
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './allR';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(reducers,
    enhancer(applyMiddleware(reduxThunk)));
export default store; 