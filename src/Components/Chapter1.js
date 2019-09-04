import React from "react";
import LoadIcon from "Assets/syougikoma.png";

export default ({ nextChapter }) => (
  <div className="chapter1">
    <Bg />
    <LoadView />
    <div className="end" onAnimationEnd={() => nextChapter()} />
  </div>
);

const Bg = () => (
  <div className="chapter1__bg">
    <div className="inner">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

const LoadView = () => (
  <div className="chapter1__load-view">
    <img className="load-icon" src={LoadIcon} alt="load icon" />
    <div className="progress-bar">
      <div />
    </div>
  </div>
);
