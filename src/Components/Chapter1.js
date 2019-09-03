import React from "react"
import LoadIcon from "Assets/syougikoma.png"

export default ({ nextChapter }) => (
  <div className="chapter1" onAnimationEnd={() => nextChapter()}>
    <img className="chapter1__load-icon" src={LoadIcon}/>
  </div>
);