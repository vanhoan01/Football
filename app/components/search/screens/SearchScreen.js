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
  TextInput,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SearchAPIs from '../../../controller/APIs/SearchAPIs';
import KeyView from '../compoments/KeyView';
import FixtureView from '../../match/compoments/FixtureView';
import PlayerItem from '../compoments/PlayerItem';
import {blueA700} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const SearchScreen = () => {
  // React.useEffect(() => {}, []);
  const navigation = useNavigation();
  const goBack = () => {
    navigation.dispatch(StackActions.pop(1));
  };

  const [keyword, setKeyword] = React.useState('');
  const [keywords, setKeywords] = React.useState([]);
  const [input, setInput] = React.useState();
  const [submit, setSubmit] = React.useState(false);
  const [teams, setTeams] = React.useState([
    {
      code: 'MUN',
      country: 'England',
      founded: 1878,
      id: 33,
      logo: 'https://media-2.api-sports.io/football/teams/33.png',
      name: 'Manchester United',
      national: false,
    },
    {
      code: 'NEW',
      country: 'England',
      founded: 1892,
      id: 34,
      logo: 'https://media-2.api-sports.io/football/teams/34.png',
      name: 'Newcastle',
      national: false,
    },
    {
      code: 'BOU',
      country: 'England',
      founded: 1899,
      id: 35,
      logo: 'https://media-2.api-sports.io/football/teams/35.png',
      name: 'Bournemouth',
      national: false,
    },
    {
      code: 'FUL',
      country: 'England',
      founded: 1879,
      id: 36,
      logo: 'https://media-3.api-sports.io/football/teams/36.png',
      name: 'Fulham',
      national: false,
    },
    {
      code: 'WOL',
      country: 'England',
      founded: 1877,
      id: 39,
      logo: 'https://media-1.api-sports.io/football/teams/39.png',
      name: 'Wolves',
      national: false,
    },
    {
      code: 'LIV',
      country: 'England',
      founded: 1892,
      id: 40,
      logo: 'https://media-1.api-sports.io/football/teams/40.png',
      name: 'Liverpool',
      national: false,
    },
    {
      code: 'SOU',
      country: 'England',
      founded: 1885,
      id: 41,
      logo: 'https://media-3.api-sports.io/football/teams/41.png',
      name: 'Southampton',
      national: false,
    },
    {
      code: 'ARS',
      country: 'England',
      founded: 1886,
      id: 42,
      logo: 'https://media-1.api-sports.io/football/teams/42.png',
      name: 'Arsenal',
      national: false,
    },
    {
      code: 'EVE',
      country: 'England',
      founded: 1878,
      id: 45,
      logo: 'https://media-2.api-sports.io/football/teams/45.png',
      name: 'Everton',
      national: false,
    },
    {
      code: 'LEI',
      country: 'England',
      founded: 1884,
      id: 46,
      logo: 'https://media-1.api-sports.io/football/teams/46.png',
      name: 'Leicester',
      national: false,
    },
    {
      code: 'TOT',
      country: 'England',
      founded: 1882,
      id: 47,
      logo: 'https://media-1.api-sports.io/football/teams/47.png',
      name: 'Tottenham',
      national: false,
    },
    {
      code: 'WES',
      country: 'England',
      founded: 1895,
      id: 48,
      logo: 'https://media-2.api-sports.io/football/teams/48.png',
      name: 'West Ham',
      national: false,
    },
    {
      code: 'CHE',
      country: 'England',
      founded: 1905,
      id: 49,
      logo: 'https://media-1.api-sports.io/football/teams/49.png',
      name: 'Chelsea',
      national: false,
    },
    {
      code: 'MAC',
      country: 'England',
      founded: 1880,
      id: 50,
      logo: 'https://media-1.api-sports.io/football/teams/50.png',
      name: 'Manchester City',
      national: false,
    },
    {
      code: 'BRI',
      country: 'England',
      founded: 1901,
      id: 51,
      logo: 'https://media-1.api-sports.io/football/teams/51.png',
      name: 'Brighton',
      national: false,
    },
    {
      code: 'CRY',
      country: 'England',
      founded: 1905,
      id: 52,
      logo: 'https://media-2.api-sports.io/football/teams/52.png',
      name: 'Crystal Palace',
      national: false,
    },
    {
      code: 'BRE',
      country: 'England',
      founded: 1889,
      id: 55,
      logo: 'https://media-1.api-sports.io/football/teams/55.png',
      name: 'Brentford',
      national: false,
    },
    {
      code: 'LEE',
      country: 'England',
      founded: 1919,
      id: 63,
      logo: 'https://media-2.api-sports.io/football/teams/63.png',
      name: 'Leeds',
      national: false,
    },
    {
      code: 'NOT',
      country: 'England',
      founded: 1865,
      id: 65,
      logo: 'https://media-3.api-sports.io/football/teams/65.png',
      name: 'Nottingham Forest',
      national: false,
    },
    {
      code: 'AST',
      country: 'England',
      founded: 1874,
      id: 66,
      logo: 'https://media-3.api-sports.io/football/teams/66.png',
      name: 'Aston Villa',
      national: false,
    },
  ]);
  let [fixtures, setFixtures] = React.useState([]);
  let [players, setPlayers] = React.useState([]);
  // let players = [];
  const [tab, setTab] = React.useState(0);
  let kwTeams = [
    'Manchester City',
    'Manchester United',
    'Liverpool',
    'Chelsea',
    'Tottenham',
    'Arsenal',
  ];

  let kwHeadToHead = [];
  kwTeams.forEach(team => {
    let key = team;
    kwTeams.forEach(team => {
      if (key != team) {
        kwHeadToHead = [...kwHeadToHead, key + ' với ' + team];
      }
    });
  });

  let kwPlayers = [
    'Erling Haaland',
    'Julián Álvarez',
    'Kevin De Bruyne',
    'Riyad Mahrez',
    'Phil Foden',
    'Antony',
    'Bruno Fernandes',
    'David de Gea',
    'Mohamed Salah',
    'Darwin Núñez',
    'Virgil van Dijk',
  ];

  let keywordsData = [...kwTeams, ...kwHeadToHead, ...kwPlayers];
  console.log('keywordsData: ');
  console.log(keywordsData);

  const getKeywords = keyword => {
    let keywordsResult = [];
    keywordsData.forEach(key => {
      if (key?.toLowerCase().includes(keyword.toLowerCase())) {
        keywordsResult = [...keywordsResult, key];
      }
    });
    console.log(keywordsResult.length);
    setKeywords(keywordsResult);
  };

  search = key => {
    let keyArr = [];
    keyArr = key.split('với');
    keyArr = keyArr?.map(element => element.trim());
    console.log('keyArr');
    console.log(keyArr);
    let key1 = '';
    let key2 = '';
    let id1 = 0;
    let id2 = 0;
    if (keyArr.length == 2) {
      key1 = keyArr[0];
      key2 = keyArr[1];
      if (key1.length != 0) {
        let team = teams.find(element => {
          return element?.name?.toLowerCase().includes(key1.toLowerCase());
        });
        console.log('team');
        console.log(team);
        id1 = team?.id ? team?.id : 0;
      }
      if (key2.length != 0) {
        let team = teams.find(element => {
          return element?.name?.toLowerCase().includes(key2.toLowerCase());
        });
        id2 = team?.id ? team?.id : 0;
      }
    } else if (keyArr.length == 1) {
      key1 = keyArr[0];
      if (key1.length != 0) {
        let team = teams.find(element => {
          return element?.name?.toLowerCase().includes(key1.toLowerCase());
        });
        id1 = team?.id ? team?.id : 0;
      }
    }
    console.log('id1');
    console.log(id1);
    console.log('id2');
    console.log(id2);
    if (id1 != 0 && id2 != 0) {
      searchFixturesTwoTeams(id1 + '-' + id2);
    } else if (id1 != 0) {
      searchFixturesTeam(id1);
    } else if (id2 != 0) {
      searchFixturesTeam(id2);
    }
    console.log('data searchFixturesTeam');
    console.log(fixtures);
  };

  const onSubmit = key => {
    // Alert.alert(key);
    setFixtures([]);
    setPlayers([]);
    setSubmit(true);
    setKeyword(key);
    setTab(0);
    search(key);
  };
  const onSelectKey = key => {
    setFixtures([]);
    setPlayers([]);
    setInput(key);
    // getKeywords(key);
    setTab(0);
    setKeyword(key);
    setSubmit(true);
    search(key);
  };

  let searchTeam = async () => {
    try {
      let data = await SearchAPIs.searchTeam();
      let map = data?.response?.map(element => element?.team);
      // teams = map;
      setTeams(map);
      console.log('data searchTeam');
      console.log(map);
      if (teams[0] != null) {
        console.log(teams);
      }
    } catch (error) {
      console.log(error);
      setTeams([]);
    }
  };

  let searchFixturesTeam = async id => {
    try {
      let data = await SearchAPIs.searchFixturesTeam(id);
      setFixtures(data?.response);
      console.log('data searchFixturesTeam');
      console.log(data?.response);
      console.log(fixtures);
    } catch (error) {
      console.log(error);
      setFixtures([]);
    }
  };

  let searchFixturesTwoTeams = async h2h => {
    try {
      let data = await SearchAPIs.searchFixturesTwoTeams(h2h);
      setFixtures(data?.response);
      console.log('data searchFixturesTeam');
      console.log(data?.response);
      console.log(fixtures);
    } catch (error) {
      console.log(error);
      setFixtures([]);
    }
  };

  let searchPlayer = async () => {
    try {
      let data = await SearchAPIs.searchPlayer(keyword);
      setPlayers(data?.response);
      players = data?.response;
      console.log('keyword');
      console.log(keyword);
      console.log('data searchPlayer');
      console.log(data?.response);
      console.log(players);
    } catch (error) {
      console.log(error);
      setPlayers([]);
      // players = [];
    }
  };

  React.useEffect(() => {
    getKeywords('');
    // searchTeam();
    console.log('teams');
    console.log(teams);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 56,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              paddingHorizontal: 10,
              // backgroundColor: 'red',
            }}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              onPress={goBack}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#DDDDDD',
              marginVertical: 9,
              marginRight: 10,
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              style={{
                flex: 1,
                paddingHorizontal: 10,
                fontSize: 15,
                textAlignVertical: 'center',
              }}
              placeholder="Nhập đội bóng hoặc cầu thủ"
              onChangeText={text => {
                console.log(text ? text : '');
                getKeywords(text);
                setInput(text);
                setKeyword(text);
              }}
              onFocus={() => {
                setSubmit(false);
              }}
              onSubmitEditing={nativeEvent => {
                console.log(nativeEvent?.nativeEvent?.text);
                onSubmit(nativeEvent?.nativeEvent?.text);
              }}
              value={input}></TextInput>
            <Ionicons
              name="search"
              size={24}
              color="black"
              style={{
                paddingHorizontal: 10,
              }}
            />
            {/* <Ionicons
              name="md-close"
              size={24}
              color="black"
              style={{
                paddingRight: 10,
              }}
            /> */}
          </View>
        </View>

        {submit ? (
          <View
            style={{
              marginBottom: 15,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,
                backgroundColor: 'white',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setTab(0);
                  search(keyword);
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      textAlign: 'center',
                      fontSize: 16,
                      paddingVertical: 5,
                      color: tab == 0 ? 'blue' : 'black',
                    }}>
                    Trận đấu
                  </Text>
                  {tab == 0 ? (
                    <View
                      style={{
                        height: 3,
                        backgroundColor: 'blue',
                      }}></View>
                  ) : (
                    <View></View>
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setTab(1);
                  searchPlayer(keyword);
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      textAlign: 'center',
                      fontSize: 16,
                      paddingVertical: 5,
                      color: tab == 1 ? 'blue' : 'black',
                    }}>
                    Cầu thủ
                  </Text>
                  {tab == 1 ? (
                    <View
                      style={{
                        height: 3,
                        backgroundColor: 'blue',
                      }}></View>
                  ) : (
                    <View></View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                marginBottom: 10,
              }}>
              {tab == 0 ? (
                <FlatList
                  data={fixtures?.sort((a, b) =>
                    a['fixture']['date'] > b['fixture']['date'] ? 1 : -1,
                  )}
                  renderItem={(item, index) => <FixtureView fixture={item} />}
                  numColumns={1}
                />
              ) : (
                <FlatList
                  data={players}
                  renderItem={(item, index) => <PlayerItem player={item} />}
                  numColumns={1}
                />
              )}
            </View>
          </View>
        ) : (
          <View>
            <FlatList
              data={keywords}
              renderItem={(item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    console.log('item');
                    console.log(item);
                    onSelectKey(item?.item);
                  }}>
                  <KeyView fixture={item} />
                </TouchableOpacity>
              )}
              numColumns={1}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

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
