import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import StatisticsAPIs from '../../../controller/APIs/StatisticsAPI';
import TopYellowCardView from '../components/TopYellowCardView';
import Constant from '../../../controller/Constant';
const TopYellowCardScreens = () => {
  const [yellowCard, setStatistics] = useState([]);
  const getTopYellowCard = async () => {
    try {
      let data = await StatisticsAPIs.getTopYellowCard(39, 2020);
      setStatistics(data.response);
    } catch (error) {
      console.log(error);
      setStatistics([]);
    }
  };
  useEffect(() => {
    getTopYellowCard();
  }, []);

  return (
    <>
      <View style={styles.rootView}>
        <View style={styles.viewH}>
          <View style={styles.viewP}>
            <Text style={styles.firstText1}>Cầu thủ</Text>
          </View>
          <View style={styles.viewG}>
            <Text style={styles.firstText1}>Số thẻ vàng</Text>
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={yellowCard}
          renderItem={(item, index) => <TopYellowCardView yellowCard={item} />}
          numColumns={1}
          initialNumToRender={5}
        />
      </View>
    </>
  );
};

export default TopYellowCardScreens;

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
