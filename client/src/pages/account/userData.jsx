import React from "react";
import { Row, Col, Tag, Button } from "antd";
import Dashboard from "../../hoc/dashboard";
import "./account.css";
const UserData = () => {
  const { name, email, password } = JSON.parse(localStorage.getItem("user"));
  return (
    <Row>
      <Col md={{ span: 12, offset: 6 }} style={{ marginTop: "20px" }}>
        <div className="profile">
          <div>More About {name.charAt(0).toUpperCase() + name.slice(1)}</div>
          <div className="card">
            <div>
              <div>
                <img
                  src="https://gohuskies.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2017/8/2/IMG_shaw_headshot.jpg"
                  alt=" user"
                />
                <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
              </div>
            </div>
            <div>
              <span>Skills</span>
              <Tag color="#f50">#f50</Tag>
              <Tag color="#2db7f5">#2db7f5</Tag>
              <Tag color="#87d068">#87d068</Tag>
              <Tag color="#108ee9">#108ee9</Tag>
            </div>
          </div>
          <div>
            <div>
              <h3>Bio</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
          <div>
            <Button style={{ width: "60%" }}>
              I have heard enough about{" "}
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Dashboard(UserData);
