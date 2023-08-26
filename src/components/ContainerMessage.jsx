import React from "react";
import { connect } from "react-redux";
import { firstMessage, randomMessages } from "../redux/actions/actionCreators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareTumblr,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import c from "./Container.module.css";

class ContainerMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
    this.newThema = this.newThema.bind(this);
  }

  // this.props.newColor
  componentDidMount() {
    if (this.props.author == "") {
      this.props.firstMessage();
    }
  }

  newThema() {
    this.setState({
      isVisible: false,
    });
    setTimeout(() => {
      this.props.randomMessages(this.props.newMessage);
      this.setState({
        isVisible: true,
      });
    }, 800);
  }

  render() {
    const mensaje = this.props.newMessage;
    const autor = this.props.author;
    const twitt = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${mensaje}." -${autor}`;
    return (
      <div id="quote-box" className={c.quoteBox}>
        <blockquote
          className={this.state.isVisible ? `${c.visible}` : `${c.visibleNo}`}
        >
          <p id="text" style={{ color: this.props.newColor }}>
            <FontAwesomeIcon
              className={c.icono}
              icon={faQuoteLeft}
              style={{ color: this.props.newColor }}
            />{" "}
            {this.props.newMessage}
          </p>
          <cite id="author" style={{ color: this.props.newColor }}>
            - {this.props.author}
          </cite>
        </blockquote>

        {/* Seccion de Los Botones */}
        <div className={c.bottons}>
          <div className={c.social}>
            <a
              id="tweet-quote"
              className={c.botonSocial}
              href={twitt}
              target="_blank"
            >
              <div className={c.backgroundHover}></div>
              <FontAwesomeIcon
                className={c.icono}
                icon={faSquareTwitter}
                style={{ color: this.props.newColor }}
              />
            </a>
            <a
              className={c.botonSocial}
              href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DKevin%2BKruse%26content%3DWe%2Bmust%2Bbalance%2Bconspicuous%2Bconsumption%2Bwith%2Bconscious%2Bcapitalism.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
              target="_blank"
            >
              <div className={c.backgroundHover}></div>
              <FontAwesomeIcon
                className={c.icono}
                icon={faSquareTumblr}
                style={{ color: this.props.newColor }}
              />
            </a>
          </div>
          <button
            id="new-quote"
            style={{ backgroundColor: this.props.newColor, color: "white" }}
            className={c.boton}
            onClick={this.newThema}
          >
            <div className={c.backgroundHoverBoton}></div>
            New quoted
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newColor: state.color,
    author: state.author,
    newMessage: state.message,
    whiteColor: state.whiteColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    firstMessage: () => dispatch(firstMessage()),
    randomMessages: (msg) => dispatch(randomMessages(msg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerMessage);

// Backtick
/*
ALT + 96 ``
*/