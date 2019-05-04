import React,{Component} from 'react'; 
import { Route } from 'react-router-dom';
import { Header, Works, About, Detail } from '../components';

class Main extends Component { 
    render() {
        return (
            <div>
                <Header />
                <Route exact path="/" component={Works}/>
                <Route path="/about" component={About}/>
                <Route path="/Detail" component={Detail}/>
            </div>
        )
    }
}

export default Main;          
