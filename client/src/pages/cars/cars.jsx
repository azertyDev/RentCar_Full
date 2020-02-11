import React, { Component } from 'react'
import Dashboard from '../../hoc/dashboard';
import {Row, Col} from 'antd';
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
            <>
            <Row>
            <Col md={{span:24}}>
                {
                  pending?<h1>Loading...</h1>:<TableCars data={obj.norm(data)}/>
                }
            </Col>
            </Row>
            
            </>
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
