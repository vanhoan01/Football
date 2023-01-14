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

import Constant from '../../../controller/Constant';

const FixtureView = ({fixture}) => {
  let data = fixture?.item;
  // console.log('fixture');
  // console.log(fixture?.season);
  let round0 = data?.league?.round;
  let round1 = fixture?.season;
  let id = data?.fixture?.id;
  let status = data?.score?.fulltime?.home == null ? false : true;
  let homeLogo = data?.teams?.home?.logo.toString();
  let awayLogo = data?.teams?.away?.logo.toString();
  let homeName = data?.teams?.home?.name.toString();
  let awayName = data?.teams?.away?.name.toString();
  let homeGoals = '';
  let awayGoals = '';
  let datedt = '';
  try {
    datedt = data?.fixture?.date;
  } catch (error) {
    // datedt = '2022-11-30T20:00:00+00:00';
    print(error);
  }

  let day =
    datedt?.toString().substring(8, 8 + 2) + '/' + datedt?.substring(5, 5 + 2);
  let hour = datedt?.toString().substring(11, 11 + 5);

  let textTime1 = '';
  let textTime2 = '';
  let win = 0;

  if (status) {
    homeGoals = data.goals?.home;
    awayGoals = data.goals?.away;
    textTime1 = 'KT';
    textTime2 = day;
    if (homeGoals > awayGoals) {
      win = 1;
    } else if (homeGoals < awayGoals) {
      win = -1;
    }
  } else {
    textTime1 = day;
    textTime2 = hour;
  }

  const navigation = useNavigation();
  const showFixtureDetails = () => {
    navigation.dispatch(
      StackActions.push(Constant.screenName.FixtureDetails, {id}),
    );
  };
  return (
    <View>
      {round0 !== round1 ? (
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            marginBottom: 10,
            paddingLeft: 16,
          }}>
          {'Ngày thi đấu ' + round0?.substring(17) + '/38'}
        </Text>
      ) : (
        <View></View>
      )}
      <TouchableOpacity onPress={showFixtureDetails}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#E0E0E0',
            borderWidth: 1.2,
            borderRadius: 8,
            paddingVertical: 15,
            backgroundColor: 'white',
            marginBottom: 8,
          }}>
          <View
            style={{
              flexDirection: 'column',
              width: '70%',
              paddingVertical: 4,
              // backgroundColor: 'blue',
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 5,
                alignItems: 'center',
                // backgroundColor: 'red',
              }}>
              <Image
                style={styles.imageThumbnail}
                source={{
                  uri: homeLogo,
                }}
              />
              <Text
                style={{
                  flex: 1,
                  fontSize: 14,
                  color: win == -1 ? 'gray' : 'black',
                }}>
                {homeName}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal: 5,
                  color: win == -1 ? 'gray' : 'black',
                }}>
                {homeGoals}
              </Text>
              <View
                style={{
                  width: 11,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {win == 1 ? (
                  <Ionicons name="caret-back-sharp" size={13} color="black" />
                ) : null}
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 5,
                alignItems: 'center',
                // backgroundColor: 'blue',
              }}>
              <Image
                style={styles.imageThumbnail}
                source={{
                  uri: awayLogo,
                }}
              />
              <Text
                style={{
                  flex: 1,
                  fontSize: 14,
                  color: win == 1 ? 'gray' : 'black',
                }}>
                {awayName}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: win == 1 ? 'gray' : 'black',
                  // backgroundColor: 'blue',
                  marginHorizontal: 5,
                }}>
                {awayGoals}
              </Text>
              <View
                style={{
                  width: 11,
                  height: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'red',
                }}>
                {win == -1 ? (
                  <Ionicons name="caret-back-sharp" size={13} color="black" />
                ) : null}
              </View>
            </View>
          </View>
          <View
            style={{
              width: 1,
              backgroundColor: '#CCCCCC',
              height: '100%',
            }}></View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: 'red',
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: 'black',
                fontWeight: '500',
              }}>
              {textTime1}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '500',
                color: 'black',
              }}>
              {textTime2}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FixtureView;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginHorizontal: 16,
    // backgroundColor: 'blue',
  },
});
