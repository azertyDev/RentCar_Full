import React from 'react';
import {BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom';
import LoginForm from './pages/login/login';
import Users from './pages/users/users';
import NotFound from './notFound/notFound';
import Cars from './pages/cars/cars';
import SimpleUser from './pages/simpleUser/simpleUser';
import Register from './pages/register/register';
import UserData from './pages/account/userData';
import Admin from './pages/admins/admin';

const Routes=()=>{
    return(
        <div>
           <Router>
             <Switch>
                <Route exact path="/" component={LoginForm} />
                <Route exact path="/notFound" component={NotFound} />
                <Route exact path="/users" component={Users} />
                <Route exact path={['/cars', '/all/cars']} component={Cars}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/admins" component={Admin}/>
                <Route exact path="/user/:name" component={SimpleUser}  />
                <Route exact path="/user/:name/:id" component={UserData}  />
              </Switch>
           </Router>
        </div>
    )
}

export default Routes;