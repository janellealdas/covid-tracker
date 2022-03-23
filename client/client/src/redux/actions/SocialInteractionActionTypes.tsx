import { Action } from 'redux';
import { SocialInteraction } from '../../models/SocialInteraction';

export const ADD_SOCIALINTERACTION_REQUEST = 'ADD_SOCIALINTERACTION_REQUEST';
export const ADD_SOCIALINTERACTION_SUCCESS = 'ADD_SOCIALINTERACTION_SUCCESS';
export const ADD_SOCIALINTERACTION_FAILURE = 'ADD_SOCIALINTERACTION_FAILURE';
export const FETCH_SOCIALINTERACTION_REQUEST =
  'FETCH_SOCIALINTERACTION_REQUEST';
export const FETCH_SOCIALINTERACTION_SUCCESS =
  'FETCH_SOCIALINTERACTION_SUCCESS';
export const FETCH_SOCIALINTERACTION_FAILURE =
  'FETCH_SOCIALINTERACTION_FAILURE';
export const DELETE_SOCIALINTERACTION_REQUEST =
  'DELETE_SOCIALINTERACTION_REQUEST';
export const DELETE_SOCIALINTERACTION_SUCCESS =
  'DELETE_SOCIALINTERACTION_SUCCESS';
export const DELETE_SOCIALINTERACTION_FAILURE =
  'DELETE_SOCIALINTERACTION_FAILURE';
export const UPDATE_SOCIALINTERACTION_REQUEST =
  'UPDATE_SOCIALINTERACTION_REQUEST';
export const UPDATE_SOCIALINTERACTION_SUCCESS =
  'UPDATE_SOCIALINTERACTION_SUCCESS';
export const UPDATE_SOCIALINTERACTION_FAILURE =
  'UPDATE_SOCIALINTERACTION_FAILURE';

export interface AddSocialInteraction extends Action {
  type: typeof ADD_SOCIALINTERACTION_REQUEST;
  payload: SocialInteraction;
}

export interface AddSocialInteractionSuccess extends Action {
  type: typeof ADD_SOCIALINTERACTION_SUCCESS;
  payload: SocialInteraction;
}

export interface AddSocialInteractionFailure extends Action {
  type: typeof ADD_SOCIALINTERACTION_FAILURE;
  payload: string | undefined;
}

export interface FetchSocialInteraction extends Action {
  type: typeof FETCH_SOCIALINTERACTION_REQUEST;
}

export interface FetchSocialInteractionSuccess extends Action {
  type: typeof FETCH_SOCIALINTERACTION_SUCCESS;
  payload: SocialInteraction[];
}

export interface FetchSocialInteractionFailure extends Action {
  type: typeof FETCH_SOCIALINTERACTION_FAILURE;
  payload: string | undefined;
}

export interface DeleteSocialInteraction extends Action {
  type: typeof DELETE_SOCIALINTERACTION_REQUEST;
  payload: string;
}

export interface DeleteSocialInteractionSuccess extends Action {
  type: typeof DELETE_SOCIALINTERACTION_SUCCESS;
  payload: SocialInteraction;
}

export interface DeleteSocialInteractionFailure extends Action {
  type: typeof DELETE_SOCIALINTERACTION_FAILURE;
  payload: string | undefined;
}

export interface UpdateSocialInteraction extends Action {
  type: typeof UPDATE_SOCIALINTERACTION_REQUEST;
  payload: SocialInteraction;
}

export interface UpdateSocialInteractionSuccess extends Action {
  type: typeof UPDATE_SOCIALINTERACTION_SUCCESS;
  payload: SocialInteraction;
}

export interface UpdateSocialInteractionFailure extends Action {
  type: typeof UPDATE_SOCIALINTERACTION_FAILURE;
  payload: string | undefined;
}

export type SocialInteractionActionTypes =
  | AddSocialInteraction
  | AddSocialInteractionSuccess
  | AddSocialInteractionFailure
  | FetchSocialInteraction
  | FetchSocialInteractionSuccess
  | FetchSocialInteractionFailure
  | DeleteSocialInteraction
  | DeleteSocialInteractionSuccess
  | DeleteSocialInteractionFailure
  | UpdateSocialInteraction
  | UpdateSocialInteractionSuccess
  | UpdateSocialInteractionFailure;
