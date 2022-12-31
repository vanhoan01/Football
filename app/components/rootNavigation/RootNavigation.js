import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../home/components/HomeScreen';
import LoginScreen from '../authentication/login/LoginScreen';
import DetailScreen from '../garage/DetailScreen';
import Constant from '../../controller/Constant';
import UsersScreen from '../users/UsersScreen';
import UserDetailScreen from '../users/UserDetailScreen';
import MatchScreen from '../match/MatchScreen';
import ChartsScreen from '../charts/ChartsScreen';
import StatisticsScreen from '../statistics/StatisticsScreen';
import PlayersScreen from '../players/PlayersScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Constant.screenName.Home}>
        <Stack.Screen
          name={Constant.screenName.Login}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constant.screenName.Home}
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Constant.screenName.Detail}
          component={DetailScreen}
        />

        <Stack.Screen
          name={Constant.screenName.Users}
          component={UsersScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Constant.screenName.UserDetail}
          component={UserDetailScreen}
          options={{title: 'User Detail'}}
        />
        <Stack.Screen
          name={Constant.screenName.Match}
          component={MatchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constant.screenName.Charts}
          component={ChartsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constant.screenName.Statistics}
          component={StatisticsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constant.screenName.Players}
          component={PlayersScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
