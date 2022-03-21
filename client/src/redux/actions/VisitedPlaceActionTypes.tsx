import { Action } from 'redux';
import { VisitedPlace } from '../../models/VisitedPlace';

export const ADD_VISITEDPLACE_REQUEST = 'ADD_VISITEDPLACE_REQUEST';
export const ADD_VISITEDPLACE_SUCCESS = 'ADD_VISITEDPLACE_SUCCESS';
export const ADD_VISITEDPLACE_FAILURE = 'ADD_VISITEDPLACE_FAILURE';
export const FETCH_VISITEDPLACE_REQUEST = 'FETCH_VISITEDPLACE_REQUEST';
export const FETCH_VISITEDPLACE_SUCCESS = 'FETCH_VISITEDPLACE_SUCCESS';
export const FETCH_VISITEDPLACE_FAILURE = 'FETCH_VISITEDPLACE_FAILURE';
export const DELETE_VISITEDPLACE_REQUEST = 'DELETE_VISITEDPLACE_REQUEST';
export const DELETE_VISITEDPLACE_SUCCESS = 'DELETE_VISITEDPLACE_SUCCESS';
export const DELETE_VISITEDPLACE_FAILURE = 'DELETE_VISITEDPLACE_FAILURE';
export const UPDATE_VISITEDPLACE_REQUEST = 'UPDATE_VISITEDPLACE_REQUEST';
export const UPDATE_VISITEDPLACE_SUCCESS = 'UPDATE_VISITEDPLACE_SUCCESS';
export const UPDATE_VISITEDPLACE_FAILURE = 'UPDATE_VISITEDPLACE_FAILURE';

export interface AddVisitedPlace extends Action {
  type: typeof ADD_VISITEDPLACE_REQUEST;
  payload: VisitedPlace;
}

export interface AddVisitedPlaceSuccess extends Action {
  type: typeof ADD_VISITEDPLACE_SUCCESS;
  payload: VisitedPlace;
}

export interface AddVisitedPlaceFailure extends Action {
  type: typeof ADD_VISITEDPLACE_FAILURE;
  payload: string | undefined;
}

export interface FetchVisitedPlace extends Action {
  type: typeof FETCH_VISITEDPLACE_REQUEST;
}

export interface FetchVisitedPlaceSuccess extends Action {
  type: typeof FETCH_VISITEDPLACE_SUCCESS;
  payload: VisitedPlace[];
}

export interface FetchVisitedPlaceFailure extends Action {
  type: typeof FETCH_VISITEDPLACE_FAILURE;
  payload: string | undefined;
}

export interface DeleteVisitedPlace extends Action {
  type: typeof DELETE_VISITEDPLACE_REQUEST;
  payload: string;
}

export interface DeleteVisitedPlaceSuccess extends Action {
  type: typeof DELETE_VISITEDPLACE_SUCCESS;
  payload: VisitedPlace;
}

export interface DeleteVisitedPlaceFailure extends Action {
  type: typeof DELETE_VISITEDPLACE_FAILURE;
  payload: string | undefined;
}

export interface UpdateVisitedPlace extends Action {
  type: typeof UPDATE_VISITEDPLACE_REQUEST;
  payload: VisitedPlace;
}

export interface UpdateVisitedPlaceSuccess extends Action {
  type: typeof UPDATE_VISITEDPLACE_SUCCESS;
  payload: VisitedPlace;
}

export interface UpdateVisitedPlaceFailure extends Action {
  type: typeof UPDATE_VISITEDPLACE_FAILURE;
  payload: string | undefined;
}

export type VisitedPlaceActionTypes =
  | AddVisitedPlace
  | AddVisitedPlaceSuccess
  | AddVisitedPlaceFailure
  | FetchVisitedPlace
  | FetchVisitedPlaceSuccess
  | FetchVisitedPlaceFailure
  | DeleteVisitedPlace
  | DeleteVisitedPlaceSuccess
  | DeleteVisitedPlaceFailure
  | UpdateVisitedPlace
  | UpdateVisitedPlaceSuccess
  | UpdateVisitedPlaceFailure;
