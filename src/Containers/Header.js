import React, { Component } from 'react';
import styled from "styled-components";
import { Link, Switch, Route } from 'react-router-dom';
import Containers from './Containers';

const Nav = styled.div`
  position: fixed;
  top:0;
  left:0;
  z-index: 1;
  width: 100%;
  height: 50px;
  background:skyblue;
  color :#333;
  ul {
      display:flex;
    li {
      list-style:none;
      flex: 1 1 auto;
      padding: 16px 14px;
    }
  }
`;

export default class Header extends Component {
  render() {
    return (
      <div>
        <Nav>
        <ul>
          <li>
            <Link to="/news">기본설정</Link>
          </li>
          <li>
            <Link to="/product">상품</Link>
          </li>
          <li>
            <Link to="/order">주문/배송</Link>
          </li>
          <li>
            <Link to="/news">회원</Link>
          </li>
          <li>
            <Link to="/promotion">프로모션</Link>
          </li>
          <li>
            <Link to="/design">디자인</Link>
          </li>
          <li>
            <Link to="/service">부가서비스</Link>
          </li>
          <li>
            <Link to="/marketing">마케팅</Link>
          </li>
          <li>
            <Link to="/mobile-app">모바일앱</Link>
          </li>
          <li>
            <Link to="/supplier">공급사</Link>
          </li>
          <li>
            <Link to="/statistics">통계</Link>
          </li>
          <li>
            <Link to="/reclaim-sales">회수판매중지</Link>
          </li>
          <li>
            <Link to="/notice-board">게시판</Link>
          </li>
          <li>
            <Link to="/news/newswrite/typing">뉴스</Link>
          </li>
        </ul>
      </Nav>
        
      </div>
      
    );
  };
};
