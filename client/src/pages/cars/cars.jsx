import React, { Component } from 'react'
import Dashboard from '../../hoc/dashboard';
import {connect} from 'react-redux';
import {cars} from '../../redux/middleware/middleware';
class Cars extends Component {
 componentDidMount(){
     this.props.fetch();
 }
    render() {
        const {pending, fail, data}=this.props.cars;
        console.log(data)
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

const mapDispatchToProps=(dispatch)=>{
  return{
      fetch(){
          dispatch(cars())
      }
  }
}

export default Dashboard(Cars);
