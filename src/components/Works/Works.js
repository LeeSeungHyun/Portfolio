import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link, NavLink } from 'react-router-dom';
import { Koen, Mealcheck, Plant, BookFishing }  from '../../assets/img';
import Modal from 'react-modal';

const images = [ Mealcheck, Koen, Plant, BookFishing ];
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
<p>사용기술: javascript(es6), typescript, angular, Asp.net API</p>`,

`<p>노마드코더 유튜브 체널에서 주최한 책 SNS 만들기 공모전에 참여했었습니다.</p>
<p>Social 로그인 기능 (facebook, google), 프로필, 책 리스트, 책 검색, Kakao Book API를 이용한 책 등록하기, 댓글 등등 기능을 구현 하였습니다.
제작 기간은 2달이었고, 프론트엔드부터 백엔드, 배포까지 혼자 모든 부분을 구현하였습니다. URL : <a href="https://bookfishing.site" 
target="_blank">https://bookfishing.site</a></p>
<p>사용기술: javascript(es6), Vue, Node.js, Heroku</p>`
];

Modal.setAppElement('#root')

const Main = styled.div`
	@media screen and (max-width: 767px){
		display:  ${props => props.isDisplayed ? 'none' : 'block'};
	}
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

	@supports (display: grid) {
		display: block;
	}
`;

const Grid = styled.div`
	display: -ms-grid;
	display: grid;
	grid-gap: 50px;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	-ms-grid-columns: 1fr 1fr 1fr;
	grid-auto-rows: 320px;
	-ms-grid-rows: 320px 320px 320px;
	grid-auto-flow: row dense;
	line-height: 30px;

	@media screen and (min-width: 768px) {
		padding: 3rem;
	}

	@media screen and (max-width: 767px) {
		padding: 2rem;
	}

	@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
		& > div:nth-child(1) {
			-ms-grid-row:1; -ms-grid-column:1;
			margin-right: 30px;
		}

		& > div:nth-child(2) {
			-ms-grid-row:1; -ms-grid-column:2;
			margin-right: 30px;
		}

		& > div:nth-child(3) {
			-ms-grid-row:1; -ms-grid-column:3;
		}
	}
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
	box-shadow: -1px 1px 2px 0px rgba(200, 200, 200, 0.4);
	-webkit-box-shadow: -1px 1px 2px 0px rgba(200, 200, 200, 0.4);
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
		font-size: 1.1rem;
		-webkit-transition: -webkit-transform 1s ease-in-out;
		transition: -webkit-transform 1s ease-in-out;
	}

	&:hover img {
		opacity: 0.5;
		transition: all 0.5s ease-in-out;
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

const CloseModalBtn = styled.div`
	position: absolute;
	top: 6px;
	right: 12px; 
	font-size: 24px;

	& > i {
		cursor: pointer
	}
`

const ModalContainer = styled.div`
	display: flex;
	height: 400px;

	& > div:nth-child(1), div:nth-child(3){
		width: 50px;
		position: relative;

		& > i {
			font-size: 24px;
			position: absolute;
			top: 50%;
			left: 14px;
			cursor: pointer;
		}
	}

	& > div:nth-child(2) {
		flex: 1;
	}
`

const DetailContainer = styled.div`
	display: flex;
	padding: 20px 50px 50px 50px;
    margin: 32px auto;

	& > div:nth-child(1) {
		width: 200px;
		margin-right: 30px;
		& > img {
			width: 100%;
		}
	}

	& > div:nth-child(2) {
		flex: 1;
	}
`

const customStyles = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.75)'
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		width: '800px',
		height: '400px',
		padding: '30px',
		transform: 'translate(-50%, -50%)'
	}
};

class Works extends Component {
    constructor(props) {
        super(props);
        this.state = {
			index: 0,
            isDetailModalOn: false
        }
    }

    openDetailModal = (index) => {
		this.setState({
			index,
			isDetailModalOn: true
		})
    }

	closeDetailModal = () => {
		this.setState({
			isDetailModalOn: false
		})
	}

	getLeftContent = () => {
		let tmpIndex = this.state.index - 1
		this.setState({
			index: this.state.index - 1 < 0 ? images.length - 1 : tmpIndex,
			isDetailModalOn: true
		})
	}

	getRightContent = () => {
		let tmpIndex = this.state.index + 1
		this.setState({
			index: this.state.index + 1 >= images.length ? 0 : tmpIndex,
			isDetailModalOn: true
		})
	}

    render() {
      const { isDisplayed } = this.props;
      const { index, isDetailModalOn } = this.state;

      return(
        <Fragment>
          <CSSTransitionGroup 
          transitionName="Transition"
          transitionAppear={true}
          transitionAppearTimeout={5000}
          transitionEnter={true}
          transitionLeave={false} >
            <Main isDisplayed = {isDisplayed}>
              <Container>
                <Grid>
                  <ItemMedium>
                      {/* <NavLink to='/Detail/1' style={navLinkStyle}>
                          <img src={Mealcheck} alt="profile" width="100%" height="100%" />
                          <div>Meal Check</div>
                      </NavLink> */}
                      <span onClick={() => this.openDetailModal(0)} style={navLinkStyle}>
                          <img src={Mealcheck} alt="profile" width="100%" height="100%" />
                          <div>Meal Check</div>
                      </span>
                  </ItemMedium>
                  <Item>
                      <span onClick={() => this.openDetailModal(1)} style={navLinkStyle}>
                          <img src={Koen} alt="profile" width="100%" height="100%" />
                          <div>Koen Mobile</div>
                      </span>
                  </Item>
                  <Item>
                      <span onClick={() => this.openDetailModal(2)}  style={navLinkStyle}>
                          <img src={Plant} alt="profile" width="100%" height="100%" />
                          <div>HanAra Insight</div>
                      </span>
                  </Item>
                  <Item>
                      <span onClick={() => this.openDetailModal(3)}  style={navLinkStyle}>
                          <img src={BookFishing} alt="profile" width="100%" height="100%" />
                          <div>Book Fishing</div>
                      </span>
                  </Item>
                </Grid>
              </Container>
            </Main>
            <Modal
              isOpen={isDetailModalOn}
              onRequestClose={this.closeDetailModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <CloseModalBtn>
                <i className="fa fa-close" onClick={this.closeDetailModal}></i>
              </CloseModalBtn>
			  <ModalContainer>
				  <div>
				  	<i className="fa fa-chevron-left" onClick={this.getLeftContent}></i>
				  </div>
				  <div>
					<DetailContainer>
						<div>
							<img src={images[index]} alt="Detail" />
						</div>
						<div dangerouslySetInnerHTML={{__html: contents[index]}}>
						</div>
					</DetailContainer>
				  </div>
				  <div>
				  	<i className="fa fa-chevron-right" onClick={this.getRightContent}></i>
				  </div>
			  </ModalContainer>
            </Modal>
          </CSSTransitionGroup>
        </Fragment>
    )
  }
} 

export default Works;