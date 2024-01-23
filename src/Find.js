import { LinkedinOutlined, GithubOutlined, ProfileOutlined, MailOutlined } from '@ant-design/icons';

const Find = () => {
    return (
        <div id="find-me">
            <div className="find-me-icon"><a href="https://www.linkedin.com/in/christine-lim-peiyi-548866145/"><LinkedinOutlined /></a></div>
            <div className="find-me-icon"><a href="https://github.com/christiinelim"><GithubOutlined /></a></div>
            {/* <div className="find-me-icon"><a href="/"><ProfileOutlined /></a></div> */}
            {/* <div className="find-me-icon"><a href="christinelim.clp@gmail.com"><MailOutlined /></a></div> */}
        </div>
    );
}
 
export default Find;