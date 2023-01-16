import * as React from 'react';
import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
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

import MatchAPIs from '../../../controller/APIs/MatchAPIs';
import ChartAPIs from '../../../controller/APIs/ChartAPI';
import TeamRoundView from './../compoments/TeamRoundView';
let rounds = [1];

const TeamDetailScreen = () => {
  const route = useRoute();
  let id = route.params?.id;
  console.log('id Team');
  console.log(id);
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

  const getTeamRoundView = async () => {
    setIsLoading(true);
    try {
      let data = await ChartAPIs.getTeamMathById('39', '2022', id);
      console.log('fixtures data:');
      console.log(data);
      setFixtures(data);
      setFixtures(data);
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
      getTeamRoundView();
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
          renderItem={(item, index) => <TeamRoundView roundRS={fixtures} />}
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

export default TeamDetailScreen;

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
