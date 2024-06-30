import worldmap from "../../assets/image/2x/worldmap.png";
import "../../css/Home/Home.css";


function Home() {
    return (
      <section id="home">
        <main>
          <p id="title1">助力优秀的企业与人更好发展</p>
          <p id="title2">赋能前沿科技创投生态圈</p>
        </main>
        <section className="footer1">
          <section id="topfooter">
            <div id="leftTopText">
              <p>GLOBAL FRONTIER TECH VENTURE ECOSYSTEM PLATFORM</p>
              <p id="smalltext">
                Fundraising, Sourcing, and Portfolio Management
              </p>
            </div>
            <div className="middleTopText">
              <p id="movemiddle">
                GLOBAL FRONTIER TECH VENTURE ECOSYSTEM PLATFORM
              </p>
              <img src={worldmap} alt="worldmap" id="worldmap" />
            </div>
            <div id="rightTopText">
              <p className="moveright1">YAOPIN</p>
              <p>Official Website</p>
            </div>
          </section>
          <div id="horizontal-line"></div>
          <section className="bottomfooter">
            <div id="bottomleftText">
              <p>Empowering Global Tech Venture Ecosystem</p>
              <p>赋能前沿科技创投生态圈</p>
            </div>
            <div id="bottommiddleText">
              <p id="moveleft">
                Fundraising, Sourcing, and Portfolio Management
              </p>
            </div>
            <button>曜聘官网</button>
          </section>
        </section>
      </section>
    );
  }
  
  export default Home;
  