import { Component } from 'react';
import { Route, Switch } from 'react-router';

import './css/css-reset.css';
import './css/general_styles.css';

import Header from './layout/header.component/header';
import Aside from  './layout/aside.component/aside';
import Notification from './layout/notification.component/Notification';

import TimeOverview from './page/timeOverview.component/TimeOverview';
import GeneralsOverview from './page/generalsOverview.component/GeneralsOverview';
import ViewsOverview from './page/viewsOverview.component/ViewsOverview';
import UserOverview from './page/userOverview.component/UserOverview';


class App extends Component {

    constructor(props) {

        super(props);

        const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'+ 
        'dolor sit amet consectetur, adipisicing elit.'; 

        this.state = { 
            Notifications: [
                {id: 'noti001', text: '1'+txt},
                {id: 'noti002', text: '2'+txt},
                {id: 'noti003', text: '3'+txt},
                {id: 'noti004', text: '4'+txt}
            ],

            IsSideBarOpen: true,
            IsNotificationOpen: false
        };

        this.switchSideBarHandler = this.switchSideBarHandler.bind(this);
        this.switchNotificationHandler = this.switchNotificationHandler.bind(this);
        this.removeNotificationHandler = this.removeNotificationHandler.bind(this);
    }

    switchSideBarHandler(){
        this.setState((state) => ({
            IsSideBarOpen: !state.IsSideBarOpen
        }));
    }

    switchNotificationHandler(){
        this.setState((state) => ({
            IsNotificationOpen: !state.IsNotificationOpen
        }));
    }

    removeNotificationHandler(id){

        const newArr = this.state.Notifications.filter((current) => {
            return current.id !== id;
        });

        this.setState({ Notifications: newArr});

    }

    render() { 

        const { IsSideBarOpen } = this.state;
        const { Notifications } = this.state;

        return (
            <Switch>
    
                <Route path={'/'} exact={true} render={() => {
    
                    return ( <div id="outside-container">
    
                            <Aside isSideBarOpen={IsSideBarOpen} /> 
    
                            <div id="inside-container" 
                                style={(IsSideBarOpen)? {width: '82%', left:'18%'}: null}>
                                
                                <Header onIsSidebarOpen={this.switchSideBarHandler} 
                                    onNotificationAmount={Notifications.length}
                                    onIsNotificationOpen={this.switchNotificationHandler} />
    
                                <main style={(IsSideBarOpen)? {width: '82%', left:'18%'}: null}>
                                    
                                    <div className="ctn">
                                        <TimeOverview />

                                        <GeneralsOverview />
                                        
                                        <ViewsOverview />

                                        <UserOverview />

                                    </div>

                                </main>
    
                            </div>

                            {(this.state.IsNotificationOpen) && 
                            <Notification notifications={Notifications} 
                                onRemoveNotification={this.removeNotificationHandler}
                                onIsNotificationOpen={this.switchNotificationHandler} /> }	
    
                        </div>  
                    );
    
                }} />
    
            </Switch>
        );
    }
}
 


export default App;
