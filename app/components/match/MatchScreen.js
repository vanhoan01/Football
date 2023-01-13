import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
// import {FlatList} from 'react-native-bidirectional-infinite-scroll';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MatchAPIs from '../../controller/APIs/MatchAPIs';
import RoundView from './compoments/RoundView';
let rounds = [1];
const MatchScreen = () => {
  let [fixtures, setFixtures] = React.useState([]);
  const [round, setRound] = React.useState('');
  // let round = '';
  let [isLoading, setIsLoading] = React.useState(true);

  const getCurrentRound = async () => {
    try {
      let data = await MatchAPIs.getCurrentRound('39', '2022');
      ////////////////////////////////////////////////data?.response[0]
      setRound(data?.response[0]);
      console.log('setRound abc');
      console.log(data?.response[0]);
    } catch (error) {
      console.log(error);
      setRound('Regular Season - 17');
    }
  };

  const getFixturesByRound = async () => {
    setIsLoading(true);
    try {
      let data = await MatchAPIs.getFixturesByRound(
        '39',
        '2022',
        // 'Regular Season - 10',
        round,
      );
      console.log('fixtures data:');
      console.log(data);
      setFixtures(data);
      // setFixtures(data);
    } catch (error) {
      console.log(error);
      setFixtures([]);
    }
    setIsLoading(false);
  };

  const onEnd = () => {
    Alert.alert('You Have Reached To List End...');
  };
  const onStart = () => {
    setIsFetching(false);
    Alert.alert('Start...');
  };

  const [isFetching, setIsFetching] = React.useState(false);

  // const fetchData = () => {
  //   dispatch(getAllTopicAction(userParamData));
  //   setIsFetching(false);
  // };

  const onRefresh = () => {
    setIsFetching(true);
    onStart();
  };

  React.useEffect(() => {
    if (round != '') {
      getFixturesByRound();
      console.log('fixtures:');
      console.log(fixtures);
    } else {
      getCurrentRound();
    }
  }, [round]);

  return (
    <View
      style={{
        paddingHorizontal: 12,
        flex: 1,
      }}>
      {isLoading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={rounds}
          renderItem={(item, index) => <RoundView roundRS={fixtures} />}
          numColumns={1}
          onEndReached={onEnd}
          onRefresh={onRefresh}
          refreshing={isFetching}
          onEndReachedThreshold={0.1}
        />
      )}
    </View>
  );
};

export default MatchScreen;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginHorizontal: 16,
    // backgroundColor: 'blue',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
