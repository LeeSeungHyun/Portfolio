import React from 'react'; 
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group'
import { Mealcheck, Koen, Plant }  from '../../assets/img';

const images = [ Mealcheck, Koen, Plant ];
const contents = [`<p>회사에서 중식 이용시 외부업체를 이용하였습니다.</p> <p>프로그램을 만들기 전에는 식단표에다 식사신청을 직접해야 했지만,
개발 후 휴대폰, PC를 이용해서 간단하게 식사신청을 할 수 있게 되었습니다.</<p> <p>기능은 식사 신청, 월별 식사 신청 수 확인, 프로필 수정,
주간, 월간 리포트 등등 있고, 저와 베트남 개발자 한 분과 같이 제작하였습니다. <p/>
<p>기획 부터 프론트앤드, 백엔드, 배포까지 전체적인 웹 개발 과정을 경험한 개인적으로 기억에 많이 남는 프로젝트 입니다.
URL : <a href="http://meal.bnftech.com" target="_blank">meal.bnftech.com</a></p>
<p>사용기술: C#, Asp.Net MVC5, Bootstrap, Html, Css, Javascript</p>`,

`<p>(주)한국남동발전과 진행했던 프로젝트입니다.</p><p>수집한 발전소의 데이터를 시각적으로 모바일 화면을 통해서도 볼 수 있게
되었습니다. 프로그램 사용 유저, 기능 사용 통계, Tag정보 관리, 공지사항 등록을 관리하는 Web admin 프로그램을 개발하였습니다.</p>
<p>사용기술: Java, Spring Framework, Html, Css, Angular.js</p>`,

`<p>회사에서 제품개발 계획에 따라, Web기반으로 발전소 데이터 감시 프로그램을 제작하였습니다.</p>
<p>태그(발전소 데이터 신호) 정보를 관리하는 페이지, 공정화면 모니터링, 차트 관리 페이지 기능 구현을 하였고,
전체적인 웹 페이지 레이아웃 제작도 같이 하였습니다.</p>
<p>사용기술: javascript(es6), typescript, angular, Asp.net API</p>`
];

const Container = styled.div`
    padding: 20px 200px 50px 100px;
    margin: 32px auto;
    display: flex;

    & > div:nth-child(1) {
        flex: 1;
    }

    & > div:nth-child(2) {
        flex: 2;
        margin-left: 40px;
        line-height: 2em;
    }

    & img {
        width: 100%;
    }

    & p{
        margin-top: 2px;
        text-align: left;
    }

    @media screen and (max-width: 767px){
        display:  ${props => props.isDisplayed ? 'none' : 'block'};
        padding: 20px 30px 50px 30px;
        & > div:nth-child(2) {
            margin-left: 0;
            margin-top: 30px;
        }
    }
`

 const Detail = ({ match, isDisplayed }) => {
    return (
        <CSSTransitionGroup
            transitionName="Transition"
            transitionAppear={true}
            transitionAppearTimeout={5000}
            transitionEnter={true}
            transitionLeave={false} >
            <Container isDisplayed={isDisplayed}>
                <div>
                    <img src={images[match.params.id - 1]} alt="Detail"/>
                </div>
                <div dangerouslySetInnerHTML={{__html: contents[match.params.id - 1]}}>
                </div>
            </Container>
        </CSSTransitionGroup>
    )

}

export default Detail;