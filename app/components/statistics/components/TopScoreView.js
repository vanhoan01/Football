import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import Constant from '../../../controller/Constant';
const TopScoreView = ({statistics, index, tabSL}) => {
  console.log('STT', index);
  let total = 0;
  switch (tabSL) {
    case 0:
      total = statistics?.item?.statistics[0]?.goals?.total;
      break;

    case 1:
      total = statistics?.item?.statistics[0]?.goals?.assists;
      break;

    case 2:
      total = statistics?.item?.statistics[0]?.cards?.yellow;
      break;

    case 3:
      total = statistics?.item?.statistics[0]?.cards?.red;
      break;
    default:
      total = statistics?.item?.statistics[0]?.goals?.total;
  }
  return total > 0 ? (
    <View style={{flexDirection: 'column'}}>
      <View
        style={{height: 1, width: '100%', backgroundColor: '#CCCCCC'}}></View>
      <View style={styles.rootView}>
        <Text style={styles.textId}>{index + 1}</Text>
        <View style={styles.viewImg}>
          <Image
            source={{uri: statistics?.item?.player?.photo}}
            style={styles.img}
          />
        </View>
        <View style={styles.viewInfo1}>
          <Text style={styles.textPlayer}>
            {statistics?.item?.player?.name}
          </Text>
          <View style={styles.viewLogo}>
            <Image
              source={{uri: statistics?.item?.statistics[0]?.team?.logo}}
              style={styles.logo}
            />
            <Text style={styles.textTeam}>
              {statistics?.item?.statistics[0]?.team?.name}
            </Text>
          </View>
        </View>
        <Text style={styles.textGoal}>{total}</Text>
      </View>
    </View>
  ) : (
    <View></View>
  );
};

export default TopScoreView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  firstText: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
    color: Constant.color.text,
  },
  firstText1: {
    fontSize: 13,
    margin: 10,
    fontStyle: 'normal',
    color: Constant.color.text,
  },
  rootView: {
    flex: 1,
    backgroundColor: Constant.color.background,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  viewH: {
    flexDirection: 'row',
    height: 40,
    // flex: 1,
  },
  viewG: {
    alignItems: 'flex-end',
    flex: 1,
  },
  viewP: {
    alignItems: 'flex-start',
  },
  view: {
    height: 0.2,
    width: '95%',
    backgroundColor: '#555555',
    // marginVertical: 1,
  },
  viewTong: {
    flexDirection: 'column',
    marginTop: 5,
    // marginBottom: 10,
  },
  viewTong2: {
    alignItems: 'center',
    // marginBottom: 10,
  },
  root: {
    backgroundColor: Constant.color.background,
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  root1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constant.color.background,
    width: Dimensions.get('screen').width * 0.15,
  },
  textId: {
    fontSize: 16,
    color: 'black',
    width: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  viewImg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    marginHorizontal: 10,
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 45,
    resizeMode: 'contain',
  },
  viewInfo: {
    width: Dimensions.get('screen').width * 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  viewInfo1: {
    flex: 1,
  },
  textPlayer: {
    color: 'black',
  },
  viewLogo: {
    flexDirection: 'row',
    marginTop: 2,
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 20,
    resizeMode: 'contain',
    alignItems: 'flex-start',
  },
  textTeam: {
    fontSize: 13,
    marginLeft: 8,
    color: 'grey',
  },
  viewGoal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textGoal: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
  },
});
