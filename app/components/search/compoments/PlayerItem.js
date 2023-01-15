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
    <TouchableOpacity onPress={showUserDetail} style={{marginBottom: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          paddingVertical: 10,
          backgroundColor: 'white',
        }}>
        <Image
          style={styles.imageThumbnail}
          source={{uri: player?.player?.photo}}
        />
        <View
          style={{
            flexDirection: 'column',
            alignContent: 'center',
            paddingLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              textAlignVertical: 'center',
            }}
            numberOfLines={1}>
            {player?.player?.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'grey',
              textAlignVertical: 'center',
            }}
            numberOfLines={1}>
            {player?.statistics[0]?.games?.position}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
            }}>
            <View style={{height: 20, width: 20}}>
              <Image
                source={{uri: player?.statistics[0]?.team?.logo}}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
                paddingLeft: 5,
                textAlignVertical: 'center',
              }}>
              {player?.statistics[0]?.team?.name}
            </Text>
          </View>
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
