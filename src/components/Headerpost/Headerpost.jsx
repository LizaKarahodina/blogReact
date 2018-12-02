import React, { Component } from "react";
import "./Headerpost.scss";

class Article extends Component {
  state = {
    isOpen: true,
    isComment: true
  };

  render() {
    const { article } = this.props;
    const body = this.state.isOpen && <div>{article.text} </div>;
    const coments = article.coments.map(coment => (
      <div className="coment">{coment.coment}</div>
    ));
    return (
      <div>
        <div className="title">
          {article.title}
          <button className="switch" onClick={this.showHideText}>
            details: {this.state.isOpen ? "hide" : "show"}
          </button>
        </div>
        <div className="text">
          <div className="delail">{body}</div>
          Comments:
          <button className="switch" onClick={this.showHideComments}>
            {this.state.isComment ? "hide" : "show"}
          </button>
          {this.state.isComment ? coments : ""}
          <div>Create on: {article.date} </div>
        </div>
      </div>
    );
  }

  showHideText = () => {
    console.log("click");
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  showHideComments = () => {
    this.setState({
      isComment: !this.state.isComment
    });
  };
}

export default Article;
