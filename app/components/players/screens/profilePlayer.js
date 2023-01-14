import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import Constant from '../../../controller/Constant';
import {StackActions, useNavigation} from '@react-navigation/native';

const ProfilePlayer = squads => {
  const navigation = useNavigation();

  const handleShowDetailPlayer = () => {
    navigation.dispatch(
      StackActions.push(Constant.screenName.DetailPlayer, {id}),
    );
  };

  return (
    <View>
      {squads.squads.players.map(squad => (
        <TouchableOpacity
          onPress={() => {
            const id = squad.id;
            console.log('hehehe', id);
            navigation.dispatch(
              StackActions.push(Constant.screenName.DetailPlayer, {id}),
            );
          }}
          style={styles.touch}
          key={squad.number}>
          <Image style={styles.logo} source={{uri: squad.photo}} />
          <View style={styles.container}>
            <Text style={styles.txt}>Name : {squad.name}</Text>
            <Text style={styles.txt}>Number : {squad.number}</Text>
            <Text style={styles.txt}>Position : {squad.position}</Text>
            <Text style={styles.txt}>Ages : {squad.age}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  touch: {
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 20,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  container: {
    height: 'auto',
    padding: 10,
  },
  logo: {
    padding: 8,
    marginTop: 9,
    marginLeft: 10,
    width: 80,
    height: 80,
  },
  txt: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'normal',
  },
});

export default ProfilePlayer;
