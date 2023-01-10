import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from 'react-native';
import StatisticsAPIs from '../../controller/APIs/StatisticsAPIs';
import Constant from '../../controller/Constant';
import ConversationItem from './component/ConversationItem';
import ConversationIten from './component/ConversationItem';

const StatisticsScreen = () => {
  const [statistics, setStatistics] = React.useState([]);
  React.useEffect(() => {
    StatisticsAPIs.getStatistics()
      .then(data => {
        console.log('danh sach cau thu');
        console.log(data);
        setStatistics(data?.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <View style={styles.rootView}>
        <View>
          <Text style={styles.firstText}>Số bàn thắng</Text>
        </View>
        <View style={styles.viewH}>
          <View style={styles.viewP}>
            <Text style={styles.firstText1}>Cầu thủ</Text>
          </View>
          <View style={styles.viewG}>
            <Text style={styles.firstText1}>Số bàn thắng</Text>
          </View>
        </View>
        <View style={styles.viewTong}>
          <View style={styles.viewTong2}>
            <View style={styles.view}></View>
          </View>
          <View style={styles.root}>
            <View style={styles.root1}>
              <Text style={styles.textId}>1</Text>
            </View>
            <View style={styles.viewImg}>
              <Image source={Constant.images.haaland} style={styles.img} />
            </View>
            <View style={styles.viewInfo}>
              <View style={styles.viewInfo1}>
                <Text style={styles.textPlayer}>Erlling Haaland</Text>
                <View style={styles.viewLogo}>
                  <Image source={Constant.images.mc_logo} style={styles.logo} />
                  <Text style={styles.textTeam}>Man City</Text>
                </View>
              </View>
            </View>
            <View style={styles.viewGoal}>
              <Text style={styles.textGoal}></Text>
            </View>
          </View>
          <View style={styles.viewTong2}>
            <View style={styles.view}></View>
          </View>
        </View>
      </View>
    </>
  );
};

export default StatisticsScreen;
const styles = StyleSheet.create({
  imageThumbnail: {
    height: 130,
    width: undefined,
    resizeMode: 'stretch',
  },
  firstText: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
    color: Constant.color.text,
  },
  firstText1: {
    fontSize: 13,
    margin: 10,
    fontStyle: 'normal',
    color: Constant.color.text,
  },
  rootView: {
    flex: 1,
    backgroundColor: Constant.color.background,
    flexDirection: 'column',
  },
  viewH: {
    flexDirection: 'row',
    height: 40,
    // flex: 1,
  },
  viewG: {
    alignItems: 'flex-end',
    flex: 1,
  },
  viewP: {
    alignItems: 'flex-start',
  },
  view: {
    height: 0.2,
    width: '95%',
    backgroundColor: '#555555',
    // marginVertical: 1,
  },
  viewTong: {
    flexDirection: 'column',
    marginTop: 5,
    // marginBottom: 10,
  },
  viewTong2: {
    alignItems: 'center',
    // marginBottom: 10,
  },
  root: {
    backgroundColor: Constant.color.background,
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  root1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constant.color.background,
    width: Dimensions.get('screen').width * 0.15,
  },
  textId: {
    fontSize: 16,
    color: Constant.color.text,
  },
  viewImg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.15,
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 45,
    resizeMode: 'contain',
    margin: 10,
  },
  viewInfo: {
    width: Dimensions.get('screen').width * 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  viewInfo1: {
    marginLeft: 10,
  },
  textPlayer: {
    color: Constant.color.text,
  },
  viewLogo: {
    flexDirection: 'row',
    marginTop: 2,
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 20,
    resizeMode: 'contain',
    alignItems: 'flex-start',
  },
  textTeam: {
    fontSize: 13,
    marginLeft: 8,
    color: Constant.color.text,
  },
  viewGoal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.21,
  },
  textGoal: {
    color: Constant.color.text,
    fontSize: 16,
  },
});
