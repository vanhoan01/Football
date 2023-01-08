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
// import {FlatList} from 'react-native-bidirectional-infinite-scroll';

// import Constant from '../../controller/Constant';

const RoundView = roundRS => {
  let data = roundRS?.roundRS;
  // let rounddt = data.parameters.round.toString().substring(17);

  let rounddt = '35';
  try {
    let parameters = data?.parameters;
    console.log('data.parameters');
    console.log(parameters?.round);
    rounddt = parameters?.round.substring(17);
  } catch (error) {
    console.log(error);
  }

  let rounds = data.response;
  return (
    <View style={{}}>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            marginVertical: 14,
            paddingHorizontal: 8,
          }}>
          {'Ngày thi đấu ' + rounddt + '/38'}
        </Text>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <FlatList
            data={rounds?.sort((a, b) =>
              a['fixture']['date'] > b['fixture']['date'] ? 1 : -1,
            )}
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
