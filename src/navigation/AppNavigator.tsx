// src/navigation/AppNavigator.tsx

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AboutScreen } from '../screens/AboutScreen/AboutScreen';
import { GalleryScreen } from '../screens/GalleryScreen/GalleryScreen';
import { PictureOfTheDayScreen } from '../screens/PictureOfTheDay/PictureOfTheDayScreen';
import { RandomGalleryScreen } from '../screens/RandomGallery/RandomGalleryScreen';
import { Routes } from './routes';

const Tab = createBottomTabNavigator();

const getIconName = (route: any): string => {
  let iconName = 'home';
  if (route.name === Routes.Home) {
    iconName = 'rocket';
  } else if (route.name === Routes.Gallery) {
    iconName = 'calendar-plus-o';
  } else if (route.name === Routes.Random) {
    iconName = 'refresh';
  } else if (route.name === Routes.About) {
    iconName = 'question';
  }
  return iconName;
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            console.log({ focused, color, size, route });
            return (
              <Icon name={getIconName(route)} size={25} color={color} />
            );
          },
        })}>
        <Tab.Screen
          name={Routes.Home}
          options={{ headerShown: false }}
          component={PictureOfTheDayScreen}
        />
        <Tab.Screen
          name={Routes.Gallery}
          options={{ headerShown: false }}
          component={GalleryScreen}
        />
        <Tab.Screen
          name={Routes.Random}
          options={{ headerShown: false }}
          component={RandomGalleryScreen}
        />
        <Tab.Screen
          name={Routes.About}
          options={{ headerShown: false }}
          component={AboutScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
