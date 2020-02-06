import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom';
import './style.css';
const { Header, Content, Footer, Sider } = Layout;
const Dashboard = OldComponent => {
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
        let { email, role } = JSON.parse(localStorage.getItem("user"));
        this.setState({
          user: {
            email,
            role
          }
        });
      }
    }
    render() {
      if (!this.state.isAllow) {
        return <Redirect to="/notFound" />;
      }
      return (
        <Layout style={{height:'100vh'}}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
            }}
            onCollapse={(collapsed, type) => {
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1">
                {parseInt(this.state.user.role) === 1 ? (
                  <Link to="/users">
                    <Icon type="user" />
                    <span className="nav-text">Users</span>
                  </Link>
                ) : null}
              </Menu.Item>
              <Menu.Item key="2">
              <Link to="/cars">
                <Icon type="video-camera" />
                <span className="nav-text">Cars</span>
                </Link>
              </Menu.Item>
             
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}><h3 style={{paddingLeft:'10px'}}>{this.state.user.email?this.state.user.email.split('@')[0]:'name' }</h3></Header>
            <Content style={{ margin: "24px 16px 0", minHeight:'70vh', background:'white' }}>
              <OldComponent />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              RentCar
            </Footer>
          </Layout>
        </Layout>
      );
    }
  }
  return UpdatedComponent;
};

export default Dashboard;
