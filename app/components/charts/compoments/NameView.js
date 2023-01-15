import {StackActions, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Constant from '../../../controller/Constant';

const NameView = ({fixture}) => {
  let data = fixture;

  let id = data?.team?.id;
  let rank = data?.rank == null ? 1 : data?.rank.toString();

  let color = 'white';
  {
    rank == '1' ? (color = 'blue') : 'white';
  }
  {
    rank == '2' ? (color = 'blue') : 'white';
  }
  {
    rank == '3' ? (color = 'blue') : 'white';
  }
  {
    rank == '4' ? (color = 'blue') : 'white';
  }
  {
    rank == '5' ? (color = 'orange') : 'white';
  }
  {
    rank == '6' ? (color = 'orange') : 'white';
  }
  {
    rank == '18' ? (color = 'red') : 'white';
  }
  {
    rank == '19' ? (color = 'red') : 'white';
  }
  {
    rank == '20' ? (color = 'red') : 'white';
  }
  let Logo = data?.team?.logo;
  let name = data?.team?.name;
  console.log(name);
  const navigation = useNavigation();
  const showMathTeam = () => {
    navigation.dispatch(StackActions.push(Constant.screenName.MathTeam, {id}));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View
        style={{
          height: 42,
          marginVertical: 1,
          backgroundColor: color,
        }}>
        <Text> </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderTopWidth: 1.2,
          borderTopColor: '#CCCCCC',
          height: 44,
          marginLeft: 5,
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            paddingVertical: 4,
          }}>
          <TouchableOpacity onPress={showMathTeam}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 5,
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  width: 18,
                  color: 'black',
                  fontSize: 14,
                }}>
                {rank}
              </Text>
              <Image
                style={styles.imageThumbnail}
                source={{
                  uri: Logo,
                }}
              />
              <Text style={styles.text}>{name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NameView;
const styles = StyleSheet.create({
  imageThumbnail: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
  textView: {
    width: 40,
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});
