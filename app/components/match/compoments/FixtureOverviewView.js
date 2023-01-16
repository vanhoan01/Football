import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FixtureOverviewView = ({events, venue, status, teams}) => {
  let [isLoading, setIsLoading] = React.useState(true);
  let [homeGoals, setHomeGoals] = React.useState([]);
  let [awayGoals, setAwayGoals] = React.useState([]);

  getGoalsData = () => {
    let homeGoalsData = [];
    events.forEach(event => {
      if (event.type == 'Goal' && event['team']['name'] == teams?.home?.name) {
        homeGoalsData = [
          ...homeGoalsData,
          event.player['name'] + ' ' + event.time['elapsed'] + "'",
        ];
      }
    });
    let awayGoalsData = [];
    events.forEach(event => {
      if (
        event['type'] == 'Goal' &&
        event['team']['name'] == teams?.away?.name
      ) {
        awayGoalsData = [
          ...awayGoalsData,
          event['player']['name'] + ' ' + event['time']['elapsed'] + "'",
        ];
      }
    });
    console.log('homeGoalsData:');
    console.log(homeGoalsData);
    homeGoalsData ? setHomeGoals(homeGoalsData) : setHomeGoals([]);
    console.log('homeGoals:');
    console.log(homeGoals);
    awayGoalsData ? setAwayGoals(awayGoalsData) : setAwayGoals([]);
  };

  React.useEffect(() => {
    if (status) {
      getGoalsData();
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.line}></View> */}
      {status ? (
        <View
          style={{
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
              }}>
              {homeGoals?.map((goal, index) => (
                <Text
                  style={styles.playerGoalsText1}
                  key={`home${index.toString()}`}>
                  {goal ? goal : ''}
                </Text>
              ))}
            </View>
            <Ionicons name="football" size={18} color="black" />

            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                alignItems: 'flex-end',
              }}>
              {awayGoals?.map((goal, index) => (
                <Text
                  style={styles.playerGoalsText1}
                  key={`away${index.toString()}`}>
                  {goal ? goal : ''}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.line}></View>
        </View>
      ) : (
        <View></View>
      )}

      <View
        style={{
          flexDirection: 'column',
          marginVertical: 15,
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.playerGoalsText1}>Sân vận động: </Text>
          <Text style={styles.playerGoalsText2}>{venue?.name}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.playerGoalsText1}>Múi giờ: </Text>
          <Text style={styles.playerGoalsText2}>Việt Nam</Text>
        </View>
      </View>
      {/* <View style={styles.line}></View> */}
    </SafeAreaView>
  );
};

export default FixtureOverviewView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  text: {
    fontSize: 42,
  },
  imageThumbnail: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  imageThumbnail1: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  playerGoalsText1: {
    fontSize: 14,
    color: 'black',
  },
  playerGoalsText2: {
    fontSize: 14,
    color: 'gray',
  },
  line: {
    height: 1,
    backgroundColor: '#CCCCCC',
    width: '100%',
  },
  statisticText: {
    fontSize: 16,
    color: 'black',
  },
});
