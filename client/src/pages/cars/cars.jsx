import React, { Component } from 'react'
import Dashboard from '../../hoc/dashboard';
import {connect} from 'react-redux';
import {cars} from '../../redux/middleware/middleware';
import obj from '../../functions/normalizer';
import TableCars from '../../components/tableCars/tableCars';
class CarsComponent extends Component {
 componentDidMount(){
     this.props.fetch();
 }
    render() {
        const {pending, fail, data}=this.props.cars;
     
        return (
            <div>
                {
                  pending?<h1>Loading...</h1>:<TableCars data={obj.norm(data)}/>
                }
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

const Cars=connect(mapStateToProps, mapDispatchToProps)(CarsComponent)

export default Dashboard(Cars);
