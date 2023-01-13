import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MatchAPIs from '../../../controller/APIs/MatchAPIs';
import StatisticView from '../compoments/StatisticView';

const FixtureDetailsScreen = () => {
  let [isLoading, setIsLoading] = React.useState(true);
  const route = useRoute();
  let id = route.params?.id;
  console.log(id);
  let [fixtures, setFixtures] = React.useState({});
  // let [predictions, setPredictions] = React.useState({});
  let predictions;
  let [percent, setPercent] = React.useState({});

  // let status;
  let [status, setStatus] = React.useState();
  let fixture;
  let teams;
  let goals;
  let statistics;
  let [result, setResult] = React.useState({});
  let [events, setEvents] = React.useState([]);

  let [homeGoals, setHomeGoals] = React.useState([]);
  let [awayGoals, setAwayGoals] = React.useState([]);

  let [venue, setVenue] = React.useState('');
  let typeVietsub = [
    'Sút trúng đích',
    'Sút xa đích',
    'Số lần sút',
    'Sút bị chặn',
    'Sút trong vòng cấm',
    'Sút ngoài vòng cấm',
    'Phạm lỗi',
    'Phạt góc',
    'Việt vị',
    'Kiểm soát bóng',
    'Thẻ vàng',
    'Thẻ đỏ',
    'Thủ môn cứu thua',
    'Lượt chuyền bóng',
    'Đường chuyền chính xác',
    'Tỷ lệ chuyền bóng chính xác',
  ];

  getStatistics = () => {};

  getGoalsData = () => {
    let homeGoalsData = [];
    console.log('events aaaaaaaaaaa');
    console.log(events);
    events.forEach(event => {
      console.log('event aaaaaaaaaaa');
      console.log(event);
      if (event.type == 'Goal' && event['team']['name'] == result.homeName) {
        homeGoalsData = [
          ...homeGoalsData,
          event.player['name'] + ' ' + event.time['elapsed'] + "'",
        ];
      }
    });
    let awayGoalsData = [];
    events.forEach(event => {
      if (event['type'] == 'Goal' && event['team']['name'] == result.awayName) {
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

  getResultDT = () => {
    fixture = fixtures['fixture'];

    teams = fixtures['teams'];
    console.log('setTeams:');
    console.log(fixtures['teams']);
    console.log(teams);

    goals = fixtures['goals'];
    console.log('setGoals:');
    console.log(goals);
    let statusrs = goals['home'] == null ? false : true;
    setStatus(goals['home'] == null ? false : true);

    // events = fixtures['events'];
    setEvents(fixtures['events']);
    console.log('events:');
    console.log(events);
    statistics = fixtures ? fixtures['statistics'] : {};
    let homeStatistics = statistics[0] ? statistics[0]['statistics'] : {};
    let awayStatistics = statistics[1] ? statistics[1]['statistics'] : {};
    let statisticData = [];
    for (let index = 0; index < homeStatistics.length; index++) {
      statisticData = [
        ...statisticData,
        {
          type: typeVietsub[index],
          home:
            homeStatistics[index]['value'] == null
              ? 0
              : homeStatistics[index]['value'],
          away:
            awayStatistics[index]['value'] == null
              ? 0
              : awayStatistics[index]['value'],
        },
      ];
    }
    setStatisticsDT(statisticData);
    let datedt;
    try {
      datedt = fixture?.date;
    } catch (error) {
      datedt = '2022-11-30T20:00:00+00:00';
    }
    let day = datedt?.substr(8, 2) + '/' + datedt?.substr(5, 2);
    let hour = datedt?.substr(11, 5);
    setVenue(fixture['venue']['name']);
    console.log('venue:');
    console.log(venue);

    let data = {
      homeLogo: teams?.home?.logo,
      homeName: teams?.home?.name,
      homeGoals: statusrs == true ? goals?.home : '',

      awayLogo: teams?.away?.logo,
      awayName: teams?.away?.name,
      awayGoals: statusrs == true ? goals?.away : '',

      textTime1: statusrs == true ? 'KT' : day,
      textTime2: statusrs == true ? day : hour,
    };
    console.log('data');
    console.log(data);
    setResult(data);
    console.log('result');
    console.log(result);
  };

  getFixturesByFixtureId = async () => {
    try {
      let data = await MatchAPIs.getFixturesByFixtureId(id);
      console.log('fixtures data:');
      console.log(data?.response[0]);
      setFixtures(data?.response[0]);
      console.log('fixtures:');
      console.log(fixtures);
    } catch (error) {
      console.log(error);
    }
    getResultDT();

    console.log('getResultDT:');
    console.log(result);
    getGoalsData();
    //Object.keys(this.state.errors).length == 0
    if (fixtures != {}) {
      getPredictionsFixture();
    }
  };

  getPredictionsFixture = async () => {
    try {
      let data = await MatchAPIs.getPredictionsFixture(id);
      console.log('predictions data:');
      console.log(data?.response[0] ? data?.response[0]['predictions'] : {});
      // setPredictions(data?.response[0]['predictions']);
      predictions = data?.response[0] ? data?.response[0]['predictions'] : {};
      console.log('predictions:');
      console.log(predictions);
    } catch (error) {
      console.log(error);
    }
    let percentdt = predictions ? predictions['percent'] : {};
    setPercent(percentdt);
    setIsLoading(false);
  };

  React.useEffect(() => {
    getFixturesByFixtureId();
  }, []);

  let [statisticsDT, setStatisticsDT] = React.useState([
    // {
    //   type: 'Số lần sút',
    //   home: '9',
    //   away: '14',
    // },
  ]);
  let keyFL = ['k0', 'k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'k7', 'k8', 'k9'];
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          style={styles.scrollView}
          data={[0]}
          // listKey={index => `_key${index.toString()}`}
          // keyExtractor={index => `_keyex${index.toString()}`}
          renderItem={item => (
            <View key="key1">
              <View
                style={{
                  flexDirection: 'column',
                  backgroundColor: 'white',
                }}>
                {/* view tỉ số */}
                <View
                  style={{
                    flexDirection: 'column',
                    paddingVertical: 24,
                    paddingHorizontal: 15,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={styles.imageThumbnail}
                      source={{
                        uri: result.homeLogo,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 32,
                        color: 'black',
                        fontWeight: '500',
                      }}>
                      {result?.homeGoals}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: 'black',
                        }}>
                        {result?.textTime1}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: 'black',
                        }}>
                        {result?.textTime2}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 32,
                        color: 'black',
                        fontWeight: '500',
                      }}>
                      {result?.awayGoals}
                    </Text>
                    <Image
                      style={styles.imageThumbnail}
                      source={{
                        uri: result?.awayLogo,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '500',
                      }}>
                      {result?.homeName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '500',
                      }}>
                      {result?.awayName}
                    </Text>
                  </View>
                </View>
                {/* view tỉ số */}
                {status == true ? (
                  result?.homeGoals == 0 && result?.awayGoals == 0 ? (
                    <View></View>
                  ) : (
                    <View>
                      {/* line */}
                      <View style={styles.line}></View>
                      {/* line */}
                      {/* view ghi bàn */}
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
                      {/* view ghi bàn */}
                    </View>
                  )
                ) : (
                  <View></View>
                )}
                {/* line */}
                <View style={styles.line}></View>
                {/* line */}
                {/* view sân vận động */}
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
                    <Text style={styles.playerGoalsText2}>{venue}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.playerGoalsText1}>Ảnh: </Text>
                    <Text style={styles.playerGoalsText2}>Falmer Stadium</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.playerGoalsText1}>Múi giờ: </Text>
                    <Text style={styles.playerGoalsText2}>Việt Nam</Text>
                  </View>
                </View>
                {/* view sân vận động */}
                {/* line */}
                {/* <View style={styles.line}></View> */}
              </View>
              {/* line */}
              {/* view thống kê trận đấu */}
              {status ? (
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 15,
                    backgroundColor: 'white',
                    paddingHorizontal: 15,
                    paddingBottom: 15,
                  }}>
                  {/* <View style={styles.line}></View> */}
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',
                      color: 'black',
                      marginVertical: 15,
                    }}>
                    Thống kê về trận đấu
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <Image
                      style={styles.imageThumbnail1}
                      source={{
                        uri: result.homeLogo,
                      }}
                    />
                    <Image
                      style={styles.imageThumbnail1}
                      source={{
                        uri: result.awayLogo,
                      }}
                    />
                  </View>
                  <FlatList
                    data={statisticsDT}
                    listKey={index => `_key${index.toString()}`}
                    // keyExtractor={index => `extractor${index.toString()}`}
                    renderItem={(item, index) => (
                      <StatisticView statistic={item} key={index} />
                    )}
                    numColumns={1}
                    keyExtractor={item => item.type}
                  />
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 15,
                    backgroundColor: 'white',
                    paddingHorizontal: 15,
                    paddingBottom: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',
                      color: 'black',
                      marginVertical: 15,
                    }}>
                    Xác xuất thắng
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '500',
                        flex: 1,
                      }}>
                      {result?.homeName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '500',
                        flex: 1,
                        textAlign: 'center',
                      }}>
                      Hòa
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '500',
                        flex: 1,
                        textAlign: 'right',
                      }}>
                      {result?.awayName}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '500',
                        flex: 1,
                      }}>
                      {percent?.home}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'grey',
                        fontWeight: '500',
                        flex: 1,
                        textAlign: 'center',
                      }}>
                      {percent?.draw}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '500',
                        flex: 1,
                        textAlign: 'right',
                      }}>
                      {percent?.away}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        height: 5,
                        width: percent ? percent['home'] : 0,
                      }}></View>
                    <View
                      style={{
                        backgroundColor: 'grey',
                        height: 5,
                        width: percent ? percent['draw'] : 0,
                      }}></View>
                    <View
                      style={{
                        backgroundColor: 'blue',
                        height: 5,
                        width: percent ? percent['away'] : 0,
                      }}></View>
                  </View>
                </View>
              )}
            </View>
          )}
          // numColumns={1}
        />
      )}
    </SafeAreaView>
  );
};

export default FixtureDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  scrollView: {
    // marginHorizontal: 12,
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
