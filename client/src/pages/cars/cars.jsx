import React, { Component } from 'react'
import Dashboard from '../../hoc/dashboard';
import {connect} from 'react-redux';
import {cars} from '../../redux/middleware/middleware';
class CarsComponent extends Component {
 componentDidMount(){
     this.props.fetch();
 }
    render() {
        const {pending, fail, data}=this.props.cars;
        console.log(this.props.users)
        return (
            <div>
                {

                }
            </div>
        )
    }
}

const mapStateToProps=({cars, users})=>{
    return{
        cars,
        users
    }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      fetch(){
          dispatch(cars())
      }
  }
}

const Cars=connect(mapStateToProps, mapDispatchToProps)(CarsComponent)

export default Dashboard(Cars);
