import BigLogo from "../../assets/image/1x/SecondSection/BigLogo.png";
import "../../css/Home/AboutUs.css";
import Chess from "./Chess";

function AboutUs() {
    return (
      <section id="AboutUs">
        <div className="BigHouselogo">
          <img src={BigLogo} alt="BigLogo" id="BigLogo" />
        </div>
        <div id="container">
          <div id="line1"></div>
          <h1>关于我们</h1>
          <p className="AboutUsText">
            曜聘是由海内外一线基金、家族办公室、行业头部企业等资深从业者联合创建的一个前沿科技创投生态平台。我们服务于海内外投资机构、科
          </p>
          <p className="AboutUsText">
            技创新型企业和政府园区，提供包括股权投融资、创业孵化、战略引才、被投企业生态服务以及创投私董会等多元化产业服务。
          </p>
          <Chess className="Component moveright"/>
        </div>
      </section>
    );
  }
  
  export default AboutUs;
  