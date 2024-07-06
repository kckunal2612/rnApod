import {ActionTypes} from '../types/ActionTypes';

type GalleryState = {
  startDate: string | null;
  endDate: string | null;
  loading: boolean;
  error: string | null;
  data?: [] | null;
};

const INITIAL_STATE: GalleryState = {
  startDate: null,
  endDate: null,
  loading: false,
  data: [],
  error: null,
};

const galleryReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.GALLERY_FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case ActionTypes.GALLERY_FETCH_SUCCESS: {
      let existingData: any = [];
      if (state.data) {
        existingData = [...state.data];
      }
      // need to have the most recent (chronologically) data first
      const newGalleryData = [...action.payload].reverse();
      const updatedGalleryData = [...existingData, ...newGalleryData];
      return {
        ...state,
        loading: false,
        data: updatedGalleryData,
        error: null,
        startDate: action.date.startDate,
        endDate: action.date.endDate,
      };
    }
    case ActionTypes.GALLERY_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case ActionTypes.GALLERY_RESET: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

export default galleryReducer;
