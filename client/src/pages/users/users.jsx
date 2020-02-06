import React, { Component } from 'react'
import Dashboard from '../../hoc/dashboard';
import {Row, Col} from 'antd';
import {connect} from 'react-redux';
import {fetch} from '../../redux/middleware/middleware';
import TableUsers from '../../components/tableUsers/tableUsers'
class UsersComponent extends Component {
    componentDidMount(){
        this.props.fetch();
    }
    render() {
        const {pending,fail, data} = this.props.users;
        console.log(data);
        if(fail){
            return <h1>Error !!!</h1>
        }
        return (
            <Row>
                {
                    pending ? <h1>Loading ... </h1>:<Col md={{span:24,offset:0}}><TableUsers data={data}/></Col>
                }
            </Row>
        )
    }
}

const mapStateToProps=({users})=>{
    return{
        users
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetch(){
            dispatch(fetch())
        }
    }
}
const Users=connect(mapStateToProps, mapDispatchToProps)(UsersComponent)
export default Dashboard(Users);
