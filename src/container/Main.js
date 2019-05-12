import React,{Component} from 'react'; 
import { Route } from 'react-router-dom';
import { Header, Works, About, Detail } from '../components';

class Main extends Component { 

    ReactCon() {
        
    }
    render() {
        return (
            <div>
                <Header />
                <Route exact path="/" component={Works}/>
                <Route path="/about" component={About}/>
                <Route path="/Detail/:id" component={Detail}/>
            </div>
        )
    }
}

export default Main;          
