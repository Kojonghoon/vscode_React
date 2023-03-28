import React from 'react'

const MainPage = (props) => {
  const {number, addNumber} = props
  return (
    <>
    <div className='main_container'>
        <h4>컨텐츠 영역</h4>
        <br/>
        <h3>번호: {number}</h3>
        <button onClick={addNumber}>메인버튼</button>
    </div>
    </>
  )
}

export default MainPage
