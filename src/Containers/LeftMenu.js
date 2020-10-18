import React, { Component } from 'react'
import styled from "styled-components";

const Left = styled.div`
  position: fixed;
  top:0;
  left:0;
  z-index: 0;
  background: #555;
  color :#fff;
  height:100%;
  width:150px;
  ul {
      display:flex;
      flex-direction: column;
      margin-top:60px;
    li {
      list-style:none;
      padding:15px 20px;
    }
  }
`;

export default class LeftMenu extends Component {
    render() {
        return (
            <Left>
                <ul>
                    <li>good</li>
                    <li>best</li>
                    <li>choice</li>
                    <li>good</li>
                    <li>best</li>
                    <li>choice</li>
                </ul>
            </Left>
        )
    }
}
