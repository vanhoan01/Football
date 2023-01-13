import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constant from '../../controller/Constant';
import {useNavigation} from '@react-navigation/native';
let league = [1];
const StatisticsScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Score');
        }}>
        <View
          style={{
            width: '90%',
            height: 100,
            flexDirection: 'row',
            backgroundColor: 'white',
            marginVertical: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <View
            style={{
              width: '30%',
              // backgroundColor: 'yellow',
            }}>
            <Image style={styles.logo} source={Constant.images.score} />
          </View>

          <View style={styles.container}>
            <Text style={styles.txt}>TOP SCORE</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Assist');
        }}>
        <View
          style={{
            width: '90%',
            height: 100,
            flexDirection: 'row',
            backgroundColor: 'white',
            marginVertical: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <View
            style={{
              width: '30%',
              // backgroundColor: 'yellow',
            }}>
            <Image style={styles.logo} source={Constant.images.assists} />
          </View>

          <View style={styles.container}>
            <Text style={styles.txt}>TOP ASSISTS</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('YellowCard');
        }}>
        <View
          style={{
            width: '90%',
            height: 100,
            flexDirection: 'row',
            backgroundColor: 'white',
            marginVertical: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <View
            style={{
              width: '30%',
              // backgroundColor: 'yellow',
            }}>
            <Image style={styles.logo} source={Constant.images.yellowcard} />
          </View>

          <View style={styles.container}>
            <Text style={styles.txt}>TOP YELLOW CARD</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RedCard');
        }}>
        <View
          style={{
            width: '90%',
            height: 100,
            flexDirection: 'row',
            backgroundColor: 'white',
            marginVertical: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <View
            style={{
              width: '30%',
              // backgroundColor: 'yellow',
            }}>
            <Image style={styles.logo} source={Constant.images.redcard} />
          </View>

          <View style={styles.container}>
            <Text style={styles.txt}>TOP RED CARD</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default StatisticsScreen;
const styles = StyleSheet.create({
  container: {
    width: '60%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    padding: 5,
    // marginTop: 5,
    marginLeft: 10,
    width: 100,
    height: 100,

    resizeMode: 'contain',
  },
  txt: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'normal',
    fontWeight: 'bold',
  },
  rootView: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    flex: 1,
  },
  firstText1: {
    fontSize: 14,
    margin: 10,
    fontStyle: 'normal',
    color: 'black',
  },
  viewH: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: Constant.color.background,
    // flex: 1,
  },
  viewG: {
    alignItems: 'flex-end',
    flex: 1,
  },
  viewP: {
    alignItems: 'flex-start',
  },
});
