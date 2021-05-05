import React, {Component} from 'react';
import './Statistics.css'
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/charts';
const { Countdown } = Statistic;

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



class Statistics extends Component {
    render() {
        return (
            <div className="stat-page">
                <div className="heading">
                    <p>Statistics</p>
                </div>
                <h4 className="statisics-title">Overall Statistics</h4>
                <div className="stats-box">
                    <Row>
                        <Col span={4}>
                            <Card>
                                <Statistic title="Project Progress" value={2} suffix="/ 8" />
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Statistic title="Task Complete Progress" value={93} suffix="/ 100" />
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Countdown title="Next Deadline" value={1620323658447} />
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Statistic
                                    title="Idle"
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="%"
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="chart-box">
                    <h4 className="chart-title">Task Complete Each Day</h4>
                    <LineChart/>
                </div>
            </div>
        );
    }
}
export default Statistics
