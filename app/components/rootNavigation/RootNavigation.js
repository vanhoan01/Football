import * as React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Constant from '../../controller/Constant';
import Teams from '../players/screens/ListPlayer';
import FixtureDetailsScreen from '../match/screens/FixtureDetailsScreen';
import RootTabNavigator from './RootTabNavigator';
import SearchScreen from '../search/screens/SearchScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={Constant.screenName.RootTabNavigator}
          component={RootTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constant.screenName.FixtureDetails}
          component={FixtureDetailsScreen}
        />
        <Stack.Screen
          name={Constant.screenName.Search}
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={Constant.screenName.Teams} component={Teams} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
