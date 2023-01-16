import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import MatchAPIs from '../../../controller/APIs/MatchAPIs';

const FixturePercentView = ({id}) => {
  let [isLoading, setIsLoading] = React.useState(true);
  console.log(id);
  let [predictions, setPredictions] = React.useState({});

  getPredictionsFixture = async () => {
    try {
      let data = await MatchAPIs.getPredictionsFixture(id);
      console.log('predictions data:');
      console.log(data?.response[0] ? data?.response[0] : {});
      setPredictions(data?.response[0] ? data?.response[0] : {});
      console.log('predictions:');
      console.log(predictions);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPredictionsFixture();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          color: 'black',
          marginVertical: 15,
        }}>
        Xác xuất thắng
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            fontWeight: '500',
            flex: 1,
          }}>
          {predictions?.teams?.home?.name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            fontWeight: '500',
            flex: 1,
            textAlign: 'center',
          }}>
          Hòa
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            fontWeight: '500',
            flex: 1,
            textAlign: 'right',
          }}>
          {predictions?.teams?.away?.name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            fontWeight: '500',
            flex: 1,
          }}>
          {predictions?.predictions?.percent?.home}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'grey',
            fontWeight: '500',
            flex: 1,
            textAlign: 'center',
          }}>
          {predictions?.predictions?.percent?.draw}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            fontWeight: '500',
            flex: 1,
            textAlign: 'right',
          }}>
          {predictions?.predictions?.percent?.away}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <View
          style={{
            backgroundColor: 'red',
            height: 5,
            width: predictions ? predictions?.predictions?.percent?.home : 0,
          }}></View>
        <View
          style={{
            backgroundColor: 'grey',
            height: 5,
            width: predictions ? predictions?.predictions?.percent?.draw : 0,
          }}></View>
        <View
          style={{
            backgroundColor: 'blue',
            height: 5,
            width: predictions ? predictions?.predictions?.percent?.away : 0,
          }}></View>
      </View>
    </SafeAreaView>
  );
};

export default FixturePercentView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  text: {
    fontSize: 42,
  },
  imageThumbnail: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  imageThumbnail1: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  playerGoalsText1: {
    fontSize: 14,
    color: 'black',
  },
  playerGoalsText2: {
    fontSize: 14,
    color: 'gray',
  },
  line: {
    height: 1,
    backgroundColor: '#CCCCCC',
    width: '100%',
  },
  statisticText: {
    fontSize: 16,
    color: 'black',
  },
});
