import chess from "../../assets/image/1x/SecondSection/Chess.png";
import PropTypes from 'prop-types';

function Chess({className}){
    return(
        <div className={className} >
            <img src={chess} alt="Chess" className="Chess" />
            <div id="Texts">
              <p>2 MONTHS OF LECTURES BY FINANCE AND TECHNOLOGY GURUS</p>
              <p>1-3 MONTHS OF CORPORATE INTERNSHIP</p>
              <p className="gap textsize1">LEADERS Of Excellence</p>
              <p id="textsize2">YAOPIN Global Tech Venture Leaders</p>
            </div>
        </div>
    );
}

Chess.propTypes = {
    className: PropTypes.string,
    
  };
  
Chess.defaultProps = {
    className: "",
};

export default Chess;


