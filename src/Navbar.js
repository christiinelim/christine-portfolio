import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { useState } from "react";

const Navbar = () => {
    const [ menu, setMenu ] = useState(true);
    
    const handleClick = () => {
        const navBarDisplay = document.getElementById("nav-bar-small");
        
        if (menu === true){
            setMenu(false);
            handleDisplay();
            navBarDisplay.style.display = "flex";
        } else{
            setMenu(true);
            handleDisplay();
            navBarDisplay.style.display = "none";
        }
    };

    const handleDisplay = () => {
        return menu ? 'visible' : 'hidden';
    };

    return (
        <div className="nav">
            <div id="menu-icon">
                { menu && <button onClick={ handleClick }><MenuOutlined /></button> }
                { !menu && <button onClick={ handleClick }><CloseOutlined /></button>}
            </div>

            <nav id="nav-bar">
                <a href="#hero-image" className="nav-items">HOME</a>
                <a href="#about" className="nav-items">ABOUT</a>
                <a href="#skills" className="nav-items">SKILLS</a>
                <a href="#project-container" className="nav-items">PROJECTS</a>
                <a href="#contact-container" className="nav-items">CONTACT</a>
            </nav>

            <nav id="nav-bar-small">
                <a href="#hero-image" onClick={ handleClick } className="nav-items-small">HOME</a>
                <a href="#about" onClick={ handleClick } className="nav-items-small">ABOUT</a>
                <a href="#skills" onClick={ handleClick } className="nav-items-small">SKILLS</a>
                <a href="#project-container" onClick={ handleClick } className="nav-items-small">PROJECTS</a>
                <a href="#contact-container" onClick={ handleClick } className="nav-items-small">CONTACT</a>
            </nav>    
            <FloatButton.BackTop />           
        </div>
    );
}
 
export default Navbar;