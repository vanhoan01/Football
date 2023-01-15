import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import TapView from './components/TapView';
import TopScoreScreens from './Screens/TopScoreScreens';

const StatisticsScreen = () => {
  let [tabSL, setTabSL] = React.useState(0);
  let tapList = [
    {tap: 0, text: 'Số bàn thắng'},
    {tap: 1, text: 'Số lần chuyền bóng'},
    {tap: 2, text: 'Thẻ vàng'},
    {tap: 3, text: 'Thẻ đỏ'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{height: 1, width: '100%', backgroundColor: '#CCCCCC'}}></View>

      <View style={{}}>
        <FlatList
          horizontal
          data={tapList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                setTabSL(index);
                console.log('index');
                console.log(index);
              }}
              key={`tap${index}`}>
              <TapView item={{item}} tabSL={tabSL} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{height: 1, width: '100%', backgroundColor: '#CCCCCC'}}></View>
      <TopScoreScreens text={tapList[tabSL].text} tabSL={tabSL} />
    </SafeAreaView>
  );
};

export default StatisticsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});
