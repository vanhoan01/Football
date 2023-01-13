import {StackActions, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Constant from '../../../controller/Constant';

const PlayerItem = ({player}) => {
  console.log('player');
  console.log(player);
  player = player?.item;
  const navigation = useNavigation();
  const showUserDetail = () => {
    // navigation
    //   .dispatch
    //   //   StackActions.push(Constant.screenName.UserDetail, {id: player.id}),
    //   ();
  };
  //Constant.images.img595097
  return (
    <TouchableOpacity onPress={showUserDetail}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignContent: 'center',
        }}>
        <Image
          style={styles.imageThumbnail}
          source={{uri: player?.player?.photo}}
        />
        <View
          style={{
            padding: 10,
            flexDirection: 'column',
            alignContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
              paddingLeft: 15,
              textAlignVertical: 'center',
            }}
            numberOfLines={1}>
            {player?.player?.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
              paddingLeft: 15,
              textAlignVertical: 'center',
            }}
            numberOfLines={1}>
            {player?.statistics[0]?.games?.position}
          </Text>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              alignContent: 'center',
            }}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlayerItem;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 65,
    width: 65,
    resizeMode: 'cover',
    borderRadius: 65 / 2,
  },
});
