import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faSignInAlt,
    faUser,
    faDatabase,
    faCode,
    faComment,
    faQuoteLeft,
    faUsers
} from '@fortawesome/free-solid-svg-icons';

function SmallBoxTwo() {
    return (
        <Main>
            <h4 style={{ fontSize: "14px" }}>
                <FontAwesomeIcon
                    icon={faQuoteLeft}
                    style={{ color: "#2a6496" }}
                />칼럼</h4>
            <div style={{ border: "1px solid #D3D3D3", color: "#2a6496" }}>
                <InnerBox >
                    <BoxInner >
                        <div>제목</div>
                        <div>글쓴이</div>
                    </BoxInner>
                    <BoxInner >
                        <div>제목</div>
                        <div>글쓴이</div>
                    </BoxInner>
                    <BoxInner >
                        <div>제목</div>
                        <div>글쓴이</div>
                    </BoxInner>
                    <BoxInner >
                        <div>제목</div>
                        <div>글쓴이</div>
                    </BoxInner>
                </InnerBox>
            </div>
        </Main>
    )
}
const BoxInner = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #D3D3D3;
    padding: 10px;
`

const InnerBox = styled.div`
    border-left: 3px #3a93de solid;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`


const Main = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  right: 250px;
  top: 300px;
`

export default SmallBoxTwo
