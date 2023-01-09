import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//npx react-native start
//npx react-native run-android
//https://rapidapi.com/developer/billing/subscriptions-and-usage
//npm install --force
//npx react-native run-android --variant=release

import RootNavigation from './app/components/rootNavigation/RootNavigation';

const Tab = createBottomTabNavigator();

function App() {
  return <RootNavigation />;
}

export default App;
