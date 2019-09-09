import React from "react";
import HappyBirthdayGinko from "Assets/HBG.svg";
import ShareLink from "Assets/share-link.png";

const tweetLink = "https://twitter.com/intent/tweet?text=%E7%A9%BA%E9%8A%80%E5%AD%90%E8%AA%95%E7%94%9F%E7%A5%AD2019%20%E9%9D%9E%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88%20%40nasa_desu&url=https%3A%2F%2Fhappy-birthday-ginko.netlify.com%2F&hashtags=%E7%A9%BA%E9%8A%80%E5%AD%90%E7%94%9F%E8%AA%95%E7%A5%AD2019"

export default ({ nextChapter }) => (
  <div className="chapter2">
    <Curtain />
    <FourCorners />
    <SiteMainImg />
    <Snows />
    <ShareBtn />
  </div>
);

const ShareBtn = () => (
  <div className="top__nav">
    <a
      className="top__share-btn"
      target="_blank"
      href={tweetLink}
    >
      Twitterでシェア
    </a>
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
