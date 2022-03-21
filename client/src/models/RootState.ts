import { SocialInteractionState } from '../redux/reducers/SocialInteractionReducers';
import { VisitedPlaceState } from '../redux/reducers/VisitedPlaceReducers';

export interface RootState {
  socialInteraction: SocialInteractionState;
}

export interface VisitedPlaceRootState {
  visitedPlace: VisitedPlaceState;
}
