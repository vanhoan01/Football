import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MatchAPIs from '../../controller/APIs/MatchAPIs';
import RoundView from './compoments/RoundView';
let rounds = [1];
const MatchScreen = () => {
  const [fixtures, setFixtures] = React.useState([]);
  const getFixturesByRound = async () => {
    try {
      let data = await MatchAPIs.getFixturesByRound(
        '39',
        '2022',
        'Regular Season - 10',
      );
      setFixtures(data);
    } catch (error) {
      console.log(error);
      setFixtures([]);
    }
  };

  React.useEffect(() => {
    //goi 1 lan -> theem phu thuoc
    getFixturesByRound();
    console.log('fixtures: ');
    console.log(fixtures.response);
  }, []);

  return (
    <View
      style={{
        paddingHorizontal: 12,
        flexDirection: 'column',
      }}>
      <FlatList
        data={rounds}
        renderItem={(item, index) => <RoundView roundRS={fixtures} />}
        numColumns={1}
      />
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
});
