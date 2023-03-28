/* eslint-disable no-undef */
//액션
export const increase = (mem_name) => ({
  // type:'INCREMENT'
  type: "INCREASE",
  payload: mem_name,
});

export const decrease = (empVO) => ({ type: "DECREASE", payload: empVO });
export const dept = (depts) => ({ type: "DEPTLIST", payload: depts });

//초기상태 만들기
const initstate = {
  number: 0,
  mem_name: "이순신",
  empVO: { empno: 7566, ename: "나신입" },
  depts: [
    { DEPTNO: 10, DNAME: "총무부", LOC: "인천" },
    { DEPTNO: 20, DNAME: "영업부", LOC: "서울" },
    { DEPTNO: 30, DNAME: "개발부", LOC: "괌" },
  ],
  auth: "",
  googleProvider: "",
};

//worker가 reducer함수로 전환
//액션의 결과를 필터링 - 리듀서
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "INCREASE":
      //return되면 그걸 호출한 쪽에서 받는게 아니라 return되는 순간 바로 화면이 변경됨
      return { ...state, number: number + 1, mem_name: action.payload };
    case "DECREASE":
      return { ...state, number: number - 1, empVO: action.payload };
    case "DEPTLIST":
      return { depts: action.payload };
    default:
      return { ...state }; //깊은 복사 새로운 객체가 생성
  }
};

export default reducer;
