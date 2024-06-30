import "../../css/AboutUs/AboutHome.css";
import AboutHouseLogo from "../../assets/image/1x/SecondSection/BigLogo.png";
import Chess from "../HomePage/Chess";
import FourIntro from "./FourIntro";
import 执行团队 from "./执行团队";

function AboutHome() {
    return(
        <section id="about-home">
            <div className="logo-container">
                <img src={AboutHouseLogo} alt="Hourse Logo" id="AboutHouseLogo"/>
                
                <div className="AboutFlex1">
                    <div className="line4"></div>
                    <h1>我们的团队</h1>
                </div>  
                <Chess className="Component Aboutposition1" />
                <FourIntro />
            </div> 
            <执行团队 />
            
        </section>
    );

}

export default AboutHome;