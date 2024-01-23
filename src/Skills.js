import { useState, useEffect } from "react";
import SkillsLists from "./SkillsLists";

const Skills = () => {
    const [ selection, setSelection ] = useState("all");

    const [skills, setSkills] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/skill')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setSkills(data);
        })
    }, [])

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