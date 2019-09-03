import { createActions, handleActions } from "redux-actions";

const defaultState = {
  chapter: 1
};

export const { overwriteChapter } = createActions({
  OVERWRITE_CHAPTER: chapter => ({ chapter })
});

export default handleActions(
  {
    [overwriteChapter]: (state, { payload: { chapter } }) => {
      return { ...state, chapter };
    }
  },
  defaultState
);
