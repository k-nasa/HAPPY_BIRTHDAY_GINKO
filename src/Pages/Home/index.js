import React from "react";
import { useEnhance } from "./enhance";

import Chapter1 from "Components/Chapter1";
import Chapter2 from "Components/Chapter2";

export default () => {
  const { chapter, setChapter } = useEnhance();

  switch (chapter) {
    case 1:
      return <Chapter1 nextChapter={() => setChapter(2)} />;
    case 2:
      return <Chapter2 nextChapter={() => setChapter(3)} />;
    default:
      return <p>fin</p>;
  }
};
