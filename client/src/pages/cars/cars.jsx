import React, { Component } from 'react'
import Dashboard from '../../hoc/dashboard';
import {connect} from 'react-redux';
import {cars} from '../../redux/middleware/middleware';
class Cars extends Component {
    render() {
        return (
            <div>
                cars
            </div>
        )
    }
}

const mapStateToProps=({cars})=>{
    return{
        cars
    }
}


export default Dashboard(Cars);
