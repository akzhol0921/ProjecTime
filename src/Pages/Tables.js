import React, {Component} from 'react';
import {Space, Table, Tag} from 'antd';
import './Tables.css'
import {Menu, Dropdown, message} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import settings from "../settings";

const {SubMenu} = Menu;
const {Column} = Table;

class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
        fetch(settings.server.host + "/users/getAllUser")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    userData: data
                })
            });
    }

    render() {
        return <Table dataSource={this.state.userData}>
            <Column title="First Name" dataIndex="firstName" key="firstName"/>
            <Column title="Last Name" dataIndex="lastName" key="lastName"/>
            <Column title="Department"
                    dataIndex="departmentName"
                    key="departmentName"
                    render={department => {
                        let color = '';
                        if (department === 'Product Manager') {
                            color = 'purple';
                        }
                        if (department === 'Developer') {
                            color = 'geekblue';
                        }
                        if (department === 'Designer') {
                            color = 'orange';
                        }
                        return (
                            <Tag color={color} key={department}>
                                {department}
                            </Tag>
                        );
                    }}/>
            <Column title="Specialist" dataIndex="specialist" key="specialist"/>

            <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                        <a>Invite {record.lastName}</a>
                        <a>Delete</a>
                    </Space>
                )}
            />
        </Table>;
    }
}

class ProjectTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectData: []
        }
        fetch(settings.server.host + "/project/getAllProject")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    projectData: data
                })
            });
    }
    render() {
        return <Table dataSource={this.state.projectData}>
            <Column title="Title" dataIndex="title" key="title"/>
            <Column title="Create time" dataIndex="create_time" key="create_time"/>
            <Column title="Deadline" dataIndex="deadline" key="deadline"/>
            {/*<Column title="Members"*/}
            {/*        dataIndex="members"*/}
            {/*        key="members"*/}
            {/*        render={members => (*/}
            {/*            <>*/}
            {/*                {members.map(member => {*/}
            {/*                    const menu = (*/}
            {/*                        <Menu>*/}
            {/*                            <Menu.ItemGroup title="Project Leader">*/}
            {/*                                <Menu.Item>Akzhol Kadylbek</Menu.Item>*/}
            {/*                            </Menu.ItemGroup>*/}
            {/*                            <SubMenu title="Participants">*/}
            {/*                                <Menu.Item>Sam Tom</Menu.Item>*/}
            {/*                                <Menu.Item>Hans John</Menu.Item>*/}
            {/*                            </SubMenu>*/}
            {/*                        </Menu>*/}
            {/*                    );*/}
            {/*                    return (*/}
            {/*                        <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined/>}>*/}
            {/*                            Member List*/}
            {/*                        </Dropdown.Button>*/}
            {/*                    );*/}
            {/*                })}*/}
            {/*            </>*/}
            {/*        )}/>*/}
            <Column title="Status" dataIndex="status" key="status" render={status => {
                let color = '';
                if (status === 'Proposed') {
                    color = 'cyan';
                }
                if (status === 'In Progress') {
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
            }}/>
            <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                        <a>Next Stage</a>
                        <a>Delete</a>
                    </Space>
                )}
            />
        </Table>;
    }
}

function TableContent(props) {


    if (props.userTable === true) {
        return <UserTable/>
    }
    if (props.projectTable === true) {
        return <ProjectTable/>
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
