import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
    padding:0 10px;
    h1{
        padding:30px 30px 10px 30px;
        font-weight:800;
        font-size:35px;
    }
`;

const InputBox = styled.div`
    display:flex;
    padding:15px 100px;
    input {
        border-top:none;
        border-left:none;
        border-right:none;
    }  h3 {
        font-size:18px;
        padding-right:10px;
    } 
`;

const Category = styled.div`
    
    margin:0 60px;
    h3 {
        font-size:18px;
    } div {
        display:flex;
    }
`;

const Button = styled.div`
    button {
       padding:2px 25px;
       margin-left:10px;
    } .plusbtn{
        padding:3px 30px;
    }
`;

const CategoryInputBox = styled.div`
    padding:20px 120px;
    input {
        border-top:none;
        border-left:none;
        border-right:none;
    } button {
       padding:2px 15px;
       margin-left:10px;
    }
`;

const ImgRegistration = styled.div`
    display:flex;
    padding:0px 35px;
    h3 {
        font-size:18px;
        padding-right:5px;
    } button {
       padding:40px 100px;
       margin-left:10px;
       font-size:20px;
    }
`;

export default class TypingInput extends Component {
    render() {
        return (
            <>
                <Container>
                    <h1>뉴스 작성(직접 작성시)</h1>
                    <InputBox className="inputBox_1">
                        <h3>등록자</h3>
                        <input 
                            style={{marginLeft: '17px'}}
                            type='text'
                        />
                    </InputBox>
                    <InputBox className="inputBox_2">
                        <h3>등록일자</h3>
                        <input 
                            type='text'
                        />
                    </InputBox>
                    <Category>
                        <div>
                            <h3>관련카테고리</h3>
                            <Button>
                                <button
                                    style={{padding: '2px 12px'}}
                                >건강기능식품</button>
                                <button>운동</button>
                                <button>영양소</button>
                                <button className="plusbtn">+</button>
                            </Button>
                        </div>
                        <CategoryInputBox>
                            <input 
                                type='text'
                            />
                            <button>카테고리 추가</button>
                        </CategoryInputBox>
                    </Category>
                    <ImgRegistration>
                        <h3>대표이미지 등록</h3>
                        <button>+</button>
                    </ImgRegistration>
                    <InputBox className="inputBox_3">
                        <h3
                            style={{paddingRight: '45px'}}
                        >제목</h3>
                        <input 
                            style={{marginLeft: '0px'}, {width: '430px'}}
                            type='text'
                        />
                    </InputBox>
                </Container>
            </>
        )
    }
}
