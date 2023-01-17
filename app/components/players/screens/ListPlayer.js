import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import MatchAPIs from '../../../controller/APIs/MatchAPIs';
import ProfilePlayer from '../components/ProfilePlayer';
import {ActivityIndicator} from 'react-native-paper';

const ListPlayer = () => {
  const [squads, setSquads] = useState([]);
  let [isloading, setIsloading] = React.useState(true);
  const route = useRoute();
  const data = route.params?.id;

  const getSquads = async () => {
    try {
      const teams = await MatchAPIs.getSquads(data);
      console.log('squads', teams.response);
      setSquads(teams.response);
    } catch (error) {
      console.log(error);
    }
    setIsloading(false);
  };
  useEffect(() => {
    getSquads();
  }, []);

  return (
    <View style={{paddingHorizontal: 10, marginTop: 10, flex: 1}}>
      {isloading == false ? (
        <FlatList
          style={styles.rootview}
          data={squads}
          renderItem={({item}) => <ProfilePlayer squads={item} />}
        />
      ) : (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

export default ListPlayer;

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
