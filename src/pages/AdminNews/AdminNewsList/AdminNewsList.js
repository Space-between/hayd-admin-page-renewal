import React, { Component } from 'react';
import NewsTable from './NewsTable/NewsTable';
import NewsSearch from './NewsSearch/NewsSearch';
import styled from "styled-components";

const Container = styled.div`
    padding:0 10px;
    h1{
        padding:30px 30px;
        font-weight:800;
        font-size:35px;
    }
`;

export default class AdminNewsList extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>뉴스 리스트</h1>
                    <NewsSearch />
                    <NewsTable />
                </Container>
            </div>
        );
    };
};
