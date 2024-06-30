import YaoPingimg from "../../assets/image/1x/ThirdSection/YAOPING1.png";
import Carousel1 from "../../assets/image/1x/ThirdSection/Carousel1.png";
import "../../css/Home/GovRecruitment.css";

function GovRecruitment() {
  return (
    <section id="政府引才">
      <div id="Govcontainer">
        <div id="GovcontainerLeft">
          <div className="line2"></div>
          <div id="GovTexts">
              <h1>政府引才</h1>
              <p>曜聘是由海内外一线基金、家族办公室、行业头部企业等资深从业者联合创建的一个前沿科技创投生态平台。</p>
              <p className="text2">我们服务于海内外投资机构、科技创新型企业和政府园区，提供包括股权</p>
              <p className="text3">投融资、创业孵化、战略引才、被投企业生态服务以及创投私董会等多元化产业服务。</p>
              <img src={YaoPingimg} alt="YaoPingimg" id="YaoPingimg" />
          </div>
        </div>
        <div id="GovcontainerRight">
          <img src={Carousel1} alt="Carousel1" id="Carousel1" />
        </div>
      </div>
    </section>
  );
}

export default GovRecruitment;
