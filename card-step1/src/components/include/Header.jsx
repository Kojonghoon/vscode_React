import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import styled from "styled-components";
import { logout } from "../../service/authLogic";

const HeaderDiv = styled.div`
  width: 100%;
  text-align: center;
  background-color: #d5b4b4;
  padding: 0.5em;
  position: relative;
`;
const Img = styled.img``;

const BtnLogout = styled.button`
  position: absolute;
  right: 3em;
  top: 1em;
  padding: 0.8em;
  border-radius: 20%;
  background-color: black;
  color: #e8e7e6;
  outline: 0;
  border: 0;
  cursor: pointer;
`;
const TitleH1 = styled.h1`
  color: white;
`;

const Header = () => {
  const navigate = useNavigate();
  const { userAuth } = useSelector((store) => store);
  const [userId, setUserId] = useState();
  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);
  const onLogout = () => {
    logout(userAuth.auth);
    navigate("/");
    window.location.reload()
    
  };
  return (
    <HeaderDiv>
      {userId && <BtnLogout onClick={onLogout}>Logout</BtnLogout>}
      <Img src="/images/logo.png" alt="logo" />
      <TitleH1>Name Card</TitleH1>
    </HeaderDiv>
  );
};

export default Header;
