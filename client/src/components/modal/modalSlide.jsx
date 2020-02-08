import React from 'react';
import { Modal, Button } from 'antd';
import _ from 'lodash';
import {connect} from 'react-redux';
import {visibleSlide} from '../../redux/actions/modal';
import obj from '../../functions/normalizer';
class ModalSlideComponent extends React.Component {
  render() {
      const {slides} = this.props.modals;
      let user=obj.findUser(slides.id, _.get(this.props, 'users.data'))
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={slides.visible}
          onCancel={()=>{this.props.visible(false, null)}}
        >
          {user.name}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps=({modals,users})=>{
    return{
        modals,
        users
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        visible(arr, id){
            dispatch(visibleSlide(arr, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSlideComponent);