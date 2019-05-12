import React from 'react'; 
import { CSSTransitionGroup } from 'react-transition-group'
import styled from 'styled-components';
import profile from '../../assets/img/profile.jpg'; // Tell Webpack this JS file uses this image

const Container = styled.div`
    padding: 20px 100px 50px 100px;
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

    & p {
        text-align: left;
        /* color: rgba(0, 0, 0, 0.53); */
    }

    & p:nth-child(1) {
        margin-top: 2px;
    }

    & p:nth-last-child(1) {
        margin-top: 30px;
        font-style: italic;
    }

    @media screen and (max-width: 767px){
        display: block;
        padding: 20px 30px 50px 30px;
        & > div:nth-child(2) {
            margin-left: 0;
            margin-top: 30px;
        }
    }
`

const About = () => ( 
    <CSSTransitionGroup
        transitionName="Transition"
        transitionAppear={true}
        transitionAppearTimeout={5000}
        transitionEnter={true}
        transitionLeave={false} >
      
        <Container>
            <div>
                <img src={profile} alt="profile"/>
            </div>
            <div>
                <p>
                    웹 개발에 관심이 많고, 현재는 주로 React를 이용해 개발을 하고 있습니다.
                </p>
                <p>
                    남는 시간에 개발 공부를 하고, 새로운 기술을 익히면서 즐거움을 느끼고 있습니다.
                </p>
                <p>
                    단순히 일하는 사람이 아닌 새로운 것을 배우면서 내가 성장하고 도움이 필요한 사람에게 도움이 될 수 있도록 하는 것이 저의 개발자로서 목표입니다
                </p>
                <p>
                    Html, css, Javascript, angular, nodejs, react, react-native
                </p>
            </div>
        </Container>
    </CSSTransitionGroup>
) 

export default About;