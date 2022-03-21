import { Action, Dispatch } from 'redux';
import { VisitedPlace } from '../../models/VisitedPlace';
import * as Actions from './VisitedPlaceActionTypes';
import axios from 'axios';

export const AddVisitedPlaceRequestAction = (
  visitedplace: VisitedPlace
): Actions.AddVisitedPlace => ({
  type: Actions.ADD_VISITEDPLACE_REQUEST,
  payload: visitedplace,
});

export const AddVisitedPlaceSuccessAction = (
  visitedplace: VisitedPlace
): Actions.AddVisitedPlaceSuccess => ({
  type: Actions.ADD_VISITEDPLACE_SUCCESS,
  payload: visitedplace,
});

export const AddVisitedPlaceFailureAction = (
  error: string
): Actions.AddVisitedPlaceFailure => ({
  type: Actions.ADD_VISITEDPLACE_FAILURE,
  payload: error,
});

export const AddVisitedPlaceAction = (visitedplace: VisitedPlace) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(AddVisitedPlaceRequestAction(visitedplace));
    axios
      .post('/api/visited-places/', visitedplace)
      .then((res) => {
        dispatch(AddVisitedPlaceSuccessAction(res.data));
      })
      .catch((error) => dispatch(AddVisitedPlaceFailureAction(error.message)));
  };
};

export const FetchVisitedPlaceRequestAction = (): Actions.FetchVisitedPlace => ({
  type: Actions.FETCH_VISITEDPLACE_REQUEST,
});

export const FetchVisitedPlaceSuccessAction = (
  visitedplace: VisitedPlace[]
): Actions.FetchVisitedPlaceSuccess => ({
  type: Actions.FETCH_VISITEDPLACE_SUCCESS,
  payload: visitedplace,
});

export const FetchVisitedPlaceFailureAction = (
  error: string
): Actions.FetchVisitedPlaceFailure => ({
  type: Actions.FETCH_VISITEDPLACE_FAILURE,
  payload: error,
});

export const FetchVisitedPlaceAction = () => {
  return function (dispatch: Dispatch<Action>, getState: any) {
    dispatch(FetchVisitedPlaceRequestAction());
    axios
      .get<VisitedPlace[]>('/api/visited-places')
      .then((response) =>
        dispatch(FetchVisitedPlaceSuccessAction(response.data))
      )
      .catch((error) => dispatch(FetchVisitedPlaceFailureAction(error)));
  };
};

export const DeleteVisitedPlaceRequestAction = (
  visitedplaceId: string
): Actions.DeleteVisitedPlace => ({
  type: Actions.DELETE_VISITEDPLACE_REQUEST,
  payload: visitedplaceId,
});

export const DeleteVisitedPlaceSuccessAction = (
  visitedplace: VisitedPlace
): Actions.DeleteVisitedPlaceSuccess => ({
  type: Actions.DELETE_VISITEDPLACE_SUCCESS,
  payload: visitedplace,
});

export const DeleteVisitedPlaceFailureAction = (
  error: string
): Actions.DeleteVisitedPlaceFailure => ({
  type: Actions.DELETE_VISITEDPLACE_FAILURE,
  payload: error,
});

export const DeleteVisitedPlaceAction = (visitedplace: VisitedPlace) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(DeleteVisitedPlaceRequestAction(visitedplace._id));
    axios
      .delete(`/api/visited-places/${visitedplace._id}`)
      .then((res) => {
        dispatch(DeleteVisitedPlaceSuccessAction(visitedplace));
      })
      .catch((error) =>
        dispatch(DeleteVisitedPlaceFailureAction(error.message))
      );
  };
};

export const UpdateVisitedPlaceRequestAction = (
  visitedplace: VisitedPlace
): Actions.UpdateVisitedPlace => ({
  type: Actions.UPDATE_VISITEDPLACE_REQUEST,
  payload: visitedplace,
});

export const UpdateVisitedPlaceSuccessAction = (
  visitedplace: VisitedPlace
): Actions.UpdateVisitedPlaceSuccess => ({
  type: Actions.UPDATE_VISITEDPLACE_SUCCESS,
  payload: visitedplace,
});

export const UpdateVisitedPlaceFailureAction = (
  error: string
): Actions.UpdateVisitedPlaceFailure => ({
  type: Actions.UPDATE_VISITEDPLACE_FAILURE,
  payload: error,
});

export const UpdateVisitedPlaceAction = (visitedplace: VisitedPlace) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(UpdateVisitedPlaceRequestAction(visitedplace));
    axios
      .put(`/api/visited-places/${visitedplace._id}`, visitedplace)
      .then((res) => {
        dispatch(UpdateVisitedPlaceSuccessAction(visitedplace));
      })
      .catch((error) =>
        dispatch(UpdateVisitedPlaceFailureAction(error.message))
      );
  };
};
