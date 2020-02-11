import React from "react";
import { Table, Button, Icon, Pagination } from "antd";
import { deleteMIdd, visibleMidd } from "../../redux/middleware/middleware";
import { read } from "../../redux/actions/users";
import { connect } from "react-redux";
import {visibleSlide} from '../../redux/actions/modal';
import DeleteIcon from '../../images/delete.png';
import EditIcon from '../../images/edit1.png';
import _ from 'lodash';
import '../style.css'
const TableUsers = props => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Role",
      dataIndex: "role"
    },
    {
      title: "Action",
      dataIndex: "action",
      render: function(text, record, index) {
        return (
          <span>
          
            <img  onClick={(e) =>{props.deleteCom(record._id);  e.stopPropagation();}}
            alt=" " src={DeleteIcon}/>
             
           <img src={EditIcon} alt=" " onClick={(e) =>{ props.visible(true, record._id);  e.stopPropagation()}} />
          </span>
        );
      }
    }
  ];
  return (
    <React.Fragment>
      <Table
      style={{marginLeft:'25px'}}
      scroll={{x:600}}
      pagination={{pageSize:8}}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
               props.slide(true, record._id)
            }
          };
        }}
        dataSource={props.data}
        size="middle"
      />
    </React.Fragment>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteCom(id) {
      dispatch(deleteMIdd(id));
    },
    visible(ar, id = null) {
      dispatch(visibleMidd(ar, id));
    },
    read(id) {
      dispatch(read(id));
    },
    slide(ar, id=null){
      dispatch(visibleSlide(ar, id))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableUsers);
