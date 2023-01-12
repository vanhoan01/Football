import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StatisticView = ({statistic}) => {
  let data = statistic?.item;
  console.log('data statistic');
  console.log(statistic?.item);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={styles.statisticValue}>{data?.home}</Text>
      <Text style={styles.statisticType}>{data?.type}</Text>
      <Text style={styles.statisticValue}>{data?.away}</Text>
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
