import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import Dashboard from "../../hoc/dashboard";
import { connect } from "react-redux";
import { compose } from "redux";
import _ from 'lodash';
import { fetch, add } from "../../redux/middleware/userMiddleware";
import TableUserCars from "../../components/tableUserCars/tableUserCars";
import UserAddCar from "../../components/modal/addCarUser";
import { userCarModal } from "../../redux/actions/modal";
class SimpleUserComponent extends Component {
  componentDidMount() {
    let { _id, name } = JSON.parse(localStorage.getItem("user"));
    this.props.fetch(_id);
  }
  componentDidUpdate(prevProps){
     if(prevProps.cars.data !== this.props.cars.data){
        this.props.modal(false);
     }
  }
  render() {
    const { pending, err, data,add } = this.props.cars;
    console.log('add', add)
    return (
      <Row>
        <Col md={{ span: 24 }}>
          {!pending ? <TableUserCars data={data} /> : <p>Loading...</p>}
        </Col>
        <Button
          style={{ width: "80px" }}
          onClick={() => this.props.modal(true)}
        >
          Add Car
        </Button>
        <UserAddCar
          visible={this.props.userCarModal}
          modal={this.props.modal}
          add={this.props.add}
          pending={add.pending}
        />
      </Row>
    );
  }
}

const mapStateToProps = ({ userCars, modals }) => {
  const { userCarModal } = modals;
  return {
    cars: userCars,
    userCarModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch(id) {
      dispatch(fetch(id));
    },
    modal(visible) {
      dispatch(userCarModal(visible));
    },
    add(values) {
      dispatch(add(values));
    }
  };
};
const SimpleUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleUserComponent);

export default Dashboard(SimpleUser);
