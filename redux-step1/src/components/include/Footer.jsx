import React from 'react'

const Footer = (props) => {
  const {addNumber}=props //구조분해할당
  return (
    <>
    <div className='footer_container'>
        푸터영역<br/>
        <button onClick={addNumber}>푸터증가버튼</button>
    </div>
    </>
  )
}

export default Footer