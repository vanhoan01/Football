import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Appbar} from 'react-native-paper';

import Constant from './app/controller/Constant';
import MatchScreen from './app/components/match/MatchScreen';
import ChartsScreen from './app/components/charts/ChartsScreen';
import StatisticsScreen from './app/components/statistics/StatisticsScreen';
import PlayersScreen from './app/components/players/PlayersScreen';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.containerMain}>
        <Appbar.Header style={styles.appbarHeader}>
          <Appbar.Content
            title="Football"
            // style={styles.appbarLogo}
            // color="blue"
            titleStyle={styles.appbarLogo}
          />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
        <NavigationContainer style={styles.navigationContainer}>
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
              options={{headerShown: false, tabBarLabel: 'Trận đấu'}}
            />
            <Tab.Screen
              name={Constant.screenName.Charts}
              component={ChartsScreen}
              options={{headerShown: false, tabBarLabel: 'Bảng xếp hạng'}}
            />
            <Tab.Screen
              name={Constant.screenName.Statistics}
              component={StatisticsScreen}
              options={{headerShown: false, tabBarLabel: 'Số liệu'}}
            />
            <Tab.Screen
              name={Constant.screenName.Players}
              component={PlayersScreen}
              options={{headerShown: false, tabBarLabel: 'Cầu thủ'}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    // flexDirection: 'column',
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
