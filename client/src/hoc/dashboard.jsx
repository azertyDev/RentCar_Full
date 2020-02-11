import React, { Component } from "react";
import { Layout, Menu, Icon, Row, Col } from "antd";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {compose} from 'redux';
import Account from '../components/account/account';
import {FiUsers, FiShield} from 'react-icons/fi/index';
import "./style.css";
const { Header, Content, Footer, Sider } = Layout;
const DashboardComponent = OldComponent => {
  class UpdatedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAllow: true,
        user: {}
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({
          isAllow: false
        });
      } else {
        let user = JSON.parse(localStorage.getItem("user"));
        console.log('user', user);
        this.setState({
          user: {
            email:user.email,
            role:user.role,
            name:user.name
          }
        });
      }
    }
    render() {
      if (!this.state.isAllow) {
        return <Redirect to="/notFound" />;
      }
      return (
        <Layout style={{ height: "100vh" }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {}}
            onCollapse={(collapsed, type) => {}}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              {parseInt(this.state.user.role) === 1 ? (
                <Menu.Item key="1" className="dashboard_menu_item">
                  <Link to="/users" className="dashboard_link">
                    <FiUsers/>
                    <span className="nav-text" style={{paddingLeft:'10px'}}>Users</span>
                  </Link>
                </Menu.Item>
              ) : null}
              {parseInt(this.state.user.role) === 1 ? (
                <Menu.Item key="2" className="dashboard_menu_item">
                  <Link to="/cars" className="dashboard_link">
                    <Icon type="car" />
                    <span className="nav-text">Cars</span>
                  </Link>
                </Menu.Item>
              ) : null}
              {parseInt(this.state.user.role) !== 1 ? (
                <Menu.Item key="1" className="dashboard_menu_item">
                  <Link to={`/user/${this.state.user.name}`} className="dashboard_link">
                    <Icon type="car" />
                    <span className="nav-text">Car</span>
                  </Link>
                </Menu.Item>
              ) : null}
              {parseInt(this.state.user.role) === 1 ? (
                <Menu.Item key="3" className="dashboard_menu_item">
                  <Link to={`/admins`} className="dashboard_link">
                  <FiShield/>
                    <span className="nav-text" style={{paddingLeft:'10px'}}>Admins</span>
                  </Link>
                </Menu.Item>
              ) : null}
            </Menu>
          </Sider>
          <Layout style={{overflow:'auto'}}>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Row>
              <Col md={{span:7, offset:1}} sm={{span:20,offset:4}} xs={{span:22, offset:2}}>
                {this.state.user.email
                  ? this.state.user.email.split('@')[0].charAt(0).toUpperCase()+this.state.user.email.split('@')[0].slice(1)
                  : "name"}
              </Col>
              <Col md={{span:2, offset:14}}>
              {
                this.state.user.role !==1? <Account/>:null
              }
              </Col>
              </Row>
            </Header>
            <Content
              style={{
                margin: "24px 16px 0",
                minHeight: "90vh",
                background: "white",
                overflow:'auto'
              }}
            >
              <OldComponent />
            </Content>
            <Footer style={{ textAlign: "center" }}>RentCar</Footer>
          </Layout>
        </Layout>
      );
    }
  }
  return UpdatedComponent;
};

const mapStateToProps=({logins})=>{
  return{
    logins
  }
}
const Dashboard=compose(connect(mapStateToProps, null), DashboardComponent)
export default Dashboard;
