import { Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Login from "./components/login/Login";
import CardManager from "./components/page/CardManager";

const AppDiv = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-item:center;
  background-color : #E4D0D0;
`

const App =({FileInput})=> {
  return (
    <>
      <AppDiv>
        <Routes>
          <Route path ="/" element={<Login/>}/>
          <Route path ="/manager" element={<CardManager FileInput={FileInput}/>}/>
        </Routes>
      </AppDiv>    
    </>
  )
}

export default App;
