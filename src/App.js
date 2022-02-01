import React from "react";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import EditorsChoice from './components/EditorsChoice';
import WeeklyBest from './components/WeeklyBest';
import QandA from './components/QandA';
import AdTwice from './components/AdTwice';
import Community from './components/Community';
import SmallBoxOne from "./components/SmallBoxOne";
import SmallBoxTwo from "./components/SmallBoxTwo";

/*
  22.02.01 (화) 해야할 일
  1. AppRouter컴포넌트 혹은 Main 컴포넌트 만들어서 App컴포넌트 깔끔하게 클린코딩 진행할 것
  2. 각 컴포넌트 안의 내용들 하드코딩으로 구현할 것

  3. 1, 2를 모두 다 했을 시, 사이드바 메뉴 클릭할 시 나오는 것과 더 나아가서는 
     react-router-dom 사용하여 페이지 이동할 수 있도록 구현할 것

     
*/


// vertical-align?
function App() {
  return (
    <Main>
      <Sidebar />
      <SideAd><h1 style={{ textAlign: "center"}}>광고</h1></SideAd>
      <div 
      className="forRelation"
      style={{ marginLeft: "250px"}}
      >
      <MainAd ><h1 style={{ textAlign: "center"}}>광고</h1></MainAd>
      <Div>
        <EditorsChoice/>
        <WeeklyBest />
      </Div>
      <Div>
        <QandA /> 
        <AdTwice /> 
      </Div>
      <Div>
        <Community />
        <SmallBoxOne />
        <SmallBoxTwo />
      </Div>
      <Footer >
        Footer
      </Footer>
      </div>
    </Main>
  );
}
const SideAd = styled.div`
  position: fixed;
  border: 1px solid black;
  top: 100px;
  left: 1200px;
  width: 200px;
  height: 500px;
`
const Footer = styled.footer`
  position: relative;
  top: 200px;
`

const Div = styled.div`
  display: flex;
`

const MainAd = styled.div`
  position: relative;
  top: 20px;
  border: 1px solid black;
  width: 728px;
  height: 90px;
`
const Main = styled.div`
  background-color: #f8f8f8;
`

export default App;
