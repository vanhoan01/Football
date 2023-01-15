import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import SeasonView from './compoments/SeasonView';
import ChartAPIs from '../../controller/APIs/ChartAPI';
import {Picker} from '@react-native-picker/picker';

const ChartsScreen = () => {
  let [isLoading, setIsLoading] = React.useState(false);
  const [fixtures, setFixtures] = React.useState([]);
  const [selectedValue, setSelectedValue] = React.useState('2022');

  const getFixturesByChart = async value => {
    setIsLoading(true);
    try {
      let data = await ChartAPIs.getStandingsByLeague('39', value);
      setFixtures(data?.response[0]?.league?.standings[0]);
    } catch (error) {
      console.log(error);
      setFixtures([]);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    setIsLoading(true);
    getFixturesByChart();
  }, []);
  return (
    <ScrollView style={{flexDirection: 'column', backgroundColor: 'white'}}>
      <View
        style={{height: 1, width: '100%', backgroundColor: '#CCCCCC'}}></View>
      <View
        style={{
          paddingTop: 10,
          paddingHorizontal: 10,
          flexDirection: 'column',
        }}>
        <Text
          style={{
            color: 'grey',
            fontSize: 14,
          }}>
          Mùa giải
        </Text>
        <Picker
          style={{
            marginTop: -15,
            marginLeft: -15,
            height: 48,
            width: 150,
            fontWeight: 'bold',
            fontSize: 16,
          }}
          selectedValue={selectedValue}
          itemStyle={{textAlign: 'left', fontWeight: '500'}}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
            getFixturesByChart(itemValue);
          }}>
          <Picker.Item label="2022-23" value="2022" />
          <Picker.Item label="2021-22" value="2021" />
          <Picker.Item label="2020-21" value="2020" />
          <Picker.Item label="2019-20" value="2019" />
          <Picker.Item label="2018-19" value="2018" />
          <Picker.Item label="2017-18" value="2017" />
        </Picker>
      </View>
      <View
        style={{height: 1, width: '100%', backgroundColor: '#CCCCCC'}}></View>
      <View style={{backgroundColor: 'white', flex: 1}}>
        {isLoading ? (
          <View style={styles.loadingView}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <SeasonView roundRS={fixtures} />
        )}
      </View>
    </ScrollView>
  );
};

export default ChartsScreen;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginHorizontal: 16,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
