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

// import Constant from '../../controller/Constant';

const FixtureView = ({fixture}) => {
  let data = fixture?.item;
  // console.log('data');
  // console.log(data);
  let homeLogo =
    data.teams?.home?.logo == null
      ? 'https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/180px-Manchester_City_FC_logo.svg.png'
      : data.teams?.home?.logo.toString();

  let awayLogo =
    data.teams?.away?.logo == null
      ? 'https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/180px-Manchester_City_FC_logo.svg.png'
      : data.teams?.away?.logo.toString();
  console.log('awayLogo');
  console.log(awayLogo);
  var homeName = data.teams?.home.name.toString();
  console.log('homeName');
  console.log(homeName);
  var awayName = data.teams?.away.name.toString();
  console.log('awayName');
  console.log(awayName);
  var homeGoals = data.goals?.home.toString();
  var awayGoals = data.goals?.away.toString();
  // var date = data.fixture.date.substr(0, 10);
  var status = data.score?.fulltime.home == null ? false : true;
  return (
    <TouchableOpacity>
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
              }}>
              {homeName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginHorizontal: 5,
              }}>
              {status == true ? homeGoals : null}
            </Text>
            <View
              style={{
                width: 11,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {status == true ? (
                awayGoals > homeGoals ? (
                  <Ionicons name="caret-back-sharp" size={13} color="black" />
                ) : null
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
                color: 'black',
              }}>
              {awayName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                // backgroundColor: 'blue',
                marginHorizontal: 5,
              }}>
              {status == true ? awayGoals : null}
            </Text>
            <View
              style={{
                width: 11,
                height: 16,
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'red',
              }}>
              {status == true ? (
                awayGoals > homeGoals ? (
                  <Ionicons name="caret-back-sharp" size={13} color="black" />
                ) : null
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
            KT
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '500',
            }}>
            Hôm qua
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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
