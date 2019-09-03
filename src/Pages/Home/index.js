import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { overwriteChapter } from "ducks";

const useEnhance = () => {
    const dispatch = useDispatch();
    const chapterSelector = state => state.chapter;

    const chapter = useSelector(chapterSelector)

    const setChapter = n => dispatch(overwriteChapter(n));

    return {
        chapter,
        setChapter
    }
}

export default () => {
    const {chapter, setChapter} = useEnhance();

    switch (chapter) {
      case 1:
        return <Chapter1 nextChapter={() => setChapter(2)}/>;
      default:
        return <p>fin</p>;
    }

}

const Chapter1 = ({ nextChapter }) => (
  <div onAnimationEnd={() => nextChapter()}>
    <p className="hoge"> hogheog</p>
  </div>
);