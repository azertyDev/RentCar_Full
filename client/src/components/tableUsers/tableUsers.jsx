import React from 'react';
import {Table} from 'antd';

const TableUsers = (props) => {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
          title: 'Role',
          dataIndex: 'role',
        },
      ];
    return (
        <React.Fragment>
        <Table columns={columns} dataSource={props.data} size="middle" />
        </React.Fragment>
    );
}

export default TableUsers;
