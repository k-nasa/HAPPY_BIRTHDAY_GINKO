import React from "react";
import HappyBirthdayGinko from "Assets/HBG.svg";

export default ({ nextChapter }) => (
  <div className="chapter2">
    <Curtain />
    <FourCorners />
    <SiteMainImg />
    <Snows />
  </div>
);

const SiteMainImg = () => (
  <img
    className="site-main"
    src={HappyBirthdayGinko}
    alt="Happy Birthday Ginko"
  />
);

const Curtain = () => (
  <div className="chapter2__curtain">
    <div />
    <div />
  </div>
);

const FourCorners = () => (
  <div className="top__four-corners">
    <span />
    <span />
    <span />
    <span />
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
