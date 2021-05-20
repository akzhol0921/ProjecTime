import {Component} from 'react'
import React from "react";
import './ProjectDetail.css'
import {BsThreeDots} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {DiPhotoshop} from "react-icons/all";
import {CaretRightFilled,CaretLeftFilled,FileWordOutlined,FileExcelOutlined,FilePptOutlined} from '@ant-design/icons'
import {Card, Collapse, Image, Timeline, Tooltip} from "antd";
const { Panel } = Collapse;

function ProjectDiscussion() {
    return <div className="project-discussion-box">
        <div className="project-discussion">
            <div className="discussion-avatar">
                <img src="/avatar.jpg" alt=""/>
            </div>
            <div className="discussion-content">
                <div className="discussion-user">
                    <h4>Akzhol Kadylbek</h4>
                </div>
                <div className="discussion-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus modi, nam nostrum
                        porro quaerat ratione temporibus ut. Dolorum, placeat, totam? Cum delectus dolorum eius odio
                        placeat quasi tenetur voluptatum?</p>
                    <img
                        src="https://images.unsplash.com/photo-1619614573488-6066b9e6278e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        alt=""/>
                    <img
                        src="https://images.unsplash.com/photo-1619629501066-3721fc778449?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt=""/>
                </div>
            </div>
        </div>
        <div className="project-discussion">
            <div className="discussion-avatar">
                <img src="/avatar.jpg" alt=""/>
            </div>
            <div className="discussion-content">
                <div className="discussion-user">
                    <h4>Akzhol Kadylbek</h4>
                </div>
                <div className="discussion-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus modi, nam nostrum
                    porro quaerat ratione temporibus ut. Dolorum, placeat, totam? Cum delectus dolorum eius odio
                    placeat quasi tenetur voluptatum?
                </div>
            </div>
        </div>
    </div>;
}

function ProjectTimeline() {
    return (
        <div className="project-timeline">
            <div className="timeline-task-left">
                <div className="timeline-task-title">
                    Make the Property
                </div>
                <div className="timeline-task-description">
                    Let the produst manager design the property for this project
                </div>
            </div>
            <div className="timeline-task-right">
                <div className="timeline-task-title">
                    Design the front page
                </div>
                <div className="timeline-task-description">
                    Designer will make the PSD file of front page
                </div>
            </div>
            <div className="timeline-task-left">
                <div className="timeline-task-title">
                    Make the Property
                </div>
                <div className="timeline-task-description">
                    Let the produst manager design the property for this project
                </div>
            </div>
            <div className="timeline-task-right">
                <div className="timeline-task-title">
                    Design the front page
                </div>
                <div className="timeline-task-description">
                    Designer will make the PSD file of front page
                </div>
            </div>
        </div>
    );
}

function TabContent(props) {
    if (props.discussion === true) {
        return <ProjectDiscussion/>
    }
    if (props.timeline === true) {
        return <ProjectTimeline/>
    }

}

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.leftPage = React.createRef();
        this.state = {
            discussion: true,
            timeline: false,
            pageLeft: true,
            pageRight: false,
            leftWidth: null
        }

    }

    componentDidMount() {
        const width = this.leftPage.current.offsetWidth;
        this.setState(
            {
                leftWidth: width
            },
            () => console.log(this.state.leftWidth)
        );
    }

    ChangeTab(tab) {
        if (tab === "discussion") {
            this.setState({
                discussion: true,
                timeline: false
            })
        }
        if (tab === "timeline") {
            this.setState({
                discussion: false,
                timeline: true
            })
        }
    }
    SwipePage(page) {
        if (page === 'right') {
            this.setState({
                pageLeft: false,
                pageRight: true
            })
        }
        if (page === 'left') {
            this.setState({
                pageLeft: true,
                pageRight: false
            })
        }
    }

    render() {
        return (
            <div className="detail-page">
                <div className={this.state.pageRight? 'detail-page-left page-to-left': 'detail-page-left page-to-right'} ref={this.leftPage}>
                    <div className="action-bar">
                        <div className="return-div">
                            <i>&#x2190;</i>
                            <p>Return</p>
                        </div>
                        <div className="action-bar-detail">
                            <p className="detail-time">Modified at 01.03.2021</p>
                            <div className="detail-actions">
                                <i className="material-icons">edit</i>
                            </div>
                        </div>
                        <div className="action-bar-actions">

                        </div>
                    </div>
                    <div className="content-container">
                        <div className="project-property">
                            <div className="project-leader-box">
                                <h5>Project Leader</h5>
                                <div className="project-leader">
                                    <img src="/avatar.jpg" alt=""/>
                                    <p>Akzhol Kadylbek</p>
                                </div>
                            </div>
                            <div className="project-participants-box">
                                <h5>Project Participants</h5>
                                <div className="project-participants">
                                    <div className="project-participant">
                                        <img src="/avatar.jpg" alt=""/>
                                        <p>Akzhol Kadylbek</p>
                                    </div>
                                    <div className="project-participant">
                                        <img src="/avatar1.jpeg" alt=""/>
                                        <p>Sam Smith</p>
                                    </div>
                                    <div className="project-participant">
                                        <img src="/avatar2.jpeg" alt=""/>
                                        <p>John Walt</p>
                                    </div>
                                    <div className="project-participant ">
                                        <div>
                                            <img src="/avatar4.jpeg" alt=""/>
                                            <img src="/avatar5.jpeg" alt=""/>
                                            <img src="/avatar2.jpeg" alt=""/>
                                        </div>
                                        <div className="project-participant-more">
                                            <BsThreeDots/>
                                            <p>More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-links-box">
                                <h5> Project Links </h5>
                                <div className="project-links">
                                    <div className="project-link">
                                        <AiFillGithub/>
                                        <a>Github Link</a>
                                    </div>
                                    <div className="project-link">
                                        <DiPhotoshop/>
                                        <a>Design Page</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-stage">
                                <p>Current Stage:</p>
                                <div>Proposed</div>
                            </div>
                            <div className="project-step">
                                <button>Change to next Stage</button>
                            </div>
                        </div>
                        <div className="project-content">
                        <pre className="project-title">
                            ProjecTime - React Based Project
                            Design for Project Management
                        </pre>
                            <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aliquam assumenda commodi corporis delectus dignissimos dolorum ea fuga, in iste minima
                                molestiae nostrum possimus quaerat quam qui quibusdam</p>
                            <div className="project-attachments-box">
                                <h4>Attachments</h4>
                                <div className="project-attachments">
                                    <img
                                        src="https://images.unsplash.com/photo-1619614573488-6066b9e6278e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                                        alt=""/>
                                    <img
                                        src="https://images.unsplash.com/photo-1619629501066-3721fc778449?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                        alt=""/>
                                    <img
                                        src="https://images.unsplash.com/photo-1619628410210-ed52f0391dc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                                        alt=""/>
                                </div>
                                <div>
                                    <h4>Todo List</h4>
                                    <div className="todo-lists">
                                        <div className="todo-list"><input type="checkbox" id="scales"/><label
                                            htmlFor="scales">Design of Project</label></div>
                                        <div className="todo-list"><input type="checkbox" id="scales"/><label
                                            htmlFor="scales">Front-End Coding Part</label></div>
                                        <div className="todo-list"><input type="checkbox" id="scales"/><label
                                            htmlFor="scales">Server Responding</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-discussions">
                            <div className="project-tab">
                                <div className="discussion-tab"
                                     onClick={(e) => this.ChangeTab('discussion', e)}>
                                    Discussions
                                </div>
                                <div className="timeline-tab" onClick={(e) => this.ChangeTab('timeline', e)}>
                                    Task Timeline
                                </div>
                                <div className={this.state.discussion ? 'tab-line discussion-line tab-to-left': 'tab-line tab-to-right timeline-line'}/>
                            </div>
                            <TabContent discussion={this.state.discussion} timeline={this.state.timeline}/>
                        </div>
                        <div className="project-right-arrow-box">
                            <Tooltip title="Click to see more">
                                <CaretRightFilled className="project-right-arrow" onClick={(e) => this.SwipePage('right', e)} />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={this.state.pageRight ? 'detail-page-right page-to-left': 'detail-page-right page-to-right'} >
                    <div className="project-left-arrow-box">
                        <Tooltip title="Go Back">
                            <CaretLeftFilled className="project-left-arrow" onClick={(e) => this.SwipePage('left', e)} />
                        </Tooltip>
                    </div>
                    <div className="project-files">
                        <h1>Project Files</h1>
                        <div className="project-file-list">
                            <div className="project-file">
                                <FileWordOutlined style={{color:'blue'}} />
                                <p>Project Demand.doc</p>
                            </div>
                            <div className="project-file">
                                <FileExcelOutlined style={{color:'green'}} />
                                <p>Project Demand.excel</p>
                            </div>
                            <div className="project-file">
                                <FilePptOutlined  style={{color:'orange'}} />
                                <p>Project Demand.ppt</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-bugs">
                        <h1>Project Bugs</h1>
                        <Collapse defaultActiveKey={['1']} className="project-bug-list">
                            <Panel header="This is panel header 1" key="1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quasi vel voluptate voluptatem!</p>
                                <Image src="/avatar.jpg" alt="" className="project-bug-img"/>
                                <Image src="/avatar.jpg" alt="" className="project-bug-img"/>
                                <Image src="/avatar.jpg" alt="" className="project-bug-img"/>
                            </Panel>
                            <Panel header="This is panel header 2" key="2">
                                <p>vcxzrewqrew</p>
                            </Panel>
                        </Collapse>
                    </div>
                    <div className="project-history">
                        <h1>Project History</h1>
                        <Timeline mode="left" reverse="true" className="project-history-timeline">
                            <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
                            <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
                            <Timeline.Item>Technical testing</Timeline.Item>
                            <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectDetail
