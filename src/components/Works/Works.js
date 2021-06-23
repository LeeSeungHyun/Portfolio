import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link, NavLink } from 'react-router-dom';
import { Koen, Mealcheck, Plant, BookFishing }  from '../../assets/img';
import Modal from 'react-modal';

const images = [ Mealcheck, Koen, Plant, BookFishing ];
const contents = [
	`<h2>Meal Check 프로그램(<a href="http://meal.bnftech.com" target="_blank">http://meal.bnftech.com</a>)</h2>
	<p>사내 식사 신청 및 관리 프로그램 개발 (2016.02 ~ 2016.05)</p>
	<ul>
		<li>식사 신청</li>
		<li>그 달의 식사 신청 개수 확인</li>
		<li>관리자 주간, 월간 리포트</li>
		<li>식단표 업데이트</li>
		<li>공제 금액확인 기능 개발</li>
	</ul>
	<p>사용기술: C#, Asp.Net MVC5, Bootstrap</p>`,

	`<h2>발전 운전 정보 모바일시스템 (주)한국남동발전</h2>
	<p>Web Admin 개발 (2016.09 ~ 2017.05)</p>
	<ul>
		<li>태그 관리</li>
		<li>사용 통계</li>
		<li>유저 관리</li>
		<li>공지사항 기능 구현</li>
		<li>Secure coding을 통한 보안 이슈 처리</li>
	</ul>
	<p>사용기술: Spring Framework, Angular.js</p>`,

	`<h2>HanAra Insight</h2>
	<p>Web기반 발전소 상태 모니터링 프로그램 개발<br />(2018.02 ~ 2019.03)</p>
	<ul>
		<li>Tag Information</li>
		<li>Chart management</li>
		<li>Mimic 프로그램 Front-end 개발</li>
		<li>Angular Material Design을 이용한 웹 퍼블리싱</li>
	</ul>
	<p>사용기술: javascript(es6), typescript, angular, Asp.net API</p>`,

	`<h2>책 SNS 사이트(<a href="https://bookfishing.site" target="_blank">https://bookfishing.site</a>)</h2>
	<p>유투브 노마드코더에서 주최한 해커톤 대회<br />(2020.02 ~ 2020.04)</p>
	<ul>
		<li>Social 로그인 기능 (facebook, google)</li>
		<li>프로필, 책 리스트, 책 검색</li>
		<li>Kakao Book API를 이용한 책 등록하기</li>
		<li>댓글 등등</li>
	</ul>
	<p>사용 기술: javascript(es6), Vue, Node.js, Heroku</p>`
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
	justify-content: center;
	align-items: center;
	height: 400px;

	& > div:nth-child(1) {
		width: 220px;
		padding: 20px;
		& > img {
			width: 100%;
		}
	}

	& > div:nth-child(2) {
		flex: 1;
		padding: 20px;
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
		width: '724px',
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
						<div 
							dangerouslySetInnerHTML={{__html: contents[index]}}>
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