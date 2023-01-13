import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import StatisticsAPIs from '../../../controller/APIs/StatisticsAPI';
import TopRedCard from '../components/TopRedCardView';
import Constant from '../../../controller/Constant';
const TopRedCardScreens = () => {
  const [redcard, setStatistics] = useState([]);
  const getTopRedCard = async () => {
    try {
      let data = await StatisticsAPIs.getTopRedCard(39, 2020);
      setStatistics(data.response);
    } catch (error) {
      console.log(error);
      setStatistics([]);
    }
  };
  useEffect(() => {
    getTopRedCard();
  }, []);

  return (
    <>
      <View style={styles.rootView}>
        <View style={styles.viewH}>
          <View style={styles.viewP}>
            <Text style={styles.firstText1}>Cầu thủ</Text>
          </View>
          <View style={styles.viewG}>
            <Text style={styles.firstText1}>Số thẻ đỏ</Text>
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={redcard}
          renderItem={(item, index) => <TopRedCard redcard={item} />}
          numColumns={1}
          initialNumToRender={5}
        />
      </View>
    </>
  );
};

export default TopRedCardScreens;

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
    marginLeft: 65,
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
