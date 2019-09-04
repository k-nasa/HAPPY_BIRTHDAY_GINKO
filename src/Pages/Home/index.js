import React from "react";
import { useEnhance } from "./enhance";

import Chapter1 from "Components/Chapter1";

export default () => {
  const { chapter, setChapter } = useEnhance();

  switch (chapter) {
    case 1:
      return <Chapter1 nextChapter={() => setChapter(2)} />;
    default:
      return <p>fin</p>;
  }
};
