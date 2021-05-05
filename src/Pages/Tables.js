import React, {Component} from 'react';
import {Progress, Space, Table, Tag} from 'antd';
import './Tables.css'
import {Menu, Dropdown, message} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Column, ColumnGroup} = Table;

function UserTable(props) {
    return <Table dataSource={props.dataSource}>
        <Column title="First Name" dataIndex="firstName" key="firstName"/>
        <Column title="Last Name" dataIndex="lastName" key="lastName"/>
        <Column title="Department"
                dataIndex="department"
                key="department"
                render={props.render}/>
        <Column title="Specialist" dataIndex="specialist" key="specialist"/>
        <Column
            title="Task completion"
            dataIndex="tags"
            key="tags"
            render={props.render1}
        />
        <Column
            title="Action"
            key="action"
            render={props.render2}
        />
    </Table>;
}

function ProjectTable(props) {
    return <Table dataSource={props.dataSource}>
        <Column title="Title" dataIndex="title" key="title"/>
        <Column title="Create time" dataIndex="ctime" key="ctime"/>
        <Column title="Deadline" dataIndex="deadline" key="deadline"/>
        <Column title="Members"
                dataIndex="members"
                key="members"
                render={props.render}/>
        <Column title="Status" dataIndex="status" key="status" render={props.statusRender}/>
        <Column
            title="Action"
            key="action"
            render={props.actionRender}
        />
    </Table>;
}

function TableContent(props) {
    let userData = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            department: ['Designer'],
            specialist: 'Ux Designer',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            department: ['Developer'],
            specialist: 'FullStack developer',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            department: ['Product Manager'],
            specialist: 'Property Designer',
            tags: ['cool', 'teacher'],
        },
    ];
    let projectData = [
        {
            key: '1',
            title: 'ProjecTime - React Based Project Design for Project Management',
            deadline: '07.05.2021',
            ctime: '01.03.2021',
            members: ['Designer'],
            status: 'Proposed'
        }
    ]
    if (props.userTable === true) {
        return <UserTable dataSource={userData} render={department => (
            <>
                {department.map(dpm => {
                    let color = '';
                    if (dpm === 'Product Manager') {
                        color = 'purple';
                    }
                    if (dpm === 'Developer') {
                        color = 'geekblue';
                    }
                    if (dpm === 'Designer') {
                        color = 'orange';
                    }
                    return (
                        <Tag color={color} key={dpm}>
                            {dpm.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        )} render1={tags => (
            <>
                <Progress percent={30}/>
            </>
        )} render2={(text, record) => (
            <Space size="middle">
                <a>Invite {record.lastName}</a>
                <a>Delete</a>
            </Space>
        )}/>
    }
    if (props.projectTable === true) {
        return <ProjectTable dataSource={projectData} render={members => (
            <>
                {members.map(member => {
                    const menu = (
                        <Menu>
                            <Menu.ItemGroup title="Project Leader">
                                <Menu.Item>Akzhol Kadylbek</Menu.Item>
                            </Menu.ItemGroup>
                            <SubMenu title="Participants">
                                <Menu.Item>Sam Tom</Menu.Item>
                                <Menu.Item>Hans John</Menu.Item>
                            </SubMenu>
                        </Menu>
                    );
                    return (
                        <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined/>}>
                            Member List
                        </Dropdown.Button>
                    );
                })}
            </>
        )} statusRender={status => {
            let color = '';
            if (status === 'Proposed') {
                color = 'cyan';
            }
            if (status === 'In progress') {
                color = 'red';
            }
            if (status === 'Review') {
                color = 'purple';
            }
            if (status === 'Completed') {
                color = 'green';
            }
            return (
                <Tag color={color} key={status}>
                    {status}
                </Tag>
            );
        }} actionRender={(text, record) => (
            <Space size="middle">
                <a>Next Stage</a>
                <a>Delete</a>
            </Space>
        )}/>
    }
}

class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userTable: true,
            projectTable: false
        }
    }

    ChangeTable(table) {
        if (table === "userTable") {
            this.setState({
                userTable: true,
                projectTable: false
            })
        }
        if (table === "projectTable") {
            this.setState({
                userTable: false,
                projectTable: true
            })
        }
    }

    render() {
        return (
            <div className="tables-page">
                <div className="heading">
                    <p>Tables</p>
                </div>
                <div className="table-tags">
                    <div className="table-tag" onClick={(e) => this.ChangeTable('userTable', e)}>
                        <i className="material-icons">person</i>
                        <p>User Table</p>
                    </div>
                    <div className="table-tag" onClick={(e) => this.ChangeTable('projectTable', e)}>
                        <i className="material-icons">apps</i>
                        <p>Project Table</p>
                    </div>
                    <div className="table-tag">
                        <i className="material-icons">task</i>
                        <p>Task Table</p>
                    </div>
                </div>
                <div className="table-box">
                    <TableContent userTable={this.state.userTable} projectTable={this.state.projectTable}/>
                </div>
            </div>
        );
    }
}

export default Tables;
