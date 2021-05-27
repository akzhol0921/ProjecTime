import React from 'react';
import './Project.css'
import { useHistory } from "react-router-dom";
function Project(props) {
    const history = useHistory();
    const projectData = props.projectData
    function OpenDetail(){
        history.push("/detail");
    }
    return <div className="project-card" onClick={OpenDetail}>
        <div className="project-stat">
            <div className="project-status">
                {projectData.status}
            </div>
            <div className="project-date">
                {projectData.create_time}
            </div>
        </div>
        <div className="project-desc">
            <div className="project-text">
                {projectData.title}
            </div>
            <div className="project-img">
                <img src="/project-img.png" alt=""/>
            </div>
        </div>
        <div className="project-prop">
            <div className="project-attendant">
                <img src="/avatar1.jpeg" alt="avatar"/>
                <img src="/avatar2.jpeg" alt="avatar"/>
                <img src="/avatar3.jpeg" alt="avatar"/>
            </div>
            <div className="prop-icons">
                <div>
                    <i className="material-icons">
                        visibility
                    </i>
                    <p>3</p>
                </div>
                <div>
                    <i className="material-icons">
                        chat_bubble_outline
                    </i>
                    <p>12</p>
                </div>
                <div>
                    <i className="material-icons">
                        attachment
                    </i>
                    <p>7</p>
                </div>
            </div>
        </div>
    </div>;
}


export default Project;
