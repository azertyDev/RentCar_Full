import React from "react";
import { Modal, Button } from "antd";
import Forma from "../forma/forma";
import _ from "lodash";
import { connect } from "react-redux";
import { add, edit, visibleMidd } from "../../redux/middleware/middleware";
import "../style.css";
import obj from '../../functions/normalizer.js';
class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.findUser = this.findUser.bind(this);
  }

  findUser(id) {
    let { data } = this.props.users;
    if (
      !data.find(item => {
        return item._id === id;
      })
    ) {
      return {};
    }
    return data.find(item => {
      return item._id === id;
    });
  }

  render() {
    const { visible, id } = this.props.modals.visibles;
    const { addPending, editPending } = this.props.users;
    console.log(id);
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={visible}
          onCancel={() => this.props.visible(false, null)}
        >
            <Forma
              add={this.props.add}
              addPending={addPending}
              editPending={editPending}
              user={
                Object.keys(obj.findUser(id, _.get(this.props,'users.data'))).length > 0
                  ? this.findUser(id)
                  : { name: "", email: "", role: 0 }
              }
              edit={this.props.edit}
            />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ modals, users }) => {
  return {
    modals,
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    visible(val, id = null) {
      dispatch(visibleMidd(val, id));
    },
    add(user) {
      dispatch(add(user));
    },
    edit(id, values) {
      dispatch(edit(id, values));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
