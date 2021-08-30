import {Component} from 'react';
import { Route, Switch } from 'react-router';

import './css/css-reset.css';
import './css/general_styles.css';

import Header from './layout/header.component/header';
import Aside from  './layout/aside.component/aside';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            IsSideBarOpen: false
        }

        this.showSidebarHandler = this.showSidebarHandler.bind(this);
    }

    showSidebarHandler(){
        this.setState((state) => ({
            IsSideBarOpen: !state.IsSideBarOpen
        }));
    }

    render() { 

        const { IsSideBarOpen } = this.state;

        return (
            <Switch>
    
                <Route path={'/'} exact={true} render={() => {
    
                    return ( <div id="outside-container">
    
                            <Aside isSideBarOpen={IsSideBarOpen} /> 
    
                            <div id="inside-container" 
                                style={(IsSideBarOpen)? {width: '82%', left:'18%'}: null}>
                                
                                <Header onIsSidebarOpen={this.showSidebarHandler} />
    
                                <main>
                                    
                                    {/* content goes here */}
                                </main>
    
                            </div>	
    
                        </div>  
                    );
    
                }} />
    
            </Switch>
        );
    }
}
 


export default App;
