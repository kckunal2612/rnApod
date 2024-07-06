import {IApod} from '../../models/apodModels';
import {ActionTypes} from '../types/ActionTypes';

type ApodState = {
  loading: boolean;
  error: string | null;
  data?: IApod | null;
};

const INITIAL_STATE: ApodState = {
  loading: false,
  data: null,
  error: null,
};

const apodReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.APOD_FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case ActionTypes.APOD_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    }
    case ActionTypes.APOD_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default apodReducer;
