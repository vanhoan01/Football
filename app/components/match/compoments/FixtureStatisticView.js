import * as React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import MatchAPIs from '../../../controller/APIs/MatchAPIs';
import StatisticView from '../compoments/StatisticView';

const FixtureStatisticView = ({id}) => {
  let [isLoading, setIsLoading] = React.useState(true);
  console.log(id);
  let [statistics, setStatistics] = React.useState([
    // {
    //   type: 'Số lần sút',
    //   home: '9',
    //   away: '14',
    // },
  ]);
  let [fixture, setFixture] = React.useState({});
  let typeVietsub = [
    'Sút trúng đích',
    'Sút xa đích',
    'Số lần sút',
    'Sút bị chặn',
    'Sút trong vòng cấm',
    'Sút ngoài vòng cấm',
    'Phạm lỗi',
    'Phạt góc',
    'Việt vị',
    'Kiểm soát bóng',
    'Thẻ vàng',
    'Thẻ đỏ',
    'Thủ môn cứu thua',
    'Lượt chuyền bóng',
    'Đường chuyền chính xác',
    'Tỷ lệ chuyền bóng chính xác',
  ];

  getFixturesByFixtureId = async () => {
    try {
      let data = await MatchAPIs.getFixturesByFixtureId(id);
      let homeStatistics = data?.response[0]
        ? data?.response[0]?.statistics[0]?.statistics
        : [];
      let awayStatistics = data?.response[0]
        ? data?.response[0]?.statistics[1]?.statistics
        : [];
      setFixture(data?.response[0]?.teams);
      let statisticData = [];
      for (let index = 0; index < homeStatistics?.length; index++) {
        console.log(homeStatistics[index]);
        statisticData = [
          ...statisticData,
          {
            type: typeVietsub[index],
            home:
              homeStatistics[index]?.value == null
                ? 0
                : homeStatistics[index]?.value,
            away:
              awayStatistics[index]?.value == null
                ? 0
                : awayStatistics[index]?.value,
          },
        ];
      }
      setStatistics(statisticData);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getFixturesByFixtureId();
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
        Thống kê về trận đấu
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <Image
          style={styles.imageThumbnail1}
          source={{
            uri: fixture?.home?.logo,
          }}
        />
        <Image
          style={styles.imageThumbnail1}
          source={{
            uri: fixture?.away?.logo,
          }}
        />
      </View>
      {statistics.map((item, index) => {
        return (
          <StatisticView statistic={item} key={`nameview${index.toString()}`} />
        );
      })}
    </SafeAreaView>
  );
};

export default FixtureStatisticView;

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
