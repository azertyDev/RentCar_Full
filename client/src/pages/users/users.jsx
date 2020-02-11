import React, { Component } from "react";
import _ from "lodash";
import Dashboard from "../../hoc/dashboard";
import { Row, Col, Button, Layout } from "antd";
import { connect } from "react-redux";
import { fetch, unfetch, visibleMidd } from "../../redux/middleware/middleware";
import ModalSlideComponent from "../../components/modal/modalSlide";
import TableUsers from "../../components/tableUsers/tableUsers";
import ModalComponent from "../../components/modal/addModal";
import note from "../../components/notification/notification";
import "../../components/style.css";
import AddIcon from "../../images/add.png";
import Chart from "../../chart/chart";
import obj from '../../functions/normalizer';
const { Content } = Layout;
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
        if (snapshot === 1) {
          note.openNotification("Delete successfully");
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
    if (
      oldUsers.length - currentUsers.length === -1 &&
      currentUsers.length > 1
    ) {
      return oldUsers.length - currentUsers.length;
    }
    if (oldUsers.length - currentUsers.length === 1) {
      return oldUsers.length - currentUsers.length;
    }
    if (
      currentUsers.length === oldUsers.length &&
      currentUsers !== oldUsers &&
      currentUsers.length > 0
    ) {
      return "edit";
    }
    return null;
  }
  render() {
    const { pending, fail, data, editFail } = this.props.users;
   
    if (fail) {
      return <h1>eroror</h1>;
    }
    if (editFail) {
      note.openNotification("Edit fail");
    }
    return (
      <>
        {!pending ? (
          <Content>
            {" "}
            <Row>
              <Col md={{ span: 24, offset: 0 }}>
                <TableUsers data={data} />
              </Col>
              <img
                className="add_icon"
                onClick={() => this.props.visible(true, null)}
                alt=" "
                src={AddIcon}
                style={{ width: "40px", height: "40px" }}
              />
              <ModalComponent />
              <ModalSlideComponent />
            </Row>{" "}
            <Row>
              <Col md={{ span: 24 }}>
                <Chart data={obj.chartData(data)} />
              </Col>
            </Row>
          </Content>
        ) : (
          <span>Loading</span>
        )}
      </>
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
