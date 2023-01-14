import {StackActions, useNavigation} from '@react-navigation/native';
import Constant from '../../../controller/Constant';
import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const DetailList = ({team}) => {
  const navigation = useNavigation();
  const id = team.team.id;
  const handleShowProfile = () => {
    navigation.dispatch(StackActions.push(Constant.screenName.Teams, {id}));
  };
  return (
    <TouchableOpacity onPress={handleShowProfile} style={styles.touch}>
      <Image style={styles.logo} source={{uri: team.team.logo}} />
      <View style={styles.container}>
        <Text style={styles.txt}>Name : {team.team.name}</Text>
        <Text style={styles.txt}>Code : {team.team.code}</Text>
        <Text style={styles.txt}>Country : {team.team.country}</Text>
        <Text style={styles.txt}>Founded : {team.team.founded}</Text>
      </View>
    </TouchableOpacity>
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

export default DetailList;
