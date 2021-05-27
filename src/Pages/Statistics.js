import React, {Component} from 'react';
import './Statistics.css'
import {Statistic, Card, Row, Col} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import {Line} from '@ant-design/charts';
import UserAssignChart from "../Components/UserAssignChart";
import UserBugChart from "../Components/UserBugChart";

const {Countdown} = Statistic;


class Statistics extends Component {
    render() {
        return (
            <div className="stat-page">
                <div className="heading">
                    <p>Statistics</p>
                </div>
                <div className="stat-title-box">
                    <h4 className="statisics-title-a">Overall Statistics</h4>
                    <h4 className="statisics-title-b">Project Progress</h4>
                </div>
                <div className="stats-box">
                    <div className="stats">
                        <Card className="stat-card">
                            <Statistic title="Project Progress" value={2} suffix="/ 8"/>
                        </Card>
                        <Card className="stat-card">
                            <Statistic title="Task Complete Progress" value={93} suffix="/ 100"/>
                        </Card>
                        <Card className="stat-card">
                            <Countdown title="Next Deadline" value={1620323658447}/>
                        </Card>
                        <Card className="stat-card">
                            <Statistic
                                title="Idle"
                                value={9.3}
                                precision={2}
                                valueStyle={{color: '#cf1322'}}
                                prefix={<ArrowDownOutlined/>}
                                suffix="%"
                            />
                        </Card>
                        <div className="chart-box">
                            <h4 className="chart-title">Task Complete Each Day</h4>
                            <UserAssignChart/>
                        </div>
                    </div>
                    <div className="bug-box">
                        <UserBugChart/>
                    </div>


                </div>


            </div>
        );
    }
}

export default Statistics
