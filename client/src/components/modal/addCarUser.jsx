import React from "react";
import { Modal, Button, Input } from "antd";
import _ from "lodash";

class UserAddCar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cost:'',
            model:''
        }
        this.handleChange=this.handleChange.bind(this);
    
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  
  render() {
    const { visible, modal,pending } = this.props;
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={visible}
          onCancel={() => {
            this.props.modal(false);
          }}
        >
          <form style={{marginTop:'15px'}}>
            <div className="form_element">
              <label htmlFor="cost" style={{width:'15%'}}>Cost: </label>
              <Input style={{width:'85%'}} name="cost" type="number" value={this.state.cost} onChange={this.handleChange} />
            </div>
            <div className="form_element">
              <label htmlFor="model" style={{width:'15%'}}>Model: </label>
              <Input style={{width:'85%'}} name="model" value={this.state.model} onChange={this.handleChange}/>
            </div>
            <Button onClick={()=>this.props.add(this.state)} loading={pending} style={{marginTop:'15px',background:'#1DA57A',color:'white'}}>Add Car</Button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default UserAddCar;
