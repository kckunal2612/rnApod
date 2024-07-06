import AsyncStorage from '@react-native-community/async-storage';

const setTheme = async (theme: string) => {
  console.log('setTheme(' + theme + ')');
  await AsyncStorage.setItem('THEME', theme.toString());
};

const getTheme = async () => {
  try {
    return await AsyncStorage.getItem('THEME');
  } catch (error) {
    return 'light';
  }
};

export {setTheme, getTheme};
