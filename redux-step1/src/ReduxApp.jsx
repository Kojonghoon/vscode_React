import React from "react";
import { useSelector } from "react-redux";
import ReduxFooter from "./components/include/ReduxFooter";
import ReduxHeader from "./components/include/ReduxHeader";
import ReduxMainPage from "./components/page/ReduxMainPage";

const ReduxApp = () => {
  
  return (
    <>
      <h3>리덕스 적용 예제</h3>
      <ReduxHeader />
      <ReduxMainPage />
      <ReduxFooter />
    </>
  );
};
export default ReduxApp;
