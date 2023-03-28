import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReduxApp from './ReduxApp';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import reducer from './redux/store';

const store =legacy_createStore(reducer)  //worker(state, action)
console.log(store.getState()) // getState() state.js에 있는 정보 출력
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    <Provider store={store}>
    <ReduxApp/>
    </Provider>
  </>
);

