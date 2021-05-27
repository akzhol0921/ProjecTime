import {Line} from "@ant-design/charts";
import './UserAssignChart.css';
import React from "react";
import { Table } from 'antd';

const { Column } = Table;

function UserAssignChart() {
    let userData = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
        },
        {
            key: '2',
            firstName: 'John',
            lastName: 'Brown',
        },
        {
            key: '3',
            firstName: 'John',
            lastName: 'Brown',
        },
    ];
    return (
        <div className="container">
            <div className="uatable-box">
                <UserAssignTable dataSource={userData} className="uatable"/>
            </div>
            <div className="uachart-box">
                <LineChart className="uachart"/>
            </div>
        </div>
    );
}

function UserAssignTable (props) {
    return <Table dataSource={props.dataSource}>
        <Column title="First Name" dataIndex="firstName" key="firstName"/>
        <Column title="Last Name" dataIndex="lastName" key="lastName"/>
        <Column title="Last Name" dataIndex="lastName" key="lastName"/>
        <Column title="Last Name" dataIndex="lastName" key="lastName"/>
    </Table>
}
function LineChart () {
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ];

    const config = {
        data,
        height: 400,
        xField: 'year',
        yField: 'value',
        point: {
            size: 5,
            shape: 'diamond',
        },
    };
    return <Line {...config} />
}

export default UserAssignChart
