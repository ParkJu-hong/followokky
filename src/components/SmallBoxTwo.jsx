import React from 'react';
import styled from "styled-components";

function SmallBoxTwo() {
    return (
        <Main>
            SmallBoxTwo
        </Main>
    )
}
const Main = styled.div`
  position: relative;
  border: 1px solid black;
  width: 250px;
  height: 300px;
  right: 250px;
  top: 300px;
`

export default SmallBoxTwo
