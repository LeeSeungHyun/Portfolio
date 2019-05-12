import React, { Component } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import styled from 'styled-components';

const PortfolioMenu= styled.div`
    font-weight: 400;
    font-size: 16px;
    padding: 20px 40px;

    & > a:first-child {
        color: rgba(0,0,0,1);
        font-size: 20px;
    }

    & a:not(:first-child) {
        color: #B8B8B8;
    }

    & a:not(:first-child):hover {
        color: #000;
    }

    & a:last-child {
        color: rgba(0,0,0,1);
        font-size: 20px;
    }

    & > a {
        text-align: left;
    }

    & > a:first-child{
        float: left;
    }

    & > a:not(:first-child){
        float: right;
    }

    & > a:last-child {
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

        & > a:first-child {
            float: ${props => {
                if(props.displayMenu) {
                    return 'none';
                }
            }}

            display:  ${props => {
                if(props.displayMenu) {
                    return 'block';
                }
            }}

            text-align:  ${props => {
                if(props.displayMenu) {
                    return 'left';
                }
            }}
        }

        & > a:not(:first-child) {
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

        & > a:last-child {
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

        & > a:nth-child(2),
        & > a:nth-child(3) {
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
                <NavLink exact to="/">SEUNGHYUN</NavLink>
                <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                <NavLink exact to="/" style={{marginRight: '10px'}}  activeStyle={activeStyle}>Works</NavLink>
                
                <a href='#' onClick={this.toggleMenu}>
                    <i className="fa fa-bars"></i>
                </a>
            </PortfolioMenu>
        )
    }
}

export default Header;

