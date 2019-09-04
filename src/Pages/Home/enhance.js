import { useDispatch, useSelector } from "react-redux";
import { overwriteChapter } from "ducks";

export const useEnhance = () => {
  const dispatch = useDispatch();
  const chapterSelector = state => state.chapter;

  const chapter = useSelector(chapterSelector);

  const setChapter = n => dispatch(overwriteChapter(n));

  return {
    chapter,
    setChapter
  };
};
