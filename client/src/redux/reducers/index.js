import {combineReducers} from 'redux';
import {loginReducer} from './login';
import {usersReducer} from './users';
import {carsReducer} from './cars';
import {modalReducer} from './modals';
const rootReducer=combineReducers({
    logins:loginReducer,
    users:usersReducer,
    cars:carsReducer,
    modals:modalReducer
})

export default rootReducer;