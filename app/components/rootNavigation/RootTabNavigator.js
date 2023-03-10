import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Appbar} from 'react-native-paper';

import Constant from '../../controller/Constant';
import MatchScreen from '../match/MatchScreen';
import ChartsScreen from '../charts/ChartsScreen';
import StatisticsScreen from '../statistics/StatisticsScreen';
import PlayersScreen from '../players/screens/PlayersScreen';
import {StyleSheet, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const RootTabNavigator = () => {
  const navigation = useNavigation();
  const showSearch = () => {
    navigation.dispatch(StackActions.push(Constant.screenName.Search));
  };
  return (
    <View style={styles.containerMain}>
      <Appbar.Header style={styles.appbarHeader}>
        <Appbar.Content title="Premier League" titleStyle={styles.appbarLogo} />
        <Appbar.Action icon="magnify" onPress={showSearch} />
      </Appbar.Header>
      <View style={styles.navigationContainer}>
        <Tab.Navigator
          style={styles.navigator}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.name) {
                case 'MatchScreen':
                  iconName = focused ? 'football' : 'football-outline';
                  break;

                case 'ChartsScreen':
                  iconName = focused ? 'layers' : 'layers-outline';
                  break;

                case 'StatisticsScreen':
                  iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                  break;

                case 'PlayersScreen':
                  iconName = focused ? 'man' : 'man-outline';
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4285F4',
            tabBarInactiveTintColor: '#555555',
          })}>
          <Tab.Screen
            name={Constant.screenName.Match}
            component={MatchScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Tr???n ?????u',
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name={Constant.screenName.Charts}
            component={ChartsScreen}
            options={{headerShown: false, tabBarLabel: 'B???ng x???p h???ng'}}
          />
          <Tab.Screen
            name={Constant.screenName.Statistics}
            component={StatisticsScreen}
            options={{headerShown: false, tabBarLabel: 'S??? li???u'}}
          />
          <Tab.Screen
            name={Constant.screenName.Players}
            component={PlayersScreen}
            options={{headerShown: false, tabBarLabel: 'C???u th???'}}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default RootTabNavigator;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  navigator: {
    // flex: 1,
  },
  navigationContainer: {
    flex: 1,
  },
  appbarHeader: {
    height: 56,
  },
  appbarLogo: {
    fontWeight: '700',
    color: '#4285F4',
  },
});
