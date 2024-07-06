import {ActionTypes} from '../types/ActionTypes';

const fetchApod = (date: string | undefined) => {
  return {
    type: ActionTypes.APOD_FETCH_REQUEST,
    payload: {date: date},
  };
};

export {fetchApod};
