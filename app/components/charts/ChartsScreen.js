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

const ChartsScreen = () => {
  return (
    <View>
      <Text>Bảng xếp hạng</Text>
    </View>
  );
};

export default ChartsScreen;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 130,
    width: undefined,
    resizeMode: 'stretch',
  },
});
