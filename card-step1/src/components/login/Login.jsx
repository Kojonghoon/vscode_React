import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../include/Header'
import Footer from '../include/Footer'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { loginGoogle } from '../../service/authLogic'
import { setToastMsg } from '../../redux/toastStatus/action'

const LoginDiv = styled.div`
  width : 30em;
  background-color : #F8EDE3;
  text-align: center;
  display:flex;
  flex-direction : column;
  justify-content : center;
`

const ListUI = styled.ul`
  width : 100%;
  display : flex;
  flex-direction : column;
  padding : 0.5rem;
  list-style : none;
`
const ItemLi = styled.li`
  margin-bottom : 0.5em;
` 
const BtnLogin = styled.button`
  width : 100%;
  height : 2.5em;
  font-size : 1.2rem;
  border-radius : 1.2rem;
  background-color : transparent;
  cursor:pointer;
  border : 0.2rem solid #9e7676;
  outline : 0;
  &:hover{
    background-color:#F5EBEB
  }
`

const Login = () => {
  //구글 로그인 성공시 CardManager화면으로 이동처리에 사용
  const navigate = useNavigate()
  //구글 로그인 진행 중 에러 발생하면 에러 메시지 출력 처리 위해
  const dispatch = useDispatch()
  //구글 로그인시 auth와 googleProvider 파라미터로 전송위해서
  const userAuth = useSelector(store=>store.userAuth)
  const [userId, setUserId] = useState();
  const onLogin = async() =>{
    try {
      const result = await loginGoogle(userAuth.auth,userAuth.googleProvider)
      console.log(result)
      console.log(result.uid)
      setUserId(result.uid)
      window.localStorage.setItem('userId',result.uid)
      navigate('/manager')
      window.location.reload();
    } catch (error) {
      dispatch(setToastMsg(error+":로그인 오류입니다"))

    }
  }
  return (
    <LoginDiv>
      <Header/>
        <section>
          <h1>Login</h1>
        </section>
        <ListUI>
          <ItemLi><BtnLogin onClick={onLogin}>Google</BtnLogin></ItemLi>
          <ItemLi><BtnLogin>Github</BtnLogin></ItemLi>
        </ListUI>
      <Footer/>
    </LoginDiv>
  )
  }

export default Login
