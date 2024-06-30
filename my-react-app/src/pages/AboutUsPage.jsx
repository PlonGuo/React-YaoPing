import "../css/AboutUsPage.css";
import Header from '../components/HomePage/Header';
import AboutHome from '../components/AboutUsPage/AboutHome';
import logo from '../assets/image/AboutPage/Asset 125.png';




function AboutUsPage() {
  return (
    <div>
      <Header className="black-theme" logoSrc={logo}/>
      <AboutHome />
      
    </div>
  );
}

export default AboutUsPage;
