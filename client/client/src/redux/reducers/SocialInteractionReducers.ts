import { SocialInteraction } from '../../models/SocialInteraction';
import * as Actions from '../actions/SocialInteractionActionTypes';

export interface SocialInteractionState {
  loading: boolean;
  socialInteraction: SocialInteraction[];
  error: string | undefined;
}

const initialState: SocialInteractionState = {
  loading: false,
  socialInteraction: [],
  error: '',
};

export const SocialInteractionReducers = (
  state = initialState,
  action: Actions.SocialInteractionActionTypes
): SocialInteractionState => {
  switch (action.type) {
    case Actions.ADD_SOCIALINTERACTION_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case Actions.ADD_SOCIALINTERACTION_SUCCESS:
      return {
        ...state,
        socialInteraction: [...state.socialInteraction, action.payload],
        error: '',
        loading: false,
      };
    case Actions.ADD_SOCIALINTERACTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case Actions.FETCH_SOCIALINTERACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Actions.FETCH_SOCIALINTERACTION_SUCCESS:
      return {
        ...state,
        socialInteraction: action.payload,
        error: '',
        loading: false,
      };
    case Actions.FETCH_SOCIALINTERACTION_FAILURE:
      return {
        ...state,
        socialInteraction: [],
        error: action.payload,
        loading: false,
      };
    case Actions.DELETE_SOCIALINTERACTION_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case Actions.DELETE_SOCIALINTERACTION_SUCCESS:
      return {
        ...state,
        socialInteraction: state.socialInteraction.filter(
          (socialInteraction) => socialInteraction._id !== action.payload._id
        ),
        error: '',
        loading: false,
      };
    case Actions.DELETE_SOCIALINTERACTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case Actions.UPDATE_SOCIALINTERACTION_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case Actions.UPDATE_SOCIALINTERACTION_SUCCESS:
      const socialInteraction = [...state.socialInteraction];
      const index = socialInteraction.findIndex(
        (x) => x._id == action.payload._id
      );
      if (index >= 0) {
        socialInteraction[index] = {
          ...action.payload,
        };
      }
      return {
        ...state,
        socialInteraction: socialInteraction,
        error: '',
        loading: false,
      };
    case Actions.UPDATE_SOCIALINTERACTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
