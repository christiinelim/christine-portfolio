import Find from "./Find";

const Hero = () => {
    return (
        <div id="hero-image">         
            <div id="hero-pic">
                <div id="hero-my-pic"></div>
            </div>
            
            <div id="intro">
                <div id="intro-container">
                    <div id="hello">Hi, I'm</div>
                    <div id="my-name">Christine Lim</div>
                    <div id="my-description">Programmer|Web Developer|Pharmacist</div>
                    <div id="brief">I love problem solving and have good analytical skills</div>
                    <div id="find-page"><Find /></div>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;