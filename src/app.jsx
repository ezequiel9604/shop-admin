import React, { Component } from 'react';

import './css/css-reset.css';
import './app.css';

import Header from './header.component/header';
import Aside from './aside.component/aside';

class App extends Component {
    state = {  }
    render() { 
        return (  
            <div id="outside-container">

                <Aside />

                <div id="inside-container">
                    
                    <Header />

                    <main>
                        
                        
                    </main>

                </div>	
                {/*end of inside container*/}

            </div>
            
        );
    }
}
 
export default App;