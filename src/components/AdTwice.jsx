import React from 'react';
import styled from "styled-components";

function AdTwice() {
    return (
        <Main>
            <h1 style={{ textAlign: "center"}}>광고</h1>
        </Main>
    )
}

const Main = styled.div`
  position: relative;
  border: 1px solid black;
  top: 30px;
  width: 300px;
  height: 300px;
  margin-left: 25px;
`

export default AdTwice
