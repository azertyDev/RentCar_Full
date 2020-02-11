import React from "react";
import { Menu, Dropdown, Icon } from "antd";
import { Link } from "react-router-dom";
import User from "../../images/account.png";
import AccountImage from "../../images/account2.png";
import Setting from "../../images/account-setting.png";
import Logout from "../../images/logout.png";
import _ from 'lodash';
import '../style.css';


const Account = (props) => {
  const menu = (
    <Menu className="menu">
      <Menu.Item className="menu_item">
        <Link
          to={`/user/${JSON.parse(localStorage.getItem("user")).name}/${
            JSON.parse(localStorage.getItem("user"))._id
          }`}
         className="link"
        >
         <div> <img
            src={AccountImage}
            alt=""
          /></div>
          <p>{JSON.parse(localStorage.getItem('user')).name}</p>
        </Link>
      </Menu.Item>
      <Menu.Item  className="menu_item">
        <Link
          to="/"
          className="link"
        >
          <div><img src={Logout} alt="" /></div>
          <p>Logout</p>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} placement="bottomCenter">
        <a className="ant-dropdown-link" href="#">
          <img src={User} alt=" " style={{ width: "60px", height: "60px" }} />
        </a>
      </Dropdown>
    </>
  );
};

export default Account;
