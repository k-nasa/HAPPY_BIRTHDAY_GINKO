import React from "react";
import HappyBirthdayGinko from "Assets/HBG.svg";

export default ({ nextChapter }) => (
  <div className="chapter2">
    <Curtain />
    <img
      className="site-main"
      src={HappyBirthdayGinko}
      alt="Happy Birthday Ginko"
    />
    <Snows />
  </div>
);

const Curtain = () => (
  <div className="chapter2__curtain">
    <div />
    <div />
  </div>
);

const Snows = () => (
  <div className="top__snows">
    <div>
      <span />
    </div>
    <div>
      <span />
    </div>
    <div>
      <span />
    </div>
    <div>
      <span />
    </div>
    <div>
      <span />
    </div>
    <div>
      <span />
    </div>
    <div>
      <span />
    </div>
    <div>
      <span />
    </div>
    <div>
      <span />
    </div>
    <div>
      <span />
    </div>
  </div>
);
