(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(n,e,t){n.exports=t.p+"static/media/mobile-full.30079fad.png"},31:function(n,e,t){n.exports=t.p+"static/media/mealcheck-full.073996a6.png"},32:function(n,e,t){n.exports=t.p+"static/media/memopad-full.0779497f.png"},33:function(n,e,t){n.exports=t.p+"static/media/plant-full.b8280adc.png"},38:function(n,e,t){n.exports=t.p+"static/media/profile.60a9cca4.jpg"},40:function(n,e,t){n.exports=t(65)},45:function(n,e,t){},65:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),r=t(18),o=t.n(r),l=(t(45),t(8)),c=t(9),s=t(11),p=t(10),u=t(12),d=t(1),f=t(4),m=t(14),b=t(16),h=t(2),x=t(15);function g(){var n=Object(d.a)(["\n    font-weight: 400;\n    font-size: 16px;\n    padding: 20px 40px;\n   \n    & > a:first-child {\n        font-family: 'wonoland' !important;\n        color: rgba(0,0,0,1);\n        font-size: 24px;\n    }\n\n    & a:not(:first-child) {\n        font-family: 'Galano' !important;\n        color: #B8B8B8;\n    }\n\n    & a:not(:first-child):hover {\n        color: #000;\n    }\n\n    & a:last-child {\n        color: rgba(0,0,0,1);\n        font-size: 20px;\n    }\n\n    & > a:first-child{\n        float: left;\n    }\n\n    & > a:not(:first-child){\n        float: right;\n    }\n\n    & > a:last-child {\n        display: none;\n    }\n\n    & > a:nth-child(3) {\n        margin-right: 10px;\n    }\n\n    &::after{\n        display: block;\n        clear: both;\n        content: '';\n    }\n\n    @media screen and (max-width: 767px) {\n        position: relative;\n        padding: 20px 30px;\n\n        & > a:nth-child(3) {\n            margin-right: 0;\n        }\n\n        & > a:first-child {\n            float: ","\n\n            display:  ","\n\n            text-align:  ","\n        }\n\n        & > a:not(:first-child) {\n            display: none;\n            display:  ","\n\n            float: ","\n        }\n\n        & > a:last-child {\n            float: right;\n            display: block;\n            position:","\n\n            right:  ","\n\n            top:  ","\n\n            padding:  ","\n        }\n\n        & > a:nth-child(2) {\n            margin-top:  ","    \n        }\n\n        & > a:nth-child(2),\n        & > a:nth-child(3) {\n            text-align: center;\n            padding:  ","\n        }\n    }\n"]);return g=function(){return n},n}var y=h.b.div(g(),function(n){if(n.displayMenu)return"none"},function(n){if(n.displayMenu)return"block"},function(n){if(n.displayMenu)return"left"},function(n){if(n.displayMenu)return"block"},function(n){if(n.displayMenu)return"none"},function(n){if(n.displayMenu)return"absolute"},function(n){if(n.displayMenu)return 0},function(n){if(n.displayMenu)return 0},function(n){if(n.displayMenu)return"20px 30px"},function(n){if(n.displayMenu)return"60px"},function(n){if(n.displayMenu)return"15px 10px"}),v={color:"#000"},k=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(s.a)(this,Object(p.a)(e).call(this,n))).state={isDisplayMenu:!1},t.toggleMenu=t.toggleMenu.bind(Object(m.a)(Object(m.a)(t))),t}return Object(u.a)(e,n),Object(c.a)(e,[{key:"toggleMenu",value:function(){var n=this.props.menuClick;this.state.isDisplayMenu?(this.setState({isDisplayMenu:!1}),n(!1)):(this.setState({isDisplayMenu:!0}),n(!0))}},{key:"render",value:function(){var n=this.state.isDisplayMenu;return a.a.createElement(y,{displayMenu:n},a.a.createElement(f.b,{exact:!0,to:"/"},"SEUNGHYUN"),a.a.createElement(f.b,{to:"/about",onClick:this.toggleMenu,activeStyle:v},"About"),a.a.createElement(f.b,{exact:!0,to:"/",onClick:this.toggleMenu,activeStyle:v},"Works"),a.a.createElement("a",{href:"#",onClick:this.toggleMenu},n?a.a.createElement("i",{className:"fa fa-close"}):a.a.createElement("i",{className:"fa fa-bars"})))}}]),e}(i.Component),E=t(30),w=t.n(E),j=t(31),O=t.n(j),M=(t(32),t(33)),D=t.n(M);function C(){var n=Object(d.a)(["\n    grid-row-end: span 2;\n"]);return C=function(){return n},n}function S(){var n=Object(d.a)(["\n    grid-row-end: span 2;\n"]);return S=function(){return n},n}function T(){var n=Object(d.a)(["\n    grid-column-end: auto;\n"]);return T=function(){return n},n}function A(){var n=Object(d.a)(["\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    grid-column-start: auto;\n    grid-row-start: auto;\n    color: #fff;\n    background-size: cover;\n    background-position: center;\n    box-shadow: -1px 1px 5px 0px rgba(200, 200, 200, 0.4);\n    -webkit-box-shadow: -1px 1px 5px 0px rgba(200, 200, 200, 0.4);\n    -webkit-transition: -webkit-transform 0.3s ease-in-out;\n    transition: -webkit-transform 0.3s ease-in-out;\n    cursor: pointer;\n    counter-increment: item-counter;\n\n    &:hover {\n        -webkit-transform: scale(1.02);\n        transform: scale(1.02);\n        background-color: #778899;\n    }\n\n    & div {\n        display: none;\n    }\n\n    &:hover div {\n        display: block;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        font-weight: 900;\n        z-index: 1;\n        color: #fff;\n        font-size: 1.1rem;\n        -webkit-transition: -webkit-transform 1s ease-in-out;\n        transition: -webkit-transform 1s ease-in-out;\n    }\n\n    &:hover img {\n        opacity: 0.5;\n        transition: all 0.5s ease-in-out;\n    }\n\n"]);return A=function(){return n},n}function z(){var n=Object(d.a)(["\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));\n    grid-auto-rows: 300px;\n    grid-auto-flow: row dense;\n    line-height: 20px;\n\n    @media screen and (min-width: 768px) {\n        padding: 4rem;\n    }\n\n    @media screen and (max-width: 767px) {\n        padding: 2rem;\n    }\n"]);return z=function(){return n},n}function N(){var n=Object(d.a)(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    font-size: 12px;\n    font-weight: 100;\n    letter-spacing: 1px;\n    font-family: 'Roboto', sans-serif;\n\n    @supports (display: grid) {\n        display: block;\n    }\n"]);return N=function(){return n},n}function B(){var n=Object(d.a)(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    font-size: 13px;\n    font-weight: 100;\n    letter-spacing: 1px;\n    font-family: 'Roboto', sans-serif;\n\n    @media screen and (max-width: 767px){\n        display:  ",";\n    }\n"]);return B=function(){return n},n}var G=h.b.div(B(),function(n){return n.isDisplayed?"none":"block"}),H=h.b.div(N()),L=h.b.div(z()),I=h.b.div(A()),J=(Object(h.b)(I)(T()),Object(h.b)(I)(S())),R=(Object(h.b)(I)(C()),{textDecoration:"none",width:"100%",height:"100%"}),U=function(n){function e(n){return Object(l.a)(this,e),Object(s.a)(this,Object(p.a)(e).call(this,n))}return Object(u.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n=this.props.isDisplayed;return a.a.createElement(i.Fragment,null,a.a.createElement(x.CSSTransitionGroup,{transitionName:"Transition",transitionAppear:!0,transitionAppearTimeout:5e3,transitionEnter:!0,transitionLeave:!1},a.a.createElement(G,{isDisplayed:n},a.a.createElement(H,null,a.a.createElement(L,null,a.a.createElement(J,null,a.a.createElement(f.b,{to:"/Detail/1",style:R},a.a.createElement("img",{src:O.a,alt:"profile",width:"100%",height:"100%"}),a.a.createElement("div",null,"Meal Check"))),a.a.createElement(I,null,a.a.createElement(f.b,{to:"/Detail/2",style:R},a.a.createElement("img",{src:w.a,alt:"profile",width:"100%",height:"100%"}),a.a.createElement("div",null,"Koen Mobile"))),a.a.createElement(I,null,a.a.createElement(f.b,{to:"/Detail/3",style:R},a.a.createElement("img",{src:D.a,alt:"profile",width:"100%",height:"100%"}),a.a.createElement("div",null,"HanAra Insight"))))))))}}]),e}(i.Component),W=t(38),_=t.n(W);function F(){var n=Object(d.a)(["\n    padding: 20px 200px 50px 100px;\n    margin: 32px auto;\n    display: flex;\n\n    & > div:nth-child(1) {\n        flex: 2;\n    }\n\n    & > div:nth-child(2) {\n        flex: 3;\n        margin-left: 40px;\n        margin-right: 100px;\n        line-height: 2em;\n    }\n\n    & img {\n        width: 100%;\n    }\n\n    & p {\n        text-align: left;\n        /* color: rgba(0, 0, 0, 0.53); */\n    }\n\n    & p:nth-child(1) {\n        margin-top: 2px;\n    }\n\n    transition: visibility 0s, opacity 0.5s linear;\n    @media screen and (max-width: 767px){\n        display:  ",";\n        \n        padding: 20px 30px 50px 30px;\n        & > div:nth-child(2) {\n            margin-left: 0;\n            margin-top: 30px;\n        }\n    }\n"]);return F=function(){return n},n}var P=h.b.div(F(),function(n){return n.isDisplayed?"none":"block"}),K=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n=this.props.isDisplayed;return a.a.createElement(x.CSSTransitionGroup,{transitionName:"Transition",transitionAppear:!0,transitionAppearTimeout:5e3,transitionEnter:!0,transitionLeave:!1},a.a.createElement(P,{isDisplayed:n},a.a.createElement("div",null,a.a.createElement("img",{src:_.a,alt:"profile"})),a.a.createElement("div",null,a.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694 \uc6f9 \uac1c\ubc1c\uc790 \uc774\uc2b9\ud604\uc785\ub2c8\ub2e4. \uc57d 4\ub144\uac04 \uc9c1\uc7a5\uc0dd\ud65c\uc744 \ud558\uace0 \uc788\uace0, \ud604\uc7ac \uc131\ub0a8\uc5d0\uc11c \uac70\uc8fc\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. "),a.a.createElement("p",null,"\ub204\uad70\uac00\uc5d0\uac8c\ub294 \uaf2d \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc5b4\ub5a0\ud55c \uae30\uc220\uc774 \ud544\uc694\ud558\uc8e0. \uac1c\ubc1c\uc790\ub294 \ud544\uc694\ub85c \ud558\ub294 \uc0ac\ub78c\ub4e4\uc5d0\uac8c \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud574 \uc904 \uc218 \uc788\ub294 \ub9e4\ub825\uc801\uc778 \uc9c1\uc5c5\uc911\uc5d0 \ud558\ub098\ub77c\uace0 \uc0dd\uac01\ub429\ub2c8\ub2e4. \ub204\uad70\uac00\uc5d0\uac8c \ub3c4\uc6c0\uc774 \ub41c\ub2e4\ub294 \uac83\uc740 \ub108\ubb34\ub098\ub3c4 \uc990\uac70\uc6b4 \uc77c\uc785\ub2c8\ub2e4."),a.a.createElement("p",null,"\uc800\ub3c4 \ub3c4\uc6c0\uc774 \ub418\ub294 \uadf8\ub7f0 \uc0ac\ub78c\uc774 \ub418\uace0 \uc2f6\uc2b5\ub2c8\ub2e4. :)"))))}}]),e}(i.Component);function V(){var n=Object(d.a)(["\n    padding: 20px 200px 50px 100px;\n    margin: 32px auto;\n    display: flex;\n\n    & > div:nth-child(1) {\n        flex: 1;\n    }\n\n    & > div:nth-child(2) {\n        flex: 2;\n        margin-left: 40px;\n        line-height: 2em;\n    }\n\n    & img {\n        width: 100%;\n    }\n\n    & p{\n        margin-top: 2px;\n        text-align: left;\n    }\n\n    @media screen and (max-width: 767px){\n        display:  ",";\n        padding: 20px 30px 50px 30px;\n        & > div:nth-child(2) {\n            margin-left: 0;\n            margin-top: 30px;\n        }\n    }\n"]);return V=function(){return n},n}var Y=[O.a,w.a,D.a],q=['<p>\ud68c\uc0ac\uc5d0\uc11c \uc911\uc2dd \uc774\uc6a9\uc2dc \uc678\ubd80\uc5c5\uccb4\ub97c \uc774\uc6a9\ud558\uc600\uc2b5\ub2c8\ub2e4.</p> <p>\ud504\ub85c\uadf8\ub7a8\uc744 \ub9cc\ub4e4\uae30 \uc804\uc5d0\ub294 \uc2dd\ub2e8\ud45c\uc5d0\ub2e4 \uc2dd\uc0ac\uc2e0\uccad\uc744 \uc9c1\uc811\ud574\uc57c \ud588\uc9c0\ub9cc,\n\uac1c\ubc1c \ud6c4 \ud734\ub300\ud3f0, PC\ub97c \uc774\uc6a9\ud574\uc11c \uac04\ub2e8\ud558\uac8c \uc2dd\uc0ac\uc2e0\uccad\uc744 \ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.</<p> <p>\uae30\ub2a5\uc740 \uc2dd\uc0ac \uc2e0\uccad, \uc6d4\ubcc4 \uc2dd\uc0ac \uc2e0\uccad \uc218 \ud655\uc778, \ud504\ub85c\ud544 \uc218\uc815,\n\uc8fc\uac04, \uc6d4\uac04 \ub9ac\ud3ec\ud2b8 \ub4f1\ub4f1 \uc788\uace0, \uc800\uc640 \ubca0\ud2b8\ub0a8 \uac1c\ubc1c\uc790 \ud55c \ubd84\uacfc \uac19\uc774 \uc81c\uc791\ud558\uc600\uc2b5\ub2c8\ub2e4. <p/>\n<p>\uae30\ud68d \ubd80\ud130 \ud504\ub860\ud2b8\uc564\ub4dc, \ubc31\uc5d4\ub4dc, \ubc30\ud3ec\uae4c\uc9c0 \uc804\uccb4\uc801\uc778 \uc6f9 \uac1c\ubc1c \uacfc\uc815\uc744 \uacbd\ud5d8\ud55c \uac1c\uc778\uc801\uc73c\ub85c \uae30\uc5b5\uc5d0 \ub9ce\uc774 \ub0a8\ub294 \ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4.\nURL : <a href="http://meal.bnftech.com" target="_blank">meal.bnftech.com</a></p>\n<p>\uc0ac\uc6a9\uae30\uc220: C#, Asp.Net MVC5, Bootstrap, Html, Css, Javascript</p>',"<p>(\uc8fc)\ud55c\uad6d\ub0a8\ub3d9\ubc1c\uc804\uacfc \uc9c4\ud589\ud588\ub358 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.</p><p>\uc218\uc9d1\ud55c \ubc1c\uc804\uc18c\uc758 \ub370\uc774\ud130\ub97c \uc2dc\uac01\uc801\uc73c\ub85c \ubaa8\ubc14\uc77c \ud654\uba74\uc744 \ud1b5\ud574\uc11c\ub3c4 \ubcfc \uc218 \uc788\uac8c\n\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud504\ub85c\uadf8\ub7a8 \uc0ac\uc6a9 \uc720\uc800, \uae30\ub2a5 \uc0ac\uc6a9 \ud1b5\uacc4, Tag\uc815\ubcf4 \uad00\ub9ac, \uacf5\uc9c0\uc0ac\ud56d \ub4f1\ub85d\uc744 \uad00\ub9ac\ud558\ub294 Web admin \ud504\ub85c\uadf8\ub7a8\uc744 \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4.</p>\n<p>\uc0ac\uc6a9\uae30\uc220: Java, Spring Framework, Html, Css, Angular.js</p>","<p>\ud68c\uc0ac\uc5d0\uc11c \uc81c\ud488\uac1c\ubc1c \uacc4\ud68d\uc5d0 \ub530\ub77c, Web\uae30\ubc18\uc73c\ub85c \ubc1c\uc804\uc18c \ub370\uc774\ud130 \uac10\uc2dc \ud504\ub85c\uadf8\ub7a8\uc744 \uc81c\uc791\ud558\uc600\uc2b5\ub2c8\ub2e4.</p>\n<p>\ud0dc\uadf8(\ubc1c\uc804\uc18c \ub370\uc774\ud130 \uc2e0\ud638) \uc815\ubcf4\ub97c \uad00\ub9ac\ud558\ub294 \ud398\uc774\uc9c0, \uacf5\uc815\ud654\uba74 \ubaa8\ub2c8\ud130\ub9c1, \ucc28\ud2b8 \uad00\ub9ac \ud398\uc774\uc9c0 \uae30\ub2a5 \uad6c\ud604\uc744 \ud558\uc600\uace0,\n\uc804\uccb4\uc801\uc778 \uc6f9 \ud398\uc774\uc9c0 \ub808\uc774\uc544\uc6c3 \uc81c\uc791\ub3c4 \uac19\uc774 \ud558\uc600\uc2b5\ub2c8\ub2e4.</p>\n<p>\uc0ac\uc6a9\uae30\uc220: javascript(es6), typescript, angular, Asp.net API</p>"],Q=h.b.div(V(),function(n){return n.isDisplayed?"none":"block"}),X=function(n){var e=n.match,t=n.isDisplayed;return a.a.createElement(x.CSSTransitionGroup,{transitionName:"Transition",transitionAppear:!0,transitionAppearTimeout:5e3,transitionEnter:!0,transitionLeave:!1},a.a.createElement(Q,{isDisplayed:t},a.a.createElement("div",null,a.a.createElement("img",{src:Y[e.params.id-1],alt:"Detail"})),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:q[e.params.id-1]}})))};function Z(){var n=Object(d.a)(["\n    min-width: 320px;\n"]);return Z=function(){return n},n}var $=h.b.div(Z()),nn=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(s.a)(this,Object(p.a)(e).call(this,n))).state={isDisplayed:!1},t.menuClickEvent=t.menuClickEvent.bind(Object(m.a)(Object(m.a)(t))),t}return Object(u.a)(e,n),Object(c.a)(e,[{key:"menuClickEvent",value:function(n){this.setState({isDisplayed:n})}},{key:"render",value:function(){var n=this.state.isDisplayed;return a.a.createElement($,null,a.a.createElement(k,{menuClick:this.menuClickEvent}),a.a.createElement(b.a,{path:"/Detail/:id",render:function(e){return a.a.createElement(X,Object.assign({},e,{isDisplayed:n}))}}),a.a.createElement(b.a,{exact:!0,path:"/",render:function(){return a.a.createElement(U,{isDisplayed:n})}}),a.a.createElement(b.a,{path:"/about",render:function(){return a.a.createElement(K,{isDisplayed:n})}}))}}]),e}(i.Component);function en(){var n=Object(d.a)(["\n  .Transition-appear{\n    opacity: 0;\n  }\n  \n  .Transition-appear.Transition-appear-active{\n    opacity: 1;\n    transition: all 0.5s ease-in-out;\n  }\n"]);return en=function(){return n},n}var tn=Object(h.a)(en()),an=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement(f.a,{basename:"/portfolio"},a.a.createElement(tn,null),a.a.createElement(nn,null))}}]),e}(i.Component);o.a.render(a.a.createElement(an,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.116f2274.chunk.js.map