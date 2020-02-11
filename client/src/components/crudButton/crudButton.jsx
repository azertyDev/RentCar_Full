import React from 'react';
import {Button, Tag} from 'antd';
const CrudButton=({num})=>{
    switch(num){
      case 0:
        return(
          <div style={{marginTop:'15px'}}><Tag color="#e00">-----</Tag></div>
        )
      case 1:
        return(
          <div style={{marginTop:'15px'}}>    <Tag color="#f50">Create</Tag>
          <Tag color="#2db7f5">Read</Tag>
          <Tag color="#87d068">Edit</Tag>
          <Tag color="#108ee9">Delete</Tag></div>
        )
      case 2:
        return(
          <div style={{marginTop:'20px'}}>
          <Tag color="#2db7f5">Read</Tag>
          <Tag color="#87d068">Edit</Tag>
          <Tag color="#108ee9">Delete</Tag></div>
        )
      case 3:
        return(
          <div style={{marginTop:'20px'}}>
          <Tag color="#2db7f5">Read</Tag>
          <Tag color="#108ee9">Delete</Tag></div>
        )
      case 4:
        return(
          <div style={{marginTop:'20px'}}> 
          <Tag color="#87d068">Edit</Tag>
          </div>
        )
    }
}

export default CrudButton;