import { Component } from 'react';
import { Route, Switch } from 'react-router';

import './css/css-reset.css';
import './css/general_styles.css';

import Header from './layout/header.component/Header';
import Aside from './layout/aside.component/Aside';
import Notification from './layout/notification.component/Notification';
import ChatSidebar from './layout/chatSidebar.componet/ChatSidebar';

import Home from './page/home.component/Home';
import Client from './page/client.component/Client';
import Profile from './page/profile.component/Profile';
import Inventory from './page/inventory.component/Inventory';


class App extends Component {

    constructor(props) {

        super(props);

        const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'+ 
        'dolor sit amet consectetur, adipisicing elit.'; 

        this.state = { 
            Notifications: [
                {id: 'noti001', text: '1 '+txt},
                {id: 'noti002', text: '2 '+txt},
                {id: 'noti003', text: '3 '+txt},
                {id: 'noti004', text: '4 '+txt},
                {id: 'noti005', text: '5 '+txt},
                {id: 'noti006', text: '6 '+txt}
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
                                        <Home />
                                    </div>
                                    <ChatSidebar />
                                </main>
    
                            </div>

                            {(this.state.IsNotificationOpen) && 
                            <Notification notifications={Notifications} 
                                onRemoveNotification={this.removeNotificationHandler}
                                onIsNotificationOpen={this.switchNotificationHandler} /> }	
    
                        </div>  
                    );
    
                }} />

                <Route path={'/clients'} render={() => {
                    
                    return ( <div id="outside-container">

                            <Aside isSideBarOpen={IsSideBarOpen} /> 

                            <div id="inside-container" 
                                style={(IsSideBarOpen)? {width: '82%', left:'18%'}: null}>
                                
                                <Header onIsSidebarOpen={this.switchSideBarHandler} 
                                    onNotificationAmount={Notifications.length}
                                    onIsNotificationOpen={this.switchNotificationHandler} />

                                <main style={(IsSideBarOpen)? {width: '82%', left:'18%'}: null}>
                                    
                                    <div className="ctn">
                                        <Client />
                                    </div>
                                    <ChatSidebar />
                                </main>

                            </div>

                            {(this.state.IsNotificationOpen) && 
                            <Notification notifications={Notifications} 
                                onRemoveNotification={this.removeNotificationHandler}
                                onIsNotificationOpen={this.switchNotificationHandler} /> }	

                        </div>  
                    );

                }} />

                <Route path={'/profile'} render={() => {
                    
                    return ( <div id="outside-container">

                            <Aside isSideBarOpen={IsSideBarOpen} /> 

                            <div id="inside-container" 
                                style={(IsSideBarOpen)? {width: '82%', left:'18%'}: null}>
                                
                                <Header onIsSidebarOpen={this.switchSideBarHandler} 
                                    onNotificationAmount={Notifications.length}
                                    onIsNotificationOpen={this.switchNotificationHandler} />

                                <main style={(IsSideBarOpen)? {width: '82%', left:'18%'}: null}>
                                    
                                    <div className="ctn">
                                        <Profile />
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

                <Route path={'/inventory'} render={() => {
                    
                    return ( <div id="outside-container">

                            <Aside isSideBarOpen={IsSideBarOpen} /> 

                            <div id="inside-container" 
                                style={(IsSideBarOpen)? {width: '82%', left:'18%'}: null}>
                                
                                <Header onIsSidebarOpen={this.switchSideBarHandler} 
                                    onNotificationAmount={Notifications.length}
                                    onIsNotificationOpen={this.switchNotificationHandler} />

                                <main style={(IsSideBarOpen)? {width: '82%', left:'18%'}: null}>
                                    
                                    <div className="ctn">
                                        <Inventory />
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
