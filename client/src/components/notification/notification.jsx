import React from "react";
import { Button, notification, Icon } from "antd";
class NotificationComponent{
   openNotification(description){
    notification.open({
      message: "Notification Title",
      description:`${description}`,
      icon: <Icon type="smile" style={{ color: "#108ee9" }} />
    });
  };
};
const note=new NotificationComponent();


export default note;
