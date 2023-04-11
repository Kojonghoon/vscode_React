import React from "react";
import CardEditorForm from "./CardEditorForm";
import CardAddForm from "./CardAddForm";
import styled from "styled-components";

const EditorDiv = styled.div`
  flex-basis: 50%;
  border-right: 1px solid #9e7676; //editor와 preview 사이에 구분선 넣기
  padding: 0.5em 2em;
  overflow-y: auto;
`;
const TitleH1 = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
  color: #594545;
`;

const CardEditor = ({ FileInput, cards, deleteCard }) => {
  console.log(cards); // 3건출력 - CardManager.jsx 선언된 cards, setCards
  return (
    <EditorDiv>
      <TitleH1>Card Editor</TitleH1>
      {Object.keys(cards).map((key) => (
        /* cards 3개 로우에 대해서 한 개 card정보만 전달해야 함 */
        <CardEditorForm FileInput={FileInput} key={key} card={cards[key]} deleteCard ={deleteCard}/>
      ))}
      <CardAddForm FileInput={FileInput}/>
    </EditorDiv>
  );
};

export default CardEditor;
