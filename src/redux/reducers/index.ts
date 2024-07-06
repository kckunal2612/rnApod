import {combineReducers} from 'redux';
import apodReducer from './apodReducer';
import galleryReducer from './galleryReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  pictureOfTheDay: apodReducer,
  gallery: galleryReducer,
  theme: themeReducer,
});

export default rootReducer;
