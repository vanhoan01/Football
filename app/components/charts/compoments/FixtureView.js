import {StackActions, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons/faCircleMinus'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark'

import FormView from './FormView';

const FixtureView = ({fixture}) => {
  let data = fixture?.item;
  
  let DD =
  data?.all?.played == null
    ? 1
    : data?.all?.played.toString();

  let win =
  data?.all?.win == null
    ? 1
    : data?.all?.win.toString();

  let draw =
  data?.all?.draw == null
    ? 1
    : data?.all?.draw.toString();

  let lose =
  data?.all?.lose == null
    ? 1
    : data?.all?.lose.toString();

  let points =
  data?.points == null
    ? 1
    : data?.points.toString();

  let  goals_for=
  data?.all?.goals?.for == null
    ? 1
    : data?.all?.goals?.for.toString();

  let  goals_against=
  data?.all?.goals?.against == null
    ? 1
    : data?.all?.goals?.against.toString();

  let  goals_diff=
  data?.goalsDiff == null
    ? 1
    : data?.goalsDiff.toString();

  let form = 
  data?.form == null
    ? 'WWWWW'
    : data?.form.toString();
    form = form.split("");

  return (
    <View style={{
      borderTopWidth: 1.2,
      paddingHorizontal:10,
      borderTopColor: 'gray',
      paddingVertical:4,
      height:44,
      flexDirection: 'row',
      marginRight:10,
    }}>
      <View style={styles.textView}>
        <Text style={styles.text}>{DD}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{win}</Text>
      </View>
      <View style={styles.textView}>
       <Text style={styles.text}>{draw}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{lose}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={{
          fontWeight:'bold',
          color:'black',
        }}>
        {points}</Text>
      </View>

      <View style={styles.textView}>
        <Text style={styles.text}>{goals_for}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{goals_against}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{goals_diff}</Text>
      </View>
      <View style={{
        flexDirection:'row',
        width:120,
        fontSize:13,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <FlatList
          justifyContent={'center'}
          alignItems={'center'}
          horizontal
          data={form}
          renderItem={(item, index) => <FormView form={item} />}
          />
      </View>
      
    </View>
  );
};

export default FixtureView;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginHorizontal: 16,
    // backgroundColor: 'blue',
  },
  textView:{
    width:45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'black',
  }
});
