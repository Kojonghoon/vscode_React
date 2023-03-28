import React from "react";
import { useSelector } from "react-redux";

const ReduxMainPage = () => {
  const number = useSelector((store) => store.number);
  const mem_name = useSelector((store) => store.mem_name);
  const depts = useSelector((store) => store.depts);
  console.log(number);
  return (
    <>
      <div className="main_container">
        <h4>컨텐츠 영역</h4>
        <br />
        <h3>번호: {number}</h3>
        <h3>이름: {mem_name}</h3>
        {depts &&
          depts.map((dept, index) => (
            <h3 key={index}>
              {dept.DEPTNO}
              {dept.DNAME}
              {dept.LOC}
            </h3>
          ))}
      </div>
    </>
  );
};

export default ReduxMainPage;
