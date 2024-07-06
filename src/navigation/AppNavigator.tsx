// src/navigation/AppNavigator.tsx

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-ionicons';

import { GalleryScreen } from '../screens/GalleryScreen/GalleryScreen';
import { PictureOfTheDayScreen } from '../screens/PictureOfTheDay/PictureOfTheDayScreen';
import { RandomGalleryScreen } from '../screens/RandomGallery/RandomGalleryScreen';
import { Routes } from './routes';
import { AboutScreen } from '../screens/AboutScreen/AboutScreen';

const Tab = createBottomTabNavigator();

const getIconName = (route: any): string | undefined => {
  let iconName;
  if (route.name === Routes.Home) {
    iconName = 'planet';
  } else if (route.name === Routes.Gallery) {
    iconName = 'list';
  }
  return iconName;
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon name={getIconName(route.name)} size={size} color={'red'} />
            );
          },
        })}>
        <Tab.Screen name={Routes.Home} component={PictureOfTheDayScreen} />
        <Tab.Screen name={Routes.Gallery} component={GalleryScreen} />
        <Tab.Screen name={Routes.Random} component={RandomGalleryScreen} />
        <Tab.Screen name={Routes.About} component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
