import React from 'react';
import {BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom';
import LoginForm from './pages/login/login';
import Users from './pages/users/users';
import NotFound from './notFound/notFound';
import Cars from './pages/cars/cars';
const Routes=()=>{
    return(
        <div>
           <Router>
             <Switch>
                <Route exact path="/" component={LoginForm} />
                <Route exact path="/notFound" component={NotFound} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/cars" component={Cars}/>
              </Switch>
           </Router>
        </div>
    )
}

export default Routes;