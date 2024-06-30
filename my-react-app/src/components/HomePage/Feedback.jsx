
import YAOPING3 from '../../assets/image/1x/SixthSection/YAOPING3.png';
import CarouselButtons from '../../assets/image/1x/SixthSection/Cbs.png';
import * as figures from '../../assets/image/1x/SixthSection/Figues/Figures';
import '../../css/Home/Feedback.css';

function CustomerFeedback() {
  const figureArray = [figures.Figure1, figures.Figure2, figures.Figure3];

  return (
    <section id="客户反馈">
      <div id="line3"></div>
      <h1>客户反馈</h1>
      <p>来自真实的客户反馈，来自真实的客户反馈，来自真实的客户反馈，来自真实的客户反馈</p>
      <img src={YAOPING3} alt="YAOPING3" id="YAOPING3" />
      <div className="FeedbackContainer">
        {figureArray.map((src, i) => (
          <div className="Feedback" key={i}>
            <div className="redline"></div>
            <div className="info">
              <div className="infotext">
                <p>在15世纪之后，为了减少LOREM IPSUM的可读性，也为了让字母频率与现代英语接近，人们将有些版本中部分字母替换成K、W、Z等拉丁文中没有的字母，或是加入ZZRIL、TAKIMATA等字。</p>
              </div>
              <div className="infoimage">
                <img src={src} alt={`Figure${i + 1}`} />
                <div className="customer">
                  <h3>RICKY</h3>
                  <p>真格基金 项目总监</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="CarouselButtons">
        <div className="Cbs">
          <img src={CarouselButtons} alt="CarouselButtons" />
        </div>
      </div>
    </section>
  );
}

export default CustomerFeedback;
