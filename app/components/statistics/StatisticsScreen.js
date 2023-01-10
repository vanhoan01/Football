import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import StatisticsAPIs from '../../controller/APIs/StatisticsAPIs';
import ViewRoot from './components/ViewRoot';
let league = [1];
const StatisticsScreen = () => {
  const [statistics, setStatistics] = useState([]);
  const getFixturesByLeague = async () => {
    try {
      let data = await StatisticsAPIs.getFixturesByLeague('39', '2020');
      setStatistics(data);
    } catch (error) {
      console.log(error);
      setStatistics([]);
    }
  };
  useEffect(() => {
    getFixturesByLeague();
    console.log('Statistics: ');
    console.log(statistics.response);
  }, []);

  return (
    <>
      <View style={styles.rootView}>
        <FlatList
          style={styles.list}
          data={league}
          renderItem={(item, index) => <ViewRoot viewAll={statistics} />}
          numColumns={1}
        />
      </View>
    </>
  );
};

export default StatisticsScreen;
const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    flex: 1,
  },
});
