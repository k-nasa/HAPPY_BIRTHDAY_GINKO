import React from "react";
import LoadIcon from "Assets/syougikoma.png";

export default ({ nextChapter }) => (
  <div className="chapter1" onAnimationEnd={() => nextChapter()}>
    <div class="chapter1__bg">
      <div class="inner">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
    <img src={LoadIcon} alt="load icon" />
  </div>
);
