import React from "react";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
// vertical-align?
function App() {
  return (
    <Main>
      <Sidebar />
      <div style={{ position: "static"}}>
      <MainAd />
      <EditorsChoice />
      <WeeklyBest />
      <QandA />
      <AdTwice />
      <Community />
      <SmallBoxOne />
      <SmallBoxTwo />
      <div style={{ position: "relative", left: "600px"}}>안녕하세요</div>
      </div>
    </Main>
  );
}

const SmallBoxOne = styled.div`
  position: relative;
  border: 1px solid red;
  left: 840px;
  width: 250px;
  height: 300px;
  bottom: 800px;
`
const SmallBoxTwo = styled.div`
  position: relative;
  border: 1px solid red;
  left: 840px;
  width: 250px;
  height: 300px;
  bottom: 700px;
`

const Community = styled.div`
  position: relative;
  border: 1px solid red;
  bottom: 140px;
  left: 260px;
  width: 430px;
  height: 480px;
`

const AdTwice = styled.div`
  position: relative;
  border: 1px solid red;
  bottom: 500px;
  left: 780px;
  width: 300px;
  height: 300px;
`

const QandA = styled.div`
  position: relative;
  border: 1px solid red;
  left: 260px;
  width: 430px;
  height: 480px;
`

const WeeklyBest = styled.div`
  position: relative;
  bottom: 202px;
  left: 700px;
  border: 1px solid red;
  width: 370px;
  height: 200px;
  
`

const EditorsChoice = styled.div`
  position: relative;
  top: 80px;
  left: 260px;
  border: 1px solid red;
  width: 370px;
  height: 280px;
`

const MainAd = styled.div`
  position: relative;
  top: 20px;
  left: 280px;
  border: 1px solid red;
  width: 728px;
  height: 90px;
`
const Main = styled.div`
  background-color: #f8f8f8;
`

export default App;
