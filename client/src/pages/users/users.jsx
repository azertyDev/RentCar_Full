import React, { Component } from "react";
import _ from "lodash";
import Dashboard from "../../hoc/dashboard";
import { Row, Col, Button } from "antd";
import { connect } from "react-redux";
import { fetch, unfetch, visibleMidd } from "../../redux/middleware/middleware";
import ModalSlideComponent from '../../components/modal/modalSlide';
import TableUsers from "../../components/tableUsers/tableUsers";
import ModalComponent from "../../components/modal/addModal";
import note from "../../components/notification/notification";
class UsersComponent extends Component {
  componentDidMount() {
    this.props.fetch();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (_.get(prevProps.users, "data") !== _.get(this.props.users, "data")) {
      this.props.visible(false);
      setTimeout(() => {
        if (snapshot === -1) {
          note.openNotification("Add successfully");
        }
      }, 200);
      setTimeout(() => {
        console.log("snapshot", snapshot);
        if (snapshot === "edit") {
          note.openNotification("Edit successfully");
        }
      }, 200);
    }
  }

  componentWillReceiveProps(nextProps, prevState) {
    if (true) {
      console.log("salom elykum");
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const currentUsers = _.get(this.props.users, "data");
    const oldUsers = _.get(prevProps.users, "data");
    if (oldUsers.length - currentUsers.length === -1 && currentUsers.length >1) {
      return oldUsers.length - currentUsers.length;
    }
    if (currentUsers.length === oldUsers.length && currentUsers !== oldUsers) {
      return "edit";
    }
    return null;
  }
  render() {
    const { pending, fail, data, editFail } = this.props.users;

    if (fail) {
       return <h1>eroror</h1>
    }
    if(editFail){
      note.openNotification('Edit fail')
    }
    return (
      <Row>
        {pending ? (
          <h1>Loading ... </h1>
        ) : (
          <Col md={{ span: 24, offset: 0 }}>
            <TableUsers data={data} />
          </Col>
        )}
        <Button onClick={() => this.props.visible(true, null)}>Add User</Button>
        <ModalComponent />
        < ModalSlideComponent/>
      </Row>
    );
  }
  componentWillUnmount() {
    this.props.unfetch();
  }
}

const mapStateToProps = ({ users, modals }) => {
  return {
    users,
    modals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch() {
      dispatch(fetch());
    },
    visible(value, id = null) {
      dispatch(visibleMidd(value, id));
    },
    unfetch() {
      dispatch(unfetch());
    }
  };
};
const Users = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default Dashboard(Users);
