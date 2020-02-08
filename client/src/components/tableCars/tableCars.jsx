import React from 'react';
import {Table} from 'antd';

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
      ];
    return (
      <div>
      <Table
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
