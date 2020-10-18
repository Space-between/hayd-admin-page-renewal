import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
    padding-top:20px;
    .table {
      border-collapse: collapse;
      border-top: 3px solid #999999;
      width:100%;
    }  
    .table th {
      color: #fff;
      background: #999999;
      text-align: center;
    }
    .table th, .table td {
      padding: 10px;
      border: 1px solid #ddd;
    }
    .table th:first-child, .table td:first-child {
      border-left: 0;
    }
    .table th:last-child, .table td:last-child {
      border-right: 0;
    }
    .table tr td:first-child{
      text-align: center;
    }
    .table caption{caption-side: bottom; display: none;}
`;

export default class NewsTable extends Component {
    render() {
        return (
            <>
                <Container>
                    <table className="table">
                        <caption>표 제목</caption>
                        <tr><th><input type="checkbox" name="color" /></th><th>번호</th><th>유형</th><th>제목</th><th>작성자</th><th>작성일</th><th>조회</th><th>URL복사</th><th>사용자화면</th><th>관리자화면</th><th>수정</th><th>삭제</th></tr>
                        <tr><td><input type="checkbox" name="color" /></td><td>1</td><td>운동</td><td>뉴스 글 제목입니다</td><td>관리자</td><td>2018-08-01</td><td>200</td><td><button>PC</button></td><td><button>보기</button></td><td><button>관리</button></td><td><button>수정</button></td><td><button>삭제</button></td></tr>
                        <tr><td><input type="checkbox" name="color" /></td><td>2</td><td>운동</td><td>뉴스 글 제목입니다</td><td>관리자</td><td>2018-08-01</td><td>200</td><td><button>PC</button></td><td><button>보기</button></td><td><button>관리</button></td><td><button>수정</button></td><td><button>삭제</button></td></tr>
                        <tr><td><input type="checkbox" name="color" /></td><td>3</td><td>운동</td><td>뉴스 글 제목입니다</td><td>관리자</td><td>2018-08-01</td><td>200</td><td><button>PC</button></td><td><button>보기</button></td><td><button>관리</button></td><td><button>수정</button></td><td><button>삭제</button></td></tr>
                    </table>
                </Container>
            </>
        )
    }
}
