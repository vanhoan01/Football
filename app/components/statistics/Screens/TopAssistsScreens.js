import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import StatisticsAPIs from '../../../controller/APIs/StatisticsAPI';
import TopAssistView from '../components/TopAssistView';
import Constant from '../../../controller/Constant';
const TopAssistsScreens = () => {
  const [assists, setStatistics] = useState([]);
  const getTopAssist = async () => {
    try {
      let data = await StatisticsAPIs.getTopAssist(39, 2020);
      setStatistics(data.response);
    } catch (error) {
      console.log(error);
      setStatistics([]);
    }
  };
  useEffect(() => {
    getTopAssist();
  }, []);

  return (
    <>
      <View style={styles.rootView}>
        <View style={styles.viewH}>
          <View style={styles.viewP}>
            <Text style={styles.firstText1}>Cầu thủ</Text>
          </View>
          <View style={styles.viewG}>
            <Text style={styles.firstText1}>Số kiến tạo</Text>
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={assists}
          renderItem={(item, index) => <TopAssistView assists={item} />}
          numColumns={1}
          initialNumToRender={5}
        />
      </View>
    </>
  );
};

export default TopAssistsScreens;

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
