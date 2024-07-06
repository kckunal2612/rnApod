import React from 'react';
import {connect} from 'react-redux';
import AppStackNavigator from './navigators/AppStackNavigator';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

interface ThemedProps {
  theme: string;
}

const AppNavigator = (props: ThemedProps) => {
  const {theme} = props;
  const themeObject = theme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={themeObject}>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme.theme,
  };
};

export default connect(mapStateToProps, null)(AppNavigator);
