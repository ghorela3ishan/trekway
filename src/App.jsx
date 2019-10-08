import React, { Component} from "react";
import {HashRouter, Switch, Route} from 'react-router-dom';
import routes from './routes';
import AppTopbar from './components/AppTopbar'
import { connect } from 'react-redux';
import LoginContainer  from './components/login/LoginContainer';

class App extends Component {
    
    render() {
        return(
            <div style={{backgroundColor: '#e0e2e5', height: '100vh'}}>
                <HashRouter>
                    {  this.props.sessionData.isAuthenticated ?  
                   ( <div>
                        <AppTopbar/>
                            <div style={{marginTop: '11vh'}}>
                                <Switch>
                                    { routes.map( route => <Route  {...route}/>) }
                                </Switch>
                        </div>
                     </div>) :  
                     <div>
                        <Route path="/login" component = {LoginContainer} />
                        <Route path="/" component = {LoginContainer} />
                        <Route Component = {LoginContainer} />
                    </div>
                    }
                </HashRouter>
            </div>
        
        );
    }
}

const mapStateToProps = (state) => {
    return{
        sessionData : state.sessionData
    }
}

export default connect(mapStateToProps,null)(App)
 