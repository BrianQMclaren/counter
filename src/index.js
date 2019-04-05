import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import "./styles.css";

export default class LikeDislike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 100,
      dislikeCount: 25,
      active: null
    };
  }

  handleClick = () => {
    if (this.state.likeCount < 101) {
      this.setState({ likeCount: this.state.likeCount + 1 });
    } else {
      this.setState({ likeCount: this.state.likeCount - 1 });
    }
    if (this.state.dislikeCount < 26) {
      this.setState({ dislikeCount: this.state.dislikeCount + 1 });
    } else {
      this.setState({ dislikeCount: this.state.dislikeCount - 1 });
    }
  };

  render() {
    const style = this.state.active ? ".liked" : "";

    return (
      <>
        <div>
          <h2>Like/Dislike</h2>
          <button
            onClick={this.handleClick}
            classNames={style}
            class="like-button"
          >
            Like | <span className="likes-counter">{this.state.likeCount}</span>
          </button>
          <button
            onClick={this.handleClick}
            className="dislike-button disliked"
          >
            Dislike |{" "}
            <span className="dislikes-counter">{this.state.dislikeCount}</span>
          </button>
        </div>
        <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<LikeDislike />, rootElement);
