import DotWorldMap from "../../assets/image/1x/EighthSection/DotWorldMap.png";
// import Chess from "../../assets/image/1x/SecondSection/Chess.png";
import '../../css/Home/BrandAdvantages.css';
import Chess from "./Chess"


function BrandAdvantages() {
  const Advantage = [
    "顶级生态资源",
    "行业优质支持",
    "前沿内幕资讯",
  ];

  const Description = [
    "打造前沿科技创投生态圈，链接一线投资机构、知名国央企、 多地政府产投机构、监管机构、独角兽企业、行业智库、猎头 公司等，高效提供投融资对接、专家咨询、人才招募等服务， 满足企业发展所需，为创业者提供一站式的全方位服务。",
    "多位就职于红杉资本、高瓴资本、GGV、SIG、中金等国内外顶 尖机构等科技领域投资人，及哈耶普斯麻、牛剑 G5、清北复交 等世界知名学府的行业资深企业家及创投社群，为国内外行业 交流发展，提供前沿的知识与建议。帮助创业者攻克困难，实 现事业发展。",
    "新能源、半导体、生物医药、人工智能、新材料等高潜科技领 域行业一线投资人、创始人、政策专家、行业猎头等作为嘉宾 不定期分享行业深度信息，深入研究创业创新难题和痛点，挖 掘市场趋势和机遇。通过全力辅助企业解决问题，助力创业者 在市场竞争中取得优势。",
  ];

  return (
    <section id="品牌优势">
      <div id="line3"></div>
      <h1>品牌优势</h1>
      <p>曜聘是由红杉、高盛、谷歌、华为等行业头部企业资深从业者共同创立的一个前沿科技创投生态平台，旨在助力为青年人才打破信息茧房，全面提升前沿科技认知与一线投资思维，开启前沿科技领袖成长之路。</p>
      <img src={DotWorldMap} alt="DotWorldMap" id="DotWorldMap" />
      <div className="advContainer">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="advantage" key={i}>
            <h3>{Advantage[i]}</h3>
            <div className="gradient-line2"></div>
            <p>{Description[i]}</p>
          </div>
        ))}
      </div>
      {/* <div className="Component movebottom">
        <img src={Chess} alt="Chess" className="Chess" id="movetop" />
        <div id="Texts">
          <p>2 MONTHS OF LECTURES BY FINANCE AND TECHNOLOGY GURUS</p>
          <p>1-3 MONTHS OF CORPORATE INTERNSHIP</p>
          <p className="gap textsize1">LEADERS Of Excellence</p>
          <p id="textsize2">YAOPIN Global Tech Venture Leaders</p>
        </div>
      </div> */}
      <Chess className="Component movebottom"/>
    </section>
  );
}

export default BrandAdvantages;
