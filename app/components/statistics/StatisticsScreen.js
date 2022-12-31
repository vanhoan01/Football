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

const StatisticsScreen = () => {
  return (
    <View>
      <Text>Số liệu thống kê</Text>
    </View>
  );
};

export default StatisticsScreen;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 130,
    width: undefined,
    resizeMode: 'stretch',
  },
});
