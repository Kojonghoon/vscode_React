import React from "react";
import { useDispatch } from "react-redux";
import { increase } from "../../redux/store";

const ReduxFooter = () => {
  const dispatch = useDispatch()
  const handleAdd=(e)=>{
    e.preventDefault()// 이벤트 버블링 차단
    //insert here
    dispatch(increase('김춘추'))
  }
  return (
    <>
      <div className="footer_container">
        <h3>리덕스푸터영역</h3>
        <button onClick={handleAdd}>증가</button>
      </div>
    </>
  );
};

export default ReduxFooter;
