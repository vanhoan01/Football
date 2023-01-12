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
import TopScoreScreens from '../statistics/Screens/TopScoreScreens';
import TopAssistsScreens from '../statistics/Screens/TopAssistsScreens';
import TopRedCardScreens from '../statistics/Screens/TopRedCardScreens';
import TopYellowCardScreens from '../statistics/Screens/TopYellowCardScreens';
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
        <Stack.Screen name="Score" component={TopScoreScreens} />
        <Stack.Screen name="Assist" component={TopAssistsScreens} />
        <Stack.Screen name="RedCard" component={TopRedCardScreens} />
        <Stack.Screen name="YellowCard" component={TopYellowCardScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
