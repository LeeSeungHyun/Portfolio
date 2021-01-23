import React, { Component } from 'react'; 
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PortfolioMenu= styled.div`
    font-weight: 500;
    font-size: 16px;
    padding: 100px 40px 40px 40px;
   
    & > a:first-child {
        font-family: 'ProximaNova-Bold' !important;
        color: rgba(0,0,0,1);
        letter-spacing: 1px;
        font-size: 32px;
    }

    & a:not(:first-child) {
        font-family: 'ProximaNovaT-Thin' !important;
        font-weight: 400;
        letter-spacing: 1px;
        color: #B8B8B8;
    }

    & a:not(:first-child):hover {
        color: #000;
    }

    & a:last-child {
        color: rgba(0,0,0,1);
        font-size: 20px;
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

    & > a:nth-child(2),
    & > a:nth-child(3),
    & > a:nth-child(4) {
        margin-right: 16px;
    }

    &::after{
        display: block;
        clear: both;
        content: '';
    }

    @media screen and (max-width: 767px) {
        position: relative;
        padding: 40px 30px;

        & > a:nth-child(5) {
            margin-right: 0;
        }

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
                    return '0';
                }
            }}

            top:  ${props => {
                if(props.displayMenu) {
                    return '18px';
                }
            }}

            padding:  ${props => {
                if(props.displayMenu) {
                    return '20px 30px';
                }
            }}
        }

        & > a:nth-child(2) {
            margin-top:  ${props => {
                if(props.displayMenu) {
                    return '60px';
                }
            }}    
        }

        & > a:nth-child(2),
        & > a:nth-child(3),
        & > a:nth-child(4) {
            text-align: center;
            padding:  ${props => {
                if(props.displayMenu) {
                    return '15px 10px';
                }
            }}
        }
    }
`

const activeStyle = {
    color: '#000',
    fontWeight: 'bold'
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
        const { menuClick } = this.props;
        const { isDisplayMenu } = this.state;
        if(isDisplayMenu){
            this.setState({
                isDisplayMenu : false
            })
            menuClick(false);
        } else {
            this.setState({
                isDisplayMenu : true
            })
            menuClick(true);
        }  
    }

    render() {
        const { isDisplayMenu } = this.state;
        return (
            <PortfolioMenu displayMenu = {isDisplayMenu}>
                <NavLink exact to="/">SEUNGHYUN</NavLink>
                <NavLink to="/about" onClick={this.toggleMenu} activeStyle={activeStyle}>About</NavLink>
                <NavLink exact to="/" onClick={this.toggleMenu} activeStyle={activeStyle}>Works</NavLink>
                <a href='https://leeseunghyun.github.io/main'>Main</a>
                
                <a href='#' onClick={this.toggleMenu}>
                    {isDisplayMenu ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i>}
                </a>
            </PortfolioMenu>
        )
    }
}

export default Header;

