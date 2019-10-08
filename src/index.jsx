import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { createStore, compose , applyMiddleware } from "redux";
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './services/products/saga';
const sagaMiddleWare  = createSagaMiddleWare();
import  rootReducer from "./reducers/rootReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeMain  = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
    <Provider store = { storeMain } >
        <App/>
    </Provider>
    , document.getElementById("root"));