import { useState, useEffect } from "react";
import SkillsLists from "./SkillsLists";

const Skills = () => {
    const [ selection, setSelection ] = useState("all");

    const skills = [
        {
          "skillcategory": "front-end",
          "skillspic": "css.png",
          "skillsname": "CSS",
          "id": 1
        },
        {
          "skillcategory": "front-end",
          "skillspic": "html.png",
          "skillsname": "HTML",
          "id": 2
        },
        {
          "skillcategory": "working",
          "skillspic": "java.png",
          "skillsname": "Java",
          "id": 3
        },
        {
          "skillcategory": "front-end",
          "skillspic": "javascript.png",
          "skillsname": "Javascript",
          "id": 4
        },
        {
          "skillcategory": "working",
          "skillspic": "mongodb.png",
          "skillsname": "MongoDB",
          "id": 5
        },
        {
          "skillcategory": "back-end",
          "skillspic": "mysql.png",
          "skillsname": "MySQL",
          "id": 6
        },
        {
          "skillcategory": "working",
          "skillspic": "nodejs.png",
          "skillsname": "NodeJS",
          "id": 7
        },
        {
          "skillcategory": "back-end",
          "skillspic": "php.png",
          "skillsname": "PHP",
          "id": 8
        },
        {
          "skillcategory": "both",
          "skillspic": "python.png",
          "skillsname": "Python",
          "id": 9
        },
        {
          "skillcategory": "front-end",
          "skillspic": "react.png",
          "skillsname": "React",
          "id": 10
        },
        {
          "skillcategory": "working",
          "skillspic": "vuejs.png",
          "skillsname": "VueJS",
          "id": 11
        }
      ];

    return (
        <div id="skills">
            <div id="skills-header">SKILLS</div>
            
            <div id="skills-filter">
                <select
                    value={ selection }
                    onChange={(e) => setSelection(e.target.value)}
                >
                    <option value="all">All Tech Stacks</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="working">Working On...</option>
                </select>
            </div>
            <div id="show-skills">
                { skills && <SkillsLists skills={skills} selection={selection} /> }
            </div>
        </div>
    );
}
 
export default Skills;