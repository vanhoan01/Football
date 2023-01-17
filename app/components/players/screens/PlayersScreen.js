import * as React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import DetailList from '../components/detailList';
import MatchAPIs from '../../../controller/APIs/MatchAPIs';
import {ActivityIndicator} from 'react-native-paper';

const PlayersScreen = () => {
  const [team, setTeam] = React.useState([]);
  let [isloading, setIsloading] = React.useState(true);

  // get teams
  const getTeams = async () => {
    try {
      const data = await MatchAPIs.getTeams(39, 2022);
      console.log('data', data);
      setTeam(data.response);
    } catch (error) {
      console.log(error);
    }
    setIsloading(false);
  };
  React.useEffect(() => {
    getTeams();
  }, []);

  return (
    <View style={{paddingHorizontal: 10, marginTop: 10, flex: 1}}>
      {isloading == false ? (
        <FlatList
          style={styles.rootview}
          data={team}
          renderItem={({item}) => <DetailList team={item} />}
        />
      ) : (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default PlayersScreen;
