// src/navigation/AppNavigator.tsx

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import PictureOfTheDayScreen from '../screens/PictureOfTheDay/PictureOfTheDayScreen';
import GalleryScreen from '../screens/GalleryScreen/GalleryScreen';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="PictureOfTheDay" component={PictureOfTheDayScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
