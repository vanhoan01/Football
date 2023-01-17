import {height} from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import StatisticsAPIs from '../../../controller/APIs/StatisticsAPI';
import TopScoreView from '../components/TopScoreView';

const TopScoreScreens = ({text, tabSL}) => {
  const [statistics, setStatistics] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const getTopScore = async () => {
    try {
      let data = await StatisticsAPIs.getTopScore(39, 2022);
      setStatistics(data.response);
    } catch (error) {
      console.log(error);
      setStatistics([]);
    }
    setIsLoading(false);
  };
  const getTopAssist = async () => {
    try {
      let data = await StatisticsAPIs.getTopAssist(39, 2022);
      setStatistics(data.response);
    } catch (error) {
      console.log(error);
      setStatistics([]);
    }
    setIsLoading(false);
  };
  const getTopYellowCard = async () => {
    try {
      let data = await StatisticsAPIs.getTopYellowCard(39, 2022);
      setStatistics(data.response);
    } catch (error) {
      console.log(error);
      setStatistics([]);
    }
    setIsLoading(false);
  };
  const getTopRedCard = async () => {
    setIsLoading(true);
    try {
      let data = await StatisticsAPIs.getTopRedCard(39, 2022);
      setStatistics(data.response);
    } catch (error) {
      console.log(error);
      setStatistics([]);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    switch (tabSL) {
      case 0:
        getTopScore();
        break;

      case 1:
        getTopAssist();
        break;

      case 2:
        getTopYellowCard();
        break;

      case 3:
        getTopRedCard();
        break;
    }
  }, [tabSL]);

  return isLoading ? (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <View style={styles.rootView}>
      <View style={styles.viewH}>
        <Text style={styles.firstText1}>Cầu thủ</Text>
        <Text style={styles.firstText1}>{text}</Text>
      </View>
      <FlatList
        style={styles.list}
        data={statistics}
        renderItem={({item, index}) => (
          <TopScoreView statistics={{item}} index={index} tabSL={tabSL} />
        )}
        numColumns={1}
        initialNumToRender={5}
      />
    </View>
  );
};

export default TopScoreScreens;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  list: {
    flex: 1,
  },
  firstText1: {
    fontSize: 14,
    paddingVertical: 10,
    color: 'grey',
  },
  viewH: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
  },
  viewG: {
    alignItems: 'flex-end',
    flex: 1,
  },
  viewP: {
    alignItems: 'flex-start',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
