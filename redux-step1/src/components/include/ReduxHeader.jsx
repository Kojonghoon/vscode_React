import React from 'react'
import { useSelector } from 'react-redux'

const ReduxHeader = () => {
  const empVO = useSelector((store)=>store.empVO)
  return (
    <>
      <div className="header_container">
        리덕스헤더영역
        <hr/>
        {empVO&&`사원번호:${empVO.empno} 사원명:${empVO.ename}`}
        </div>
    </>
  )
}
export default ReduxHeader
