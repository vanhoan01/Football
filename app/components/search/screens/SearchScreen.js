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
  const [teams, setTeams] = React.useState([]);

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
      kwHeadToHead = [...kwHeadToHead, key + ' với ' + team];
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

  const onSubmit = key => {
    Alert.alert(key);
    setSubmit(true);
  };
  const onSelectKey = key => {
    // setInput(key);
    Alert.alert(key);
    setInput(key);
    getKeywords(key);
    setSubmit(true);
  };

  let searchTeam = async () => {
    try {
      let data = await SearchAPIs.searchTeam();
      setTeams(data?.response);
      console.log('data searchTeam');
      console.log(data?.response);
      console.log(teams);
    } catch (error) {
      console.log(error);
      setTeams([]);
    }
  };

  React.useEffect(() => {
    getKeywords('');
    searchTeam();
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

                // getKeywords();
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
          <View></View>
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
