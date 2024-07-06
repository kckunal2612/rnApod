import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../routes';
import TabNavigator from './TabNavigator';
import DetailsScreen from '../../components/home-screen/DetailsScreen';
import FullScreenImageView from '../../components/full-screen-image/FullScreenImageView';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={Routes.MainTab}>
      <Stack.Screen
        name={Routes.MainTab}
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={Routes.Details} component={DetailsScreen} />
      <Stack.Screen
        name={Routes.FullScreenImage}
        component={FullScreenImageView}
      />
    </Stack.Navigator>
  );
}
