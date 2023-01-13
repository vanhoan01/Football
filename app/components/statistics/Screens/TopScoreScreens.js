import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import StatisticsAPIs from '../../../controller/APIs/StatisticsAPI';
import TopScoreView from '../components/TopScoreView';
import Constant from '../../../controller/Constant';
const TopScoreScreens = () => {
  const [statistics, setStatistics] = useState([]);
  const getTopScore = async () => {
    try {
      let data = await StatisticsAPIs.getTopScore(39, 2020);
      setStatistics(data.response);
    } catch (error) {
      console.log(error);
      setStatistics([]);
    }
  };
  useEffect(() => {
    getTopScore();
  }, []);

  return (
    <>
      <View style={styles.rootView}>
        <View style={styles.viewH}>
          <View style={styles.viewP}>
            <Text style={styles.firstText1}>Cầu thủ</Text>
          </View>
          <View style={styles.viewG}>
            <Text style={styles.firstText1}>Số bàn thắng</Text>
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={statistics}
          renderItem={(item, index) => <TopScoreView statistics={item} />}
          numColumns={1}
          initialNumToRender={5}
        />
      </View>
    </>
  );
};

export default TopScoreScreens;

const styles = StyleSheet.create({
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
    marginLeft: 65,
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
