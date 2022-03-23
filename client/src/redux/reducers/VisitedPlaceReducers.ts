import { VisitedPlace } from '../../models/VisitedPlace';
import * as Actions from '../actions/VisitedPlaceActionTypes';

export interface VisitedPlaceState {
  isloading: boolean;
  visitedPlace: VisitedPlace[];
  error: string | undefined;
}

const initialState: VisitedPlaceState = {
  isloading: false,
  visitedPlace: [],
  error: '',
};

export const VisitedPlaceReducers = (
  state = initialState,
  action: Actions.VisitedPlaceActionTypes
): VisitedPlaceState => {
  switch (action.type) {
    case Actions.ADD_VISITEDPLACE_REQUEST:
      return {
        ...state,
        error: '',
        isloading: true,
      };
    case Actions.ADD_VISITEDPLACE_SUCCESS:
      return {
        ...state,
        visitedPlace: [...state.visitedPlace, action.payload],
        error: '',
        isloading: false,
      };
    case Actions.ADD_VISITEDPLACE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isloading: false,
      };
    case Actions.FETCH_VISITEDPLACE_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case Actions.FETCH_VISITEDPLACE_SUCCESS:
      return {
        ...state,
        visitedPlace: action.payload,
        error: '',
        isloading: false,
      };
    case Actions.FETCH_VISITEDPLACE_FAILURE:
      return {
        ...state,
        visitedPlace: [],
        error: action.payload,
        isloading: false,
      };
    case Actions.DELETE_VISITEDPLACE_REQUEST:
      return {
        ...state,
        error: '',
        isloading: true,
      };
    case Actions.DELETE_VISITEDPLACE_SUCCESS:
      return {
        ...state,
        visitedPlace: state.visitedPlace.filter(
          (visitedPlace) => visitedPlace._id !== action.payload._id
        ),
        error: '',
        isloading: false,
      };
    case Actions.DELETE_VISITEDPLACE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isloading: false,
      };
    case Actions.UPDATE_VISITEDPLACE_REQUEST:
      return {
        ...state,
        error: '',
        isloading: true,
      };
    case Actions.UPDATE_VISITEDPLACE_SUCCESS:
      const visitedPlace = [...state.visitedPlace];
      const index = visitedPlace.findIndex((x) => x._id == action.payload._id);
      if (index >= 0) {
        visitedPlace[index] = {
          ...action.payload,
        };
      }
      return {
        ...state,
        visitedPlace: visitedPlace,
        error: '',
        isloading: false,
      };
    case Actions.UPDATE_VISITEDPLACE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isloading: false,
      };
    default:
      return state;
  }
};
