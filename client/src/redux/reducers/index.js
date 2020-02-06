import {combineReducers} from 'redux';
import {loginReducer} from './login';
import {usersReducer} from './users';
import {carsReducer} from './cars';

const rootReducer=combineReducers({
    logins:loginReducer,
    users:usersReducer,
    cars:carsReducer
})

export default rootReducer;