import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StatisticView = ({statistic}) => {
  console.log('data statistic');
  console.log(statistic);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      key={statistic?.type}>
      <Text style={styles.statisticValue}>{statistic?.home}</Text>
      <Text style={styles.statisticType}>{statistic?.type}</Text>
      <Text style={styles.statisticValue}>{statistic?.away}</Text>
    </View>
  );
};

export default StatisticView;

const styles = StyleSheet.create({
  statisticType: {
    fontSize: 14,
    color: 'black',
    marginVertical: 8,
  },
  statisticValue: {
    fontSize: 14.5,
    color: 'black',
    fontWeight: '500',
    marginVertical: 8,
  },
});
