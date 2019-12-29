import React, { Component } from 'react'; 
import { CSSTransitionGroup } from 'react-transition-group'
import styled from 'styled-components';
import profile from '../../assets/img/profile.jpg'; // Tell Webpack this JS file uses this image

const Container = styled.div`
    padding: 20px 100px 50px 50px;
    margin: 32px auto;
    display: flex;

    & > div:nth-child(1) {
        flex: 2;
    }

    & > div:nth-child(2) {
        flex: 3;
        margin-left: 40px;
        margin-right: 100px;
        line-height: 2em;
    }

    & img {
        width: 100%;
    }

    & p {
        text-align: left;
        /* color: rgba(0, 0, 0, 0.53); */
    }

    & p:nth-child(1) {
        margin-top: 2px;
    }

    & p:nth-child(3) {
        margin-top: 40px;
    }

    transition: visibility 0s, opacity 0.5s linear;
    @media screen and (max-width: 767px){
        display:  ${props => props.isDisplayed ? 'none' : 'block'};
        
        padding: 20px 30px 50px 30px;
        & > div:nth-child(2) {
            margin-left: 0;
            margin-right: 0;
            margin-top: 30px;
        }
    }
`

class About extends Component {
    render() {
        const { isDisplayed } = this.props;
        return ( 
            <CSSTransitionGroup
                transitionName="Transition"
                transitionAppear={true}
                transitionAppearTimeout={5000}
                transitionEnter={true}
                transitionLeave={false} >
              
                <Container  isDisplayed = {isDisplayed}>
                    <div>
                        <img src={profile} alt="profile"/>
                    </div>
                    <div>
                        <p>안녕하세요 웹 개발자 이승현입니다.</p>
                        <p>2015년부터 직장생활을 하고 있고, 현재 성남에서 거주하고 있습니다.
                        Front-end(웹 퍼블리싱 포함) , back-end 둘 다 개발을 해왔었고, Grid, Chart 라이브러리들을 활용해
                        Front-end쪽 개발을 주로 해 왔습니다.  js와 Front-end쪽에 관심이 많습니다.</p>

                        <p>Hi. this is Seunghyun</p>
                        <p>I've been working as programmer since 2015, now I've lived in Seongnam, in Korea.
                           I've developed both Front-end, Back-end and mainly developed Front-end part using Grid, Chart Library
                           I've interested in js, Front-end part
                        </p>
                    </div>
                </Container>
            </CSSTransitionGroup>
        ) 
    }
} 

export default About;