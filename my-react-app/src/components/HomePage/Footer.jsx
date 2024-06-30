import Wechat from "../../assets/image/1x/Footer/Wechat.png";
import LinkedIn from "../../assets/image/1x/Footer/LinkedIn.png";
import 咨询 from "../../assets/image/1x/Footer/Asset 98.png";
import '../../css/Home/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-columne">
        <h4>联系我们</h4>
        <div className="social-media-layout">
          <img src={Wechat} alt="Wechat" />
          <img src={LinkedIn} alt="LinkedIn" />
        </div>
        <p>电话:666-666666166</p>
        <p>邮箱: SOPHIE@YAOPINRECRUIT.COM</p>
        <p>沪ICP备20022069号-1</p>
      </div>
      <div id="movebottom3" className="footer-columne">
        <h4 id="arrange1">我们的办公司</h4>
        <div id="arrange2" className="social-media-layout"></div>
        <div id="arrange3">
          <p>上海:黄浦区企业天地1号楼16楼</p>
          <p>成都:成都市西部产业文化中心7楼</p>
          <p>© 2024 Wall Street Tequila.io.inc</p>
        </div>
      </div>
      <div className="footer-columne">
        <p id="movebottom2">免责声明</p>
      </div>
      <div className="footer-columne">
        <div>
          <img src={咨询} alt="咨询" id="咨询" />
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
