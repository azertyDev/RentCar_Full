import React from 'react';
import {Table} from 'antd';

const TableUserCars = (props) => {
    const columns = [
        {
          title: 'Model',
          dataIndex: 'model',
        },
        {
          title: 'Cost',
          dataIndex: 'cost',
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

export default TableUserCars;