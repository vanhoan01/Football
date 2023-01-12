import * as React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import DetailList from './detailList';
import MatchAPIs from '../../../controller/APIs/MatchAPIs';

const HomeScreen = () => {
  const [team, setTeam] = React.useState([]);

  // get teams
  const getTeams = async () => {
    try {
      const data = await MatchAPIs.getTeams(39, 2022);
      console.log('data', data);
      setTeam(data.response);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getTeams();
  }, []);

  return (
    <View>
      <FlatList
        style={styles.rootview}
        data={team}
        renderItem={({item}) => <DetailList team={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
