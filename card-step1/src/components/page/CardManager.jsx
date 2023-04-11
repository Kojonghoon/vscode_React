import React, { useState } from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import styled from 'styled-components'
import Preview from './Preview'
import CardEditor from './CardEditor'
import { userAuth } from '../../redux/userAuth/state'
import { useSelector } from 'react-redux'

const MakerDiv = styled.div`
   width : 100%;
   height : 100%;
   max-width : 80rem;
   display : flex;
   flex-direction : column;
   background-color : white;
   
`
const ContainerDiv = styled.div`

  display : flex;
  flex : 1;
  min-height : 0;

`

const CardManager = ({FileInput}) => {
  //auth 객체 정보 수집위해 ->userAuth.auth
  const {userAuth} = useSelector(store=>store)
  const [cards, setCards] = useState({
    '1':{
      id: '1',
      name: '이성계',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'lee@gmail.com',
      message: 'go for it',
      fileName: 'lee',
      fileURL: 'https://res.cloudinary.com/dqhc5bbfl/image/upload/v1681195550/g6fw1x5ritqp7bdlvn9r.png',
    },
  '2':{
      id: '2',
      name: '김유신',
      company: 'Cupang',
      theme: 'light',
      title: 'Software Engineer',
      email: 'kim@gmail.com',
      message: 'I can do it',
      fileName: 'kim',
      fileURL: 'https://res.cloudinary.com/dqhc5bbfl/image/upload/v1681195546/qtob8ijfbqv73kq2ygm8.jpg',
  },
  '3':{
      id: '3',
      name: '유재석',
      company: 'MBC',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'you@gmail.com',
      message: 'we are the world',
      fileName: 'you',
      fileURL: 'https://res.cloudinary.com/dqhc5bbfl/image/upload/v1681195547/ookt3yhr7ybllfsuu2b1.jpg',
  }
});
//데이터 셋은 cardManager안에 있어요 - 원본은 건들지 않는다 - 복사본 사용 -> 추가, 삭제, 수정
//삭제 버튼은 cardEditorForm.jsx에 있어요 - 삭제 대상 card 도 거기에 있겠죠
//자바스크립트는 파라미터를 사용가능함
//파라미터 값은 언제 어디서 결정되나요? 사용자가 delete 버튼을 선택되고 클릭하면 deleteCard함수 호출 해야 함
//그떄 파라미터로 card를 전달 받을 수 있습니다.
  const deleteCard = card =>{ //삭제하고자 하는 card 정보를 여기서 결정할 수 없어요. 그럼 어디서 결정 되나요? - cardEditorForm
    console.log(card)
    setCards(cards=>{ //리렌더링 즉시 -> return ->내안에 컴포넌트->rendering
      //스프링부트에서 넘어오는 데이터셋은 useState매핑 -> 화면이 다시 그려진다
      const updated={...cards}  //복사 spread - 깊은복사
      delete updated[card.id]
      return updated  //복사본이 리턴된다
    })
  }
  
  return (
    <MakerDiv>
      <Header/>
      <ContainerDiv>
        <CardEditor FileInput ={FileInput}cards={cards} deleteCard ={deleteCard}/>
        <Preview cards={cards}/>
      </ContainerDiv>
      <Footer/>
    </MakerDiv>
  )
}

export default CardManager
