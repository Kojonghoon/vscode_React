import { useState } from "react";
import "./App.css";
import Footer from "./components/include/Footer";
import Header from "./components/include/Header";
import MainPage from "./components/page/MainPage";

function App() {
  // const num = 0;  //리렌더링 없음
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    console.log('addNumber')
    setNumber(number+1)
  };
  return (
    <>
      <div className="container">
        <Header number={number} />
        <MainPage number={number} addNumber={addNumber}/>
        <Footer addNumber={addNumber}/>
        <button onClick={addNumber}>추가</button>
      </div>
    </>
  );
}

export default App;

//리렌더링 3가지 
