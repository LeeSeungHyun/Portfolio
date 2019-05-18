import React,{Component} from 'react'; 
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Works, About, Detail } from '../components';

const MainContainer = styled.div`
    min-width: 320px;
`

class Main extends Component { 
    constructor(props){
        super(props);
        this.menuClickEvent = this.menuClickEvent.bind(this)
    }
    
    state = {
        isDisplayed: false
    }

    menuClickEvent(isDisplayed) {
        this.setState({
            isDisplayed : isDisplayed
        })
    }

    render() {
        const { isDisplayed }  = this.state;
        return (
            <MainContainer>
                <Header menuClick={this.menuClickEvent}/>
                {/* <Route exact path="/"  component={Works} />
                <Route path="/about" component={About} /> */}
                {/* <Route path="/Detail/:id" component={Detail} isDisplayed={isDisplayed}/> */}
                <Route path="/Detail/:id"  render={(props) => <Detail {...props} isDisplayed={isDisplayed}/>} />
                <Route exact path="/" render={() => <Works isDisplayed={isDisplayed}/>} />
                <Route path="/about" render={() => <About isDisplayed={isDisplayed}/>} />
            </MainContainer>
        )
    }
}

export default Main;          
