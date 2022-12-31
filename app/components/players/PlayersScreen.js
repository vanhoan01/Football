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

const PlayersScreen = () => {
  return (
    <View>
      <Text>Cầu thủ</Text>
    </View>
  );
};

export default PlayersScreen;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 130,
    width: undefined,
    resizeMode: 'stretch',
  },
});
