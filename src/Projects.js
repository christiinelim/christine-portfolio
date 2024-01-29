import { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined, GithubOutlined } from '@ant-design/icons';

const Projects = () => {
    const [projectCard, setProjectCard] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
          "projectpic": "probiotic-webdatabase.png",
          "projectname": "Probiotics Web Database",
          "projectbrief": "The purpose of this database is to serve as a source of information for both healthcare professionals and public to search up information regarding products containing probiotics.",
          "projectdescription": "The probiotic web database compiles probiotic products available in Singapore as well as the clinical evidence on probiotics’ efficacy. It was developed to help healthcare professionals make appropriate evidence-based probiotic recommendations.",
          "projectstack": "HTML CSS Javascript PHP MySQL",
          "projectgitlink": "https://github.com/christiinelim/probiotic-web-database",
          "id": 1
        },
        {
          "projectpic": "work-in-progress.png",
          "projectname": "Work in progress",
          "projectbrief": "To be updated...",
          "projectdescription": "The project card is to be updated...",
          "projectstack": "",
          "projectgitlink": "/",
          "id": 2
        },
        {
          "projectpic": "work-in-progress.png",
          "projectname": "Work in progress",
          "projectbrief": "To be updated...",
          "projectdescription": "The project card is to be updated...",
          "projectstack": "",
          "projectgitlink": "/",
          "id": 3
        },
        {
          "projectpic": "work-in-progress.png",
          "projectname": "Work in progress",
          "projectbrief": "To be updated...",
          "projectdescription": "The project card is to be updated...",
          "projectstack": "",
          "projectgitlink": "/",
          "id": 4
        }
      ];
    
    const projectLength = Math.floor(projects.length / 2);

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
                { projectCard && selectedProject === title && (
                    <div id="open-card">
                        <div id="card-close-icon" onClick={() => handleCardClick(title)}><CloseOutlined /></div>
                        <div id="open-card-details">
                            <div id="open-card-image">
                                <img src={require(`./images/project/${image}`)} />
                            </div>
                            <div id="open-card-content">
                                <div id="open-card-title">{title}</div>
                                <div id="open-card-description">{description}</div>
                                <div id="open-card-stack">{stack}</div>
                                <div id="open-card-git"><a href={git}><GithubOutlined /></a></div>
                            </div>
                        </div>
                    </div>
                )}
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
                        <div id="view-all-projects">Contact me for more info!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;