import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../components/home-screen/HomeScreen';
import {Routes} from '../routes';
import GalleryScreen from '../../components/gallery-screen/GalleryScreen';
import AboutScreen from '../../components/about-page/AboutScreen';

const Tab = createBottomTabNavigator();

const getIconName = (route: any): string | undefined => {
  if (route.name === Routes.Home) {
    return 'home';
  } else if (route.name === Routes.Gallery) {
    return 'ios-list';
  } else if (route.name === Routes.About) {
    return 'ios-information-circle-outline';
  }
  return undefined;
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = getIconName(route);
          // @ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'maroon',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={Routes.Home} component={HomeScreen} />
      <Tab.Screen name={Routes.Gallery} component={GalleryScreen} />
      <Tab.Screen name={Routes.About} component={AboutScreen} />
    </Tab.Navigator>
  );
}
