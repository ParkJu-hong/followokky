import React from 'react';
import styled from "styled-components";

function SmallBoxOne() {
    return (
        <Main>
            SmallBoxOne
        </Main>
    )
}

const Main = styled.div`
  position: relative;
  border: 1px solid black;
  margin-left: 30px;
  width: 250px;
  height: 300px;
  bottom: 100px;
`

export default SmallBoxOne
