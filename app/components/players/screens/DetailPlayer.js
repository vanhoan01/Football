import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import MatchAPIs from '../../../controller/APIs/MatchAPIs';

const DetailPlayer = () => {
  const [player, setPlayer] = useState([]);
  const route = useRoute();
  const data = parseInt(route.params?.id);

  const getPlayer = async () => {
    try {
      const info = await MatchAPIs.getPlayer(data, 2022);
      console.log('Player', info?.response[0]);
      setPlayer(info?.response[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPlayer();
  }, []);
  return (
    <View>
      <Image style={styles.avatar} source={{uri: player?.player?.photo}} />
      <View style={styles.container}>
        <Text style={styles.text}>
          Full Name :{player.player?.firstname} {player.player?.lastname}
        </Text>
        <Text style={styles.text}>Height : {player.player?.height}</Text>
        <Text style={styles.text}>Weight : {player.player?.weight}</Text>
        <Text style={styles.text}>
          Nationality : {player.player?.nationality}
        </Text>
        <Text style={styles.text}>Age : {player.player?.age}</Text>
        <Text style={styles.text}>Birth : {player.player?.birth?.date}</Text>
        <Text style={styles.text}>Place : {player.player?.birth?.place}</Text>
      </View>
    </View>
  );
};

export default DetailPlayer;

const styles = StyleSheet.create({
  avatar: {
    padding: 8,
    marginTop: 9,
    marginLeft: 10,
    width: 150,
    height: 150,
  },
  container: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 20,
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
});
