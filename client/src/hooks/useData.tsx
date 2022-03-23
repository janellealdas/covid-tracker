import { useSelector } from 'react-redux';
import { RootState } from '../models/RootState';
import { VisitedPlaceRootState } from '../models/RootState';
import { SocialInteraction } from '../models/SocialInteraction';
import { VisitedPlace } from '../models/VisitedPlace';
import { SocialInteractionState } from '../redux/reducers/SocialInteractionReducers';
import { VisitedPlaceState } from '../redux/reducers/VisitedPlaceReducers';

export interface UseDataHook {
  socialInteraction: Array<SocialInteraction>;
  visitedPlace: Array<VisitedPlace>;
  loading: boolean | undefined;
  isloading: boolean | undefined;
}

export const useData = (): UseDataHook => {
  const { socialInteraction, loading } = useSelector<
    RootState,
    SocialInteractionState
  >((state) => state.socialInteraction);
  const { visitedPlace, isloading } = useSelector<
    VisitedPlaceRootState,
    VisitedPlaceState
  >((state) => state.visitedPlace);

  return {
    socialInteraction,
    visitedPlace,
    loading,
    isloading,
  };
};
