import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/Reducer'

export const Store = () => {
    const store = createStore(reducer,applyMiddleware(thunk));
    return store;
}