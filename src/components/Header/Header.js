import React from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const PortfolioTitle = styled.div`
    font-weight: 400;
    font-size: 24px;
    letter-spacing: .01em;
    line-height: 2.2em;
    text-transform: none;
    padding-left: 20px;

    & a {
        color: rgba(0,0,0,1);
    }
`

const PortfolioMenu= styled.div`
    font-weight: 400;
    font-size: 16px;
    padding-top: 14px;
    padding-right: 40px;

    & a {
        color: #B8B8B8;
    }

    & a:hover {
        color: #000;
    }

    & > span:nth-child(1){
        margin-right: 16px;
    }
`

const navLinkStyle = {
    textDecoration: 'none'
}

const activeStyle = {
    color: '#000',
};

const Header = () => ( 
    <HeaderContainer>
        <PortfolioTitle>
            <span><NavLink exact to="/" style={navLinkStyle}>SEUNGHYUN</NavLink></span>
        </PortfolioTitle>
        <PortfolioMenu>
            <span><NavLink exact to="/" style={navLinkStyle} activeStyle={activeStyle}>Works</NavLink></span>
            <span><NavLink to="/about" style={navLinkStyle} activeStyle={activeStyle}>About</NavLink></span>
        </PortfolioMenu>
    </HeaderContainer>
)

export default Header;

