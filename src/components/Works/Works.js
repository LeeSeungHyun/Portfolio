import React, { Fragment } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link, NavLink } from 'react-router-dom';
import { Koen, Mealcheck, Plant}  from '../../assets/img';

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
    box-shadow: -1px 1px 5px 0px rgba(200, 200, 200, 0.4);
    -webkit-box-shadow: -1px 1px 5px 0px rgba(200, 200, 200, 0.4);
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    transition: -webkit-transform 0.3s ease-in-out;
    cursor: pointer;
    counter-increment: item-counter;

    &:hover {
        -webkit-transform: scale(1.02);
        transform: scale(1.02);
        background-color: #778899;
    }

    & div {
        display: none;
    }

    &:hover div {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 900;
        z-index: 1;
        color: #fff;
        font-size: 1.2rem;
        -webkit-transition: -webkit-transform 0.3s ease-in-out;
        transition: -webkit-transform 0.3s ease-in-out;
    }

    &:hover img {
        opacity: 0.4;
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

const navLinkStyle = {
    textDecoration: 'none',
    width: '100%', 
    height: '100%'
}

const Works = () => ( 
    <Fragment>
        <CSSTransitionGroup 
          transitionName="Transition"
          transitionAppear={true}
          transitionAppearTimeout={5000}
          transitionEnter={true}
          transitionLeave={false} >
            <Main>
                <Container>
                    <Grid>
                        <ItemMedium>
                            <NavLink to='/Detail/1' style={navLinkStyle}>
                                <img src={Mealcheck} alt="profile" width="100%" height="100%" />
                                <div>Mealcheck Program</div>
                            </NavLink>
                        </ItemMedium>
                        
                        <Item>
                            <NavLink to='/Detail/2' style={navLinkStyle}>
                                <img src={Koen} alt="profile" width="100%" height="100%" />
                                <div>Koen Mobile Project</div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to='/Detail/3' style={navLinkStyle}>
                                <img src={Plant} alt="profile" width="100%" height="100%" />
                                <div>HanAra Insight</div>
                            </NavLink>
                        </Item>
                    </Grid>
                </Container>
            </Main>
        </CSSTransitionGroup>
    </Fragment>
) 

export default Works;