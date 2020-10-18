import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #dbdbdb;
  padding: 20px 40px;
  h3 {
    font-size: 15px;
  }
`;

const Box = styled.div`
  padding: 30px 0;
  input {
    width: 80%;
  }
  button {
    padding: 0 5px;
    margin: 0 5px;
  }
`;

export default class NewsSearch extends Component {
  render() {
    return (
      <>
        <Container>
          <h3>뉴스 검색</h3>
          <Box>
            <input type="text" placeholder="검색" />
            <button>검색</button>
          </Box>
        </Container>
      </>
    );
  }
}
