import React, {Component} from 'react';
import './LandingPage.css'
import Project from "../Components/Project";
import settings from "../settings";


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            ProposedProject: [],
            InProgressProject: [],
            ReviewProject: [],
            CompletedProject: []
        }
        fetch(settings.server.host + "/project/getDashboardProject?user=1")
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].status === "Proposed") {
                        this.setState({
                            ProposedProject: [data[i], ...this.state.ProposedProject]
                        })
                    }
                    if (data[i].status === "In Progress") {
                        this.setState({
                            InProgressProject: [data[i], ...this.state.InProgressProject]
                        })
                    }
                    if (data[i].status === "Review") {
                        this.setState({
                            ReviewProject: [data[i], ...this.state.ReviewProject]
                        })
                    }
                    if (data[i].status === "Completed") {
                        this.setState({
                            CompletedProject: [data[i], ...this.state.CompletedProject]
                        })
                    }
                }
                this.setState({
                    projects: data
                })
            });
    }

    render() {
        return (
            <div className="landing-page">
                <div className="title-box">
                    <div className="heading">
                        <p>My Board</p>
                    </div>
                    {/* tool-bar */}
                    <div className="tool-bar">
                        <div className="tool-bar-icon">
                            <i className="material-icons">
                                link
                            </i>
                        </div>
                        <div className="tool-bar-icon">
                            <i className="material-icons">
                                more_horiz
                            </i>
                        </div>
                        <input type="text" className="search" placeholder="Search Text"/>
                        <button className="btn-create">Create New</button>
                    </div>
                </div>
                {/* tab-bar */}
                <div className="tab-bar">
                    <div className="tabs">
                        <div className="tab">Tasks</div>
                        <div className="tab">Objects</div>
                        <div className="tab">Watch Lists</div>
                        <div className="tab">Favorites</div>
                    </div>
                </div>
                {/* status-grid */}
                <div className="status-grid">
                    <div className="status proposed">
                        <div className="status-bar">
                            <div className="status-title">
                                <div className="status-dot blue"/>
                                <p>PROPOSED</p>
                            </div>
                            <div className="status-sort">
                                <select>
                                    <option value="Priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        {/* project-card */}
                        {
                            this.state.ProposedProject.map(project => {
                                return <Project projectData={project}/>
                            })
                        }


                    </div>


                    <div className="status progress">
                        <div className="status-bar">
                            <div className="status-title">
                                <div className="status-dot red"/>
                                <p>IN PROGRESS</p>
                            </div>
                            <div className="status-sort">
                                <select>
                                    <option value="Priority">Name</option>
                                </select>
                            </div>
                        </div>

                        {
                            this.state.InProgressProject.map(project => {
                                return <Project projectData={project}/>
                            })
                        }

                    </div>
                    <div className="status review">
                        <div className="status-bar">
                            <div className="status-title">
                                <div className="status-dot purple"/>
                                <p>REVIEW</p>
                            </div>
                            <div className="status-sort">
                                <select>
                                    <option value="Priority">Date Added</option>
                                </select>
                            </div>
                        </div>

                        {
                            this.state.ReviewProject.map(project => {
                                return <Project projectData={project}/>
                            })
                        }

                    </div>
                    <div className="status completed">
                        <div className="status-bar">
                            <div className="status-title">
                                <div className="status-dot green"/>
                                <p>COMPLETED</p>
                            </div>
                            <div className="status-sort">
                                <select>
                                    <option value="Priority">Score</option>
                                </select>
                            </div>
                        </div>

                        {
                            this.state.CompletedProject.map(project => {
                                return <Project projectData={project}/>
                            })
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
