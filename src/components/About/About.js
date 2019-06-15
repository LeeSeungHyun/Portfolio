import React, { Component } from 'react'; 
import { CSSTransitionGroup } from 'react-transition-group'
import styled from 'styled-components';
import profile from '../../assets/img/profile.jpg'; // Tell Webpack this JS file uses this image

const Container = styled.div`
    padding: 20px 200px 50px 100px;
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
                        <p>안녕하세요 웹 개발자 이승현입니다. 약 4년간 직장생활을 하고 있고, 현재 성남에서 거주하고 있습니다. </p>
                        <p>
                            누군가에게는 꼭 필요한 서비스가 있습니다. 하지만 문제를 해결하기 위해서는 어떠한 기술이 필요하죠. 
                            개발자는 필요로 하는 사람들에게 서비스를 제공해 줄 수 있는 매력적인 직업중에 하나라고 생각됩니다. 
                            누군가에게 도움이 된다는 것은 너무나도 즐거운 일입니다. 
                        </p>
                        <p>
                            저도 도움이 되는 그런 사람이 되고 싶습니다. :)
                        </p>
                    </div>
                </Container>
            </CSSTransitionGroup>
        ) 
    }
} 

export default About;