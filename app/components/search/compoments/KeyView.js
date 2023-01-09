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
import Feather from 'react-native-vector-icons/Feather';
import Constant from '../../../controller/Constant';

const KeyView = ({fixture}) => {
  let data = fixture?.item ? fixture?.item : '';

  const navigation = useNavigation();
  const showFixtureDetails = () => {
    navigation.dispatch(
      StackActions.push(Constant.screenName.FixtureDetails, {id}),
    );
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 4,
      }}>
      <Ionicons name="search" size={22} color="black" />
      <Text
        style={{
          flex: 1,
          paddingHorizontal: 10,
          color: 16,
          color: 'black',
          fontSize: 16,
        }}>
        {data}
      </Text>
      <Feather name="arrow-up-left" size={22} color="black" />
    </View>
  );
};

export default KeyView;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginHorizontal: 16,
    // backgroundColor: 'blue',
  },
});
