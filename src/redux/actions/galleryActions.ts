import {ActionTypes} from '../types/ActionTypes';

const fetchGallery = (startDate: string, endDate: string) => {
  return {
    type: ActionTypes.GALLERY_FETCH_REQUEST,
    payload: {
      startDate,
      endDate,
    },
  };
};

const resetGallery = () => {
  return {
    type: ActionTypes.GALLERY_RESET,
  };
};

export {fetchGallery, resetGallery};
