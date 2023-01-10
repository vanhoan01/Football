import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import TopScroreView from './TopScroreView';
import TopAssistView from './TopAssistView';
import TopRedCard from './TopRedCard';
import TopYellowCard from './TopRedCard';
const ViewRoot = viewAll => {
  let views = viewAll?.viewAll.response;
  return (
    <View style={styles.rootView}>
      <FlatList
        style={styles.list}
        data={views}
        renderItem={(item, index) => <TopScroreView scrore={item} />}
        numColumns={1}
      />
      <FlatList
        style={styles.list}
        data={views}
        renderItem={(item, index) => <TopAssistView assist={item} />}
        numColumns={1}
      />
      <FlatList
        style={styles.list}
        data={views}
        renderItem={(item, index) => <TopRedCard redcard={item} />}
        numColumns={1}
      />
      <FlatList
        style={styles.list}
        data={views}
        renderItem={(item, index) => <TopYellowCard yellowCard={item} />}
        numColumns={1}
      />
    </View>
  );
};

export default ViewRoot;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    flex: 1,
  },
});
