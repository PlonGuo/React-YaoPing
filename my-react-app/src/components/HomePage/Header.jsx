import { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/image/1x/FirstSection/Logo.png';
import { Link } from "react-router-dom";
import '../../css/Home/Header.css';




function Header({className, logoSrc}) {
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  return (
        <section id="firstPart" className={className}>
          <header>
          
            <nav>
              <img id="logo" src={logoSrc} alt="Logo" />
              <ul>
                <li>
                  首页
                  {/* <Link to="/">首页</Link> */}
                </li>
                <li 
                  onMouseEnter={() => setIsAboutHovered(true)} 
                  onMouseLeave={() => setIsAboutHovered(false)}
                  className="dropdown"
                  >
                  <Link to="/about">关于我们</Link>
                  <div className={`dropdown-content ${isAboutHovered ? 'show' : ''}`}>
                    <Link to="/about/history">我们的历史</Link>
                    <Link to="/about/team">我们的团队</Link>
                    <Link to="/about/join">加入我们</Link>
                  </div>
                </li>
                <li>
                  曜聘团队
                </li>
                <li>
                  政府引才
                </li>
                <li>
                  企业招聘  
                </li>
                <li>
                  职业规划
                </li>
                <li>
                  联系我们
                </li>
                <li>
                  En/中文
                </li>
              </ul>
              <div>
                <button id="login">登录</button>
              </div>
            </nav>
            
              {/* <Routes>
                  <Route path="/about" element={<AboutUsPage />} />
              </Routes> */}
            
          </header>
      </section>
  

  );
}

Header.propTypes = {
  className: PropTypes.string,
  logoSrc: PropTypes.string,
};

Header.defaultProps = {
  className: '',
  logoSrc: logo,
};

export default Header;
