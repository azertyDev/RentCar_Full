import React from 'react';
import {Table, Button} from 'antd';

const TableCars = (props) => {
    console.log(props.data)
    const columns = [
        {
          title: 'Model',
          dataIndex: 'model',
        },
        {
          title: 'Cost',
          dataIndex: 'cost',
        },
        {
          title: 'Owner',
          dataIndex: 'owner',
        },
        {
          title:'Action',
          dataIndex:'action',
          render:(text, record, index)=>{
             return(
               <div>
                 {
                   !JSON.parse(localStorage.getItem('user')).client?null:<Button style={{width:'80px'}}>Rent</Button>
                 }
               </div>
                 
             )
          }
        }
      ];
    return (
      <div>
      <Table
      style={{marginLeft:'15px'}}
       columns={columns}
        dataSource={props.data}
         size="middle"
         onRow={(record, rowIndex) => {
          return {
            onClick: event => {}
          };
        }} />
      </div>
    );
}

export default TableCars;
