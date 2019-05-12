import React, { Component } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import styled from 'styled-components';

const PortfolioMenu= styled.div`
    font-weight: 400;
    font-size: 16px;
    padding: 20px 40px;

    & div:first-child a {
        color: rgba(0,0,0,1);
        font-size: 20px;
    }

    & div:not(:first-child) a {
        color: #B8B8B8;
    }

    & div:not(:first-child) a:hover {
        color: #000;
    }

    & div:last-child a {
        color: rgba(0,0,0,1);
        font-size: 20px;
    }

    & > div {
        text-align: left;
    }

    & > div:first-child{
        float: left;
    }

    & > div:not(:first-child){
        float: right;
    }

    & > div:last-child {
        display: none;
    }

    &::after{
        display: block;
        clear: both;
        content: '';
    }

    @media screen and (max-width: 767px) {
        position: relative;
        padding: 20px 30px;

        & > div:first-child {
            float: ${props => {
                if(props.displayMenu) {
                    return 'none';
                }
            }}
        }

        & > div:not(:first-child) {
            display: none;

            display:  ${props => {
                if(props.displayMenu) {
                    return 'block';
                }
            }}

            float: ${props => {
                if(props.displayMenu) {
                    return 'none';
                }
            }}
        }

        & > div:last-child {
            float: right;
            display: block;
            position:${props => {
                if(props.displayMenu) {
                    return 'absolute';
                }
            }}

            right:  ${props => {
                if(props.displayMenu) {
                    return 0;
                }
            }}

            top:  ${props => {
                if(props.displayMenu) {
                    return 0;
                }
            }}

            padding:  ${props => {
                if(props.displayMenu) {
                    return '20px 30px';
                }
            }}
        }

        & > div:nth-child(2),
        & > div:nth-child(3) {
            padding-top:  ${props => {
                if(props.displayMenu) {
                    return '10px';
                }
            }}
        }
    }
`
const navLinkStyle = {
    textDecoration: 'none'
}

const activeStyle = {
    color: '#000',
};

class Header extends Component { 
    constructor(props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    state = {
        isDisplayMenu: false
    }

    toggleMenu() {
        const { isDisplayMenu } = this.state;
        if(isDisplayMenu){
            this.setState({
                isDisplayMenu : false
            })
        } else {
            this.setState({
                isDisplayMenu : true
            })
        }
    }

    render() {
        const { isDisplayMenu } = this.state;
        return (
            <PortfolioMenu displayMenu = {isDisplayMenu}>
                {/* <span><NavLink exact to="/" style={navLinkStyle}>SEUNGHYUN</NavLink></span> */}
                <div><NavLink exact to="/">SEUNGHYUN</NavLink></div>
                <div><NavLink to="/about" activeStyle={activeStyle}>About</NavLink></div>
                <div><NavLink exact to="/" style={{marginRight: '10px'}}  activeStyle={activeStyle}>Works</NavLink></div>
                <div>
                    <a href='#' onClick={this.toggleMenu}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </PortfolioMenu>
        )
    }
}

export default Header;

