import {ActionTypes} from '../types/ActionTypes';

const setTheme = (theme: string) => {
  return {
    type: ActionTypes.SET_CURRENT_THEME,
    payload: {theme: theme},
  };
};

const toggleTheme = () => {
  return {
    type: ActionTypes.TOGGLE_THEME,
  };
};

export {toggleTheme, setTheme};
