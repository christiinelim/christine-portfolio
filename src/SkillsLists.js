const SkillsLists = ( { skills, selection } ) => {
    
    let filteredSkills;

    if (selection === "all") {
        filteredSkills = skills.filter(skill => skill.skillcategory !== "working");
    } else if (selection === "frontend") {
        filteredSkills = skills.filter(skill => skill.skillcategory === "front-end");
    } else if (selection === "backend") {
        filteredSkills = skills.filter(skill => skill.skillcategory === "back-end");
    } else if (selection === "working") {
        filteredSkills = skills.filter(skill => skill.skillcategory === "working");
    }

    return (
        <div id="show-skills-list">
            {filteredSkills?.map(skill => (
                <div className="skills-preview" key={skill.id}>
                    <div className="icon-image">
                        <img src={require(`./images/icon/${skill.skillspic}`)} />
                    </div>
                    <div id="stack">
                        <p>{skill.skillsname}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default SkillsLists;