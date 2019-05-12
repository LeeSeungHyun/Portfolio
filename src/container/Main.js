import React,{Component} from 'react'; 
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Works, About, Detail } from '../components';

const MainContainer = styled.div`
    min-width: 320px;
`

class Main extends Component { 
    render() {
        return (
            <MainContainer>
                <Header />
                <Route exact path="/" component={Works}/>
                <Route path="/about" component={About}/>
                <Route path="/Detail/:id" component={Detail}/>
            </MainContainer>
        )
    }
}

export default Main;          
