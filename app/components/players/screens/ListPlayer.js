import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import MatchAPIs from '../../../controller/APIs/MatchAPIs';
import ProfilePlayer from '../components/ProfilePlayer';

const ListPlayer = () => {
  const [squads, setSquads] = useState([]);
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
  };
  useEffect(() => {
    getSquads();
  }, []);

  return (
    <View style={{paddingHorizontal: 10, marginTop: 10}}>
      <FlatList
        style={styles.rootview}
        data={squads}
        renderItem={({item}) => <ProfilePlayer squads={item} />}
      />
    </View>
  );
};

export default ListPlayer;

const styles = StyleSheet.create({});
