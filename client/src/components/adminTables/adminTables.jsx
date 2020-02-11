import React from "react";
import { Table, Button, Icon } from "antd";
import { deleteMIdd, visibleMidd } from "../../redux/middleware/middleware";
import { read } from "../../redux/actions/users";
import { connect } from "react-redux";
import {visibleSlide} from '../../redux/actions/modal';
import DeleteIcon from '../../images/delete.png';
import EditIcon from '../../images/edit1.png';
import _ from 'lodash';
import '../style.css'
const TableAdmins = props => {
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
    }
  ];
  return (
    <React.Fragment>
      <Table
      style={{marginLeft:'15px'}}
      scroll={{x:600}}
        columns={columns}
        dataSource={props.data}
        size="middle"
      />
    </React.Fragment>
  );
};



export default TableAdmins;
