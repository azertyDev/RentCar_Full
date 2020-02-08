import React from "react";
import { Table, Button } from "antd";
import { deleteMIdd, visibleMidd } from "../../redux/middleware/middleware";
import { read } from "../../redux/actions/users";
import { connect } from "react-redux";
import {visibleSlide} from '../../redux/actions/modal';
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
            <Button
              onClick={(e) =>{props.deleteCom(record._id);  e.stopPropagation();}}
              style={{ marginRight: "5px" }}
              loading={
                props.deletePending === record._id &&
                props.deletePending.pending
                  ? true
                  : false
              }
            >
              Delete
            </Button>
            <Button onClick={(e) =>{ props.visible(true, record._id);  e.stopPropagation()}}>
              Edit
            </Button>
          </span>
        );
      }
    }
  ];
  return (
    <React.Fragment>
      <Table
      scroll={{x:600}}
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
  const { deletePending } = users;
  console.log("deletePending", deletePending);
  return {
    users,
    deletePending
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
export default connect(mapDispatchToProps, mapDispatchToProps)(TableUsers);
