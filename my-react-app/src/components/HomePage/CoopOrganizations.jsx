
import * as images from '../../assets/image/1x/CoopLogo/Image';
import "../../css/Home/CoopOrganizations.css";

function CoopOrganizations() {
  const imageArray = [
    images.image29,
    images.image33,
    images.image31,
    images.image38,
    images.image24,
    images.image28,
    images.image34,
    images.image30,
    images.image37,
    images.image25,
    images.image27,
    images.image35,
    images.image32,
    images.image36,
    images.image26,
  ];

  return (
    <section id="合作组织">
      <div id="line3"></div>
      <h1>合作组织</h1>
      <p>
        曜聘与多地政府、海内外知名投资机构、500强企业、上市公司建立了广泛的合作关系。合作内容包括高层次人才推介会、项目投融资路演、校园招聘、科技项目推
      </p>
      <p>
        介等多形式。通过这些合作，我们致力于为全球前沿科技人才提供全方位的支持，促进创新创业生态繁荣发展。
      </p>
      <div className="Coop-logos">
        {imageArray.map((src, i) => (
          <div className="logo" key={i}>
            <img src={src} alt={`Logo ${i + 1}`} className={i === 3 || i === 8 || i === 13 ? "resizeLogo" : ""} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoopOrganizations;
