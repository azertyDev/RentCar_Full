import {combineReducers} from 'redux';
import {loginReducer} from './login';
import {usersReducer} from './users';
import {carsReducer} from './cars';
import {modalReducer} from './modals';
import {userCarsReducer} from './user/cars';
import {registerUser} from './user/register';
const rootReducer=combineReducers({
    logins:loginReducer,
    users:usersReducer,
    cars:carsReducer,
    modals:modalReducer,
    userCars:userCarsReducer,
    registers:registerUser
})

export default rootReducer;