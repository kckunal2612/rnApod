import {ActionTypes} from '../types/ActionTypes';
import {Theme} from '../../utils/strings';

type AppState = {
  theme: 'light' | 'dark';
};

const INITIAL_STATE: AppState = {
  theme: Theme.LIGHT,
};

const themeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_THEME: {
      return {
        ...state,
        theme: action.payload.theme,
      };
    }
    case ActionTypes.TOGGLE_THEME: {
      const newTheme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      return {
        ...state,
        theme: newTheme,
      };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
