import React, { Component } from 'react'
import {Row, Col} from 'antd';
import Dashboard from '../../hoc/dashboard';
import TableAdmins from '../../components/adminTables/adminTables';
import {connect} from 'react-redux';
import {fetch, unfetch} from '../../redux/middleware/middleware';
class AdminComponent extends Component {
    componentDidMount(){
        this.props.dispatch(fetch());
    }
    render() {
        console.log(this.props.data)
        return (
            <Row>
                <Col>
                   {this.props.pending ? <span>Loading...</span>:<TableAdmins data={this.props.data}/>}
                </Col>
            </Row>
        )
    }
    componentWillUnmount(){
        this.props.dispatch(unfetch())
    }
}

const mapStateToProps=({users})=>{
    let {pending, err, data} =users;
    data=data.filter(item=>{return item.role!==1})
    return{
        data,
        pending
    }
}

const Admin=connect(mapStateToProps, null)(AdminComponent)
export default Dashboard(Admin);