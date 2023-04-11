import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const PreviewDiv = styled.div`
   flex-basis : 50%;
   overflow : auto;
`
const TitleH1 = styled.h1`
   width : 100%;
   text-align : center;
   margin-bottom : 1em;
`
const CardsUl = styled.ul`
   width : 100%;
   height : 100%;
   padding : 0.5em 2em;
   display : flex; //카드가 너무 왼쪽에 있어서 조정
   flex-direction : column; //flex를 사용해야 align-items 사용가능함
   align-items : center;
`
const Preview = ({cards}) => {
  return (
    <PreviewDiv>
      <TitleH1>CardPreview</TitleH1>
      <CardsUl>
         {
            Object.keys(cards).map((key)=>(
               <Card key ={key} card={cards[key]} />
            ))
         }
      </CardsUl>
    </PreviewDiv>
  )
}

export default Preview
