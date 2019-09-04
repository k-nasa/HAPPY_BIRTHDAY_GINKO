import { createStore } from "redux";

import reducer from "./ducks";

const store = createStore(reducer);

function configureStore() {
  return store;
}

export default configureStore;
