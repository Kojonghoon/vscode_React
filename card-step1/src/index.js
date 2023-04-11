import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AuthLogic from "./service/authLogic";
import { legacy_createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import firebaseApp from "./service/firebase";
import { setAuth } from "./redux/userAuth/action";

import ImageUploader from "./service/imageUploader";
import ImageFileInput from "./components/common/ImageFileInput";
const imageUploader = new ImageUploader();
// 변수 선언 시 소문자이면 함수, 대문자 화면 컴포넌트
const FileInput = (props) => <ImageFileInput {...props} />;

const authLogic = new AuthLogic(firebaseApp);
const store = legacy_createStore(rootReducer);
store.dispatch(
  setAuth(authLogic.getUserAuth(), authLogic.getGoogleAuthProvider())
);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App FileInput={FileInput} />
      </Provider>
    </BrowserRouter>
  </>
);
