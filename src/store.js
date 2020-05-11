import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const initialState = {}

const middleWare = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleWare))
)

export default store