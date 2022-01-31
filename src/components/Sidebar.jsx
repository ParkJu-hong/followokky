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

export const Sidebar = () => {
    return (
        <SideMenuBar>
            <Logo>
                <img
                    src="/image/okky_logo.png"
                ></img>
            </Logo>
            <ForGoogle>
                <InputForGoogle
                    type="text"
                    placeholder="Google 검색"
                ></InputForGoogle>
                {/* 인풋옆에 바로 버튼이 있도록 구현할 것 */}
                <SearchButton><FontAwesomeIcon size="1x" icon={faSearch} /></SearchButton>
            </ForGoogle>
            <br></br>
            <div style={{ display: "flex", justifyContent: "space-around", color: "white", marginBottom: "100px" }}>
                <span style={{}}><FontAwesomeIcon icon={faSignInAlt} />로그인</span>
                <span><FontAwesomeIcon icon={faUser} />회원가입</span>
            </div>
            <Navbar className="navbar">
                <div><FontAwesomeIcon icon={faDatabase}/> Q{"&"}A</div>
                <div><FontAwesomeIcon icon={faCode}/>Tech</div>
                <div><FontAwesomeIcon icon={faComment}/>커뮤니티</div>
                <div><FontAwesomeIcon icon={faQuoteLeft}/>칼럼</div>
                <div><FontAwesomeIcon icon={faUsers}/>Jobs</div>
            </Navbar>
        </SideMenuBar>
    )
}
const Navbar = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 28px;
    height: 40vh;
`

const ForGoogle = styled.div`
    display: block;
    padding-top: 20px;
    padding-bottom: 25px;
`
const SearchButton = styled.button`
    position: relative;
    z-index: 1;
    height: 34px;
    left: 160px;
    bottom: 34px;
`

const InputForGoogle = styled.input`
    position: relative;
    float: left;
    width: 70%;
    height: 28px;
    margin-left: 30px;
    margin-bottom: 0;
`

const Logo = styled.div`
    font-size: 30px;
    color: #d6e7f2;
    text-align: center;
    letter-spacing: 5px;
    margin-left: -10px;
    margin-top: 10px;
`

const SideMenuBar = styled.div`
overflow: hidden; // 이건 뭐하는 거지..?
width: 210px;
height: 100%;
background-color: #0059ab;
position: fixed;
top: 0;
z-index: 1;
left: 0;
/* transition: all 1s; */
`;
