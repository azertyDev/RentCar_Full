import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../redux/middleware/middleware';
import {Link} from 'react-router-dom';
import '../css/login.css';
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
         this.props.login(values)
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let {pending, err, user} =this.props.logins;
    localStorage.setItem('user', JSON.stringify(user));
    if(user.email && user.password && user.role === 1){
     
      return <Redirect to="/users"/>
    }
    if(user.email && user.password && user.role !== 1 && !user.client){
      return <Redirect to={`/user/${user.name}`}/>
    }
    if(user.client){
      return <Redirect to='/all/cars'/>
    }

    return (
        <Layout style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={pending}>
            Log in
          </Button>
          {err ? <p>Something wrong Register now </p>:null}
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
      </Layout>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
const mapStateToProps=({logins})=>{
    return{
        logins
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        login(values){
            dispatch(login(values))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);