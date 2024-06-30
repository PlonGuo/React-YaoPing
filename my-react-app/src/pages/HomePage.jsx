import "../css/HomePage.css";

import Header from '../components/HomePage/Header';
import Home from '../components/HomePage/Home';
import AboutUs from '../components/HomePage/AboutUs';
import GovRecruitment from '../components/HomePage/GovRecruitment';
import CoopOrganizations from '../components/HomePage/CoopOrganizations';
import Services from '../components/HomePage/Services';
import CustomerFeedback from '../components/HomePage/Feedback';
import SeventhSection from '../components/HomePage/SeventhSection';
import BrandAdvantages from '../components/HomePage/BrandAdvantages';
import Footer from '../components/HomePage/Footer';

import logo from '../assets/image/1x/FirstSection/Logo.png';


function HomePage() {
  return (
    <div>
      <Header className="" logoSrc={logo}/>     
      <Home />
      <AboutUs />
      <GovRecruitment />
      <CoopOrganizations />
      <Services />
      <CustomerFeedback />
      <SeventhSection />
      <BrandAdvantages />
      <Footer />
    </div>
  );
}

export default HomePage;
