import YAOPING2 from '../../assets/image/1x/FifthSection/YAOPING2.png';
import * as chessLogos from '../../assets/image/1x/FifthSection/ChessLogos/chesslogos';
import '../../css/Home/Services.css';

function Services() {
  const chessLogoArray = [
    chessLogos.Chess1,
    chessLogos.Chess2,
    chessLogos.Chess3,
    chessLogos.Chess4,
  ];

  const Service = [
    "保全职OFFER",
    "保实习OFFER",
    "职业技能特训",
    "求职技巧提升",
  ];
  
  const Description1 = [
    "海内外学子就业保OFFER",
    "高质量背景提升项目",
    "聚焦AI、金融、咨询、新能源等高薪行业",
    "快速学习简历、面试必备方法论",
  ];

  const Description2 = [
    "入职红利行业、名企、500强、及独角兽企业",
    "收获海内外申学、求职必备入场券",
    "掌握行业研究、数据分析、量化等必备职业技能",
    "海内外名企HR、猎头等资深人力资源从业者亲授",
  ];

  const Description3 = [
    "定制化求职辅导保障求职结果",
    "名企实习经历快速提升个人竞争力",
    "海内外名企、大厂资深从业者倾囊相授",
    "10年+从业经验有效保障求职结果",
  ];

  return (
    <section id="曜聘服务">
      <div className="FourthText">
        <div id="line4"></div>
        <h1>曜聘服务</h1>
        <p>曜聘为在校生职业发展提供系统化、定制化解决方案，助力海内外学子快速斩获全职、实习OFFER。</p>
        <p>曜聘产品涵盖VC/PE、科技、互联网、人工智能、集成电路、量化、咨询、投行等热门求职领域。</p>
        <img src={YAOPING2} alt="YAOPING2" id="YAOPING2" />
      </div>
      <div className="FourServices">
        {chessLogoArray.map((src, i) => (
          <div className="Service" key={i}>
            <img src={src} alt={`Chess${i + 1}`} />
            <h2>{Service [i ]}</h2>
            <div className="gradient-line"></div>
            <p>{Description1[i]}</p>
            <p>{Description2[i]}</p>
            <p>{Description3[i]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
