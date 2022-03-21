import { Action, Dispatch } from 'redux';
import { SocialInteraction } from '../../models/SocialInteraction';
import * as Actions from './SocialInteractionActionTypes';
import axios from 'axios';

export const AddSocialInteractionRequestAction = (
  socialinteraction: SocialInteraction
): Actions.AddSocialInteraction => ({
  type: Actions.ADD_SOCIALINTERACTION_REQUEST,
  payload: socialinteraction,
});

export const AddSocialInteractionSuccessAction = (
  socialinteraction: SocialInteraction
): Actions.AddSocialInteractionSuccess => ({
  type: Actions.ADD_SOCIALINTERACTION_SUCCESS,
  payload: socialinteraction,
});

export const AddSocialInteractionFailureAction = (
  error: string
): Actions.AddSocialInteractionFailure => ({
  type: Actions.ADD_SOCIALINTERACTION_FAILURE,
  payload: error,
});

export const AddSocialInteractionAction = (
  socialinteraction: SocialInteraction
) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(AddSocialInteractionRequestAction(socialinteraction));
    axios
      .post('/api/social-interactions/', socialinteraction)
      .then((res) => {
        dispatch(AddSocialInteractionSuccessAction(res.data));
      })
      .catch((error) =>
        dispatch(AddSocialInteractionFailureAction(error.message))
      );
  };
};

export const FetchSocialInteractionRequestAction = (): Actions.FetchSocialInteraction => ({
  type: Actions.FETCH_SOCIALINTERACTION_REQUEST,
});

export const FetchSocialInteractionSuccessAction = (
  socialinteraction: SocialInteraction[]
): Actions.FetchSocialInteractionSuccess => ({
  type: Actions.FETCH_SOCIALINTERACTION_SUCCESS,
  payload: socialinteraction,
});

export const FetchSocialInteractionFailureAction = (
  error: string
): Actions.FetchSocialInteractionFailure => ({
  type: Actions.FETCH_SOCIALINTERACTION_FAILURE,
  payload: error,
});

export const FetchSocialInteractionAction = () => {
  return function (dispatch: Dispatch<Action>, getState: any) {
    dispatch(FetchSocialInteractionRequestAction());
    axios
      .get<SocialInteraction[]>('/api/social-interactions')
      .then((response) =>
        dispatch(FetchSocialInteractionSuccessAction(response.data))
      )
      .catch((error) => dispatch(FetchSocialInteractionFailureAction(error)));
  };
};

export const DeleteSocialInteractionRequestAction = (
  socialinteractionId: string
): Actions.DeleteSocialInteraction => ({
  type: Actions.DELETE_SOCIALINTERACTION_REQUEST,
  payload: socialinteractionId,
});

export const DeleteSocialInteractionSuccessAction = (
  socialinteraction: SocialInteraction
): Actions.DeleteSocialInteractionSuccess => ({
  type: Actions.DELETE_SOCIALINTERACTION_SUCCESS,
  payload: socialinteraction,
});

export const DeleteSocialInteractionFailureAction = (
  error: string
): Actions.DeleteSocialInteractionFailure => ({
  type: Actions.DELETE_SOCIALINTERACTION_FAILURE,
  payload: error,
});

export const DeleteSocialInteractionAction = (
  socialinteraction: SocialInteraction
) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(DeleteSocialInteractionRequestAction(socialinteraction._id));
    axios
      .delete(`/api/social-interactions/${socialinteraction._id}`)
      .then((res) => {
        dispatch(DeleteSocialInteractionSuccessAction(socialinteraction));
      })
      .catch((error) =>
        dispatch(DeleteSocialInteractionFailureAction(error.message))
      );
  };
};

export const UpdateSocialInteractionRequestAction = (
  socialinteraction: SocialInteraction
): Actions.UpdateSocialInteraction => ({
  type: Actions.UPDATE_SOCIALINTERACTION_REQUEST,
  payload: socialinteraction,
});

export const UpdateSocialInteractionSuccessAction = (
  socialinteraction: SocialInteraction
): Actions.UpdateSocialInteractionSuccess => ({
  type: Actions.UPDATE_SOCIALINTERACTION_SUCCESS,
  payload: socialinteraction,
});

export const UpdateSocialInteractionFailureAction = (
  error: string
): Actions.UpdateSocialInteractionFailure => ({
  type: Actions.UPDATE_SOCIALINTERACTION_FAILURE,
  payload: error,
});

export const UpdateSocialInteractionAction = (
  socialinteraction: SocialInteraction
) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(UpdateSocialInteractionRequestAction(socialinteraction));
    axios
      .put(
        `/api/social-interactions/${socialinteraction._id}`,
        socialinteraction
      )
      .then((res) => {
        dispatch(UpdateSocialInteractionSuccessAction(socialinteraction));
      })
      .catch((error) =>
        dispatch(UpdateSocialInteractionFailureAction(error.message))
      );
  };
};
