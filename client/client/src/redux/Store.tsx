import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Middlewares } from "./LoggerMiddleware";
import monitoEnhancer from "./MonitorEnhancer";
import { SocialInteractionReducers } from "./reducers/SocialInteractionReducers";
import { VisitedPlaceReducers } from "./reducers/VisitedPlaceReducers";

const enhancers = compose(monitoEnhancer);
const reducers = combineReducers({
  socialInteraction: SocialInteractionReducers,
  visitedPlace: VisitedPlaceReducers,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...Middlewares, thunk), enhancers)
  // applyMiddleware(thunk);
);

export default store;
