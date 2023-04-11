import React from 'react'
import styled from 'styled-components'


const FooterDiv = styled.div`
   width : 100%;
   background-color : #867070;
   text-align : center;

`

const TitleP = styled.p`
   color : #e8e7e6;
`
const Footer = () => {
  return (
    <FooterDiv>
      <TitleP>No pain, No gain</TitleP>
    </FooterDiv>
  )
}

export default Footer
