import React, { Fragment } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import './Works.css';
import { Link } from 'react-router-dom';
import { Koen, Mealcheck, Memopad, Plant}  from '../../assets/img';

const Main = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 13px;
    font-weight: 100;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;
`

const Container = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 100;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;

    @media screen and (min-width: 768px) {
        padding: 4rem;
    }

    @media screen and (max-width: 767px) {
        padding: 2rem;
    }

    @supports (display: grid) {
        display: block;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    grid-auto-rows: 300px;
    grid-auto-flow: row dense;
    line-height: 20px;
`;

const Item = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    grid-column-start: auto;
    grid-row-start: auto;
    color: #fff;

    background-size: cover;
    background-position: center;
    -webkit-box-shadow: -1px 1px 5px 0px rgba(68, 68, 68, 0.4);
    box-shadow: -1px 1px 5px 0px rgba(68, 68, 68, 0.4);
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    transition: -webkit-transform 0.3s ease-in-out;
    cursor: pointer;
    counter-increment: item-counter;

    &:hover {
        -webkit-transform: scale(1.02);
        transform: scale(1.02);
    }

    &:hover:after {
       opacity: 0.2;
    }

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #778899;
        opacity: 0;
        -webkit-transition: opacity 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out;  
    }
`
const ItemFull = styled(Item)`
    grid-column-end: auto;
`;

const ItemMedium = styled(Item)`
    grid-row-end: span 2;
`;

const ItemLarge = styled(Item)`
    grid-row-end: span 2;
`;

const Works = () => ( 
    <Fragment>
        <CSSTransitionGroup 
          transitionName="WorkTransition"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={true}
          transitionLeave={false} >
            <Main>
                <Container>
                    <Grid>
                        <Item>
                            <img src={Koen} alt="profile" width="100%" height="100%"/>
                        </Item>
                        <Item>
                            <img src={Mealcheck} alt="profile" width="100%" height="100%"/>
                        </Item>
                        <Item>
                            <img src={Memopad} alt="profile" width="100%" height="100%"/>
                        </Item>
                        <Item>
                            <img src={Plant} alt="profile" width="100%" height="100%"/>
                        </Item>
                        <Item>
                            <img src={Koen} alt="profile" width="100%" height="100%"/>
                        </Item>
                    </Grid>
                </Container>
            </Main>
        </CSSTransitionGroup>
    </Fragment>
) 

export default Works;