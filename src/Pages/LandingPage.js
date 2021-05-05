import React, {Component} from 'react';
import './LandingPage.css'
import Project from "../Components/Project";


class LandingPage extends Component {
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
                        <Project/>
                        <Project/>


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

                        <Project/>

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

                        <Project/>

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

                        <Project/>

                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;