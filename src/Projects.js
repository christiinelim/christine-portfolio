import { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Projects = () => {
    const [projects, setProjects] = useState(null);
    const [projectLength, setProjectLength] = useState(0);
    const [projectCard, setProjectCard] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/projects')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProjects(data);
            setProjectLength(Math.floor(data.length / 2));
        })
    }, []);

    const project1 = projects ? projects.filter((project, index) => index === 0 || index === projectLength-1) : [];
    const project2 = projects ? projects.filter((project, index) => index === projectLength || index === projects.length-1) : [];
    
    function createProjectCard(image, title, brief, description, stack, git) {
        return (
            <div className="project-card" onClick={() => handleCardClick(title)}>
                <div className="project-card-image">
                    <img src={require(`./images/project/${image}`)} />
                </div>
                <div className="project-card-title">
                    {title}
                </div>
                <div className="project-card-brief">
                    {brief}
                </div>
                {/* { projectCard && selectedProject === title && (
                    <div id="open-card">
                        <div id="card-close-icon" onClick={() => handleCardClick(title)}><CloseOutlined /></div>
                        <div id="open-card-details">
                            <div id="open-card-image">
                                <img src={require(`./images/project/${image}`)} />
                            </div>
                            <div id="open-card-content">
                                <div id="open-card-writeup">{title}</div>
                                <div id="open-card-writeup">{description}</div>
                                <div id="open-card-writeup">{stack}</div>
                                <div id="open-card-writeup">{git}</div>
                            </div>
                        </div>
                    </div>
                )} */}
            </div>
        );
    };

    function handleCardClick(title){
        if (projectCard === false) {
            setProjectCard(true);
            setSelectedProject(title);
        } else{
            setProjectCard(false);
            setSelectedProject(null);
        }
    }


    return (
        <div id="project-container">
            <div id="project-header">PROJECTS</div>
            <div id="projects">
                <div id="project-row">
                    <div id="project-description">What I have worked on</div>
                    {project1 && project1.map(project =>
                        createProjectCard(project.projectpic, project.projectname, project.projectbrief, project.projectdescription, project.projectstack, project.projectgitlink)
                    )}
                </div>
                <div id="project-row">
                    {project2 && project2.map(project =>
                        createProjectCard(project.projectpic, project.projectname, project.projectbrief, project.projectdescription, project.projectstack, project.projectgitlink)
                    )}
                    <div id="view-all">
                        <div id="view-all-projects">View All Projects</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;