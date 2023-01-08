import {StackActions, useNavigation} from '@react-navigation/native';
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
import FixtureView from './FixtureView';

// import Constant from '../../controller/Constant';

const RoundView = roundRS => {
  console.log('roundRS.parameters:');
  // let parameters = JSON.parse(roundRS.roundRS.parameters);
  // console.log(roundRS.roundRS.parameters.round);
  // let round = roundRS?.roundRS.parameters.round;
  // let round = '10';
  // console.log('round');
  // console.log(round);
  let rounds = roundRS?.roundRS.response;
  // console.log('rounds');
  // console.log(rounds);
  return (
    <View style={{}}>
      <View>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <FlatList
            data={rounds}
            renderItem={(item, index) => <FixtureView fixture={item} />}
            numColumns={1}
          />
        </View>
      </View>
    </View>
  );
};

export default RoundView;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginHorizontal: 16,
    // backgroundColor: 'blue',
  },
});
