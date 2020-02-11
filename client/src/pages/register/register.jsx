import React from "react";
import { Layout, Row, Col, ConfigProvider, Button } from "antd";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {registerMidd} from '../../redux/middleware/middleware';
import '../css/login.css';
const { Content } = Layout;

class Register extends React.Component {

    constructor(props){
        super(props);
        this.state={
          name:false,
          email:false,
          password:false,
          client:false,
          seller:false
        }
        this.name=React.createRef();
        this.email=React.createRef();
        this.password=React.createRef();
        this.client=React.createRef();
        this.seller=React.createRef();
        // submit function
        this.onSubmitForm=this.onSubmitForm.bind(this);
    }
  onSubmitForm(e){
    e.preventDefault();
    let name=this.name.current.value;
    let email=this.email.current.value;
    let password=this.password.current.value;
    let client=this.client.current;
    let seller=this.seller.current;
    this.setState( prevState=>({
      name:name?false:true,
      email:email?false:true,
      password:password?false:true,
    }))
    let is = name? false:true;
     let a=email?false:true;
     let b=password?false:true
    if(!is && !a && !b){
     return this.props.register({name, email, password,client:client.checked,seller:seller.checked})
    }
  }
  render() {
    let {pending, err, user}=this.props.registers;
    localStorage.setItem('user', JSON.stringify(user))
   if(Object.keys(user).length>0 && !user.client){
      return <Redirect to={`/user/${user.name}`}/>
   } 
   if(user.client){
     return <Redirect to="/all/cars"/>
   }
    return (
      <Content style={{backgroundColor:'#F0F2F5'}}>
        <Row style={{backgroundColor:'#F0F2F5'}}>
          <Col lg={{span:8, offset:8}} md={{ span: 16, offset: 6 }} sm={{span:22, offset:1}} xs={{span:24}} className="col_self1">
            <div className="register">
            <form onSubmit={e=>this.onSubmitForm(e)}>
              <div className="form_element_register">
                <label htmlFor="name">Name: </label>
                <input name="name" type="text" ref={this.name}/>
              </div>
              {this.state.name? <p className="error_message">Please fill name field</p>:null}
              <div className="form_element_register">
                <label htmlFor="email">Email: </label>
                <input name="email" type="email" ref={this.email} />
              </div>
              {this.state.email? <p className="error_message">Please fill email field</p>:null}
              <div className="form_element_register">
                <label htmlFor="password">Password: </label>
                <input name="password" type="password" ref={this.password} />
              </div>
              {this.state.email? <p className="error_message">Please fill password field</p>:null}
              <div className="form_element_register">
              <div>
                <label htmlFor="client">Client: </label>
                <input name="person" type="radio" value="client" ref={this.client}/>
              </div>
              <div>
              <label htmlFor="person">Seller: </label>
              <input name="person" type="radio" value="seller" ref={this.seller}/>
              </div>
                </div>
             {
               !pending?  <button type="submit" className="btn_register">Submit</button>:<Button loading style={{width:'100%'}}/>
             }
              </form>
              {err? <p  className="error_message">Something wrong </p>:null}
            </div>
          </Col>
        </Row>
      </Content>
    );
  }
}

const mapStateToProps=({registers})=>{
    return{
        registers
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        register(values){
            dispatch(registerMidd(values))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
