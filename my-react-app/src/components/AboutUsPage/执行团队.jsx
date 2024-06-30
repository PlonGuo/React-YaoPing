import "../../css/AboutUs/执行团队.css";
import WINNIE from "../../assets/image/AboutPage/Team/WINNIE.png";


function 执行团队() {
    return(
        <div className="TeamFlex1">
            <h2>执行团队</h2>
            <div className="横线1"></div>
            <div className="横线2"></div>
            <div className="TeamFlex2">
                <div className="MemberFlex">
                    <img src={WINNIE} alt="WINNIE"/>
                    <p className="Name">WINNIE</p>
                    <div className="短渐变横线"></div>
                    <p>曾就职于英国最大寿险资产管理公司</p>
                    <p>国内4大AMC资管及教育类资管5年+经验</p>
                    <p>成都伦敦政治经济学院校友会负责人</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        
        
    );
}

export default 执行团队;