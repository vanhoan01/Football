import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
const TapView = ({item, tabSL}) => {
  console.log('item');
  console.log(item);
  console.log(tabSL);
  let itemDT = item?.item;
  let tap = itemDT['tap'];
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <Text
        style={{
          color: 'black',
          fontWeight: '500',
          textAlign: 'center',
          fontSize: 14,
          paddingVertical: 13,
          paddingHorizontal: 13,
          color: tabSL == tap ? 'blue' : 'black',
        }}>
        {itemDT?.text}
      </Text>
      {tabSL == tap ? (
        <View
          style={{
            height: 3,
            backgroundColor: 'blue',
          }}></View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default TapView;
const styles = StyleSheet.create({
  container: {},
});
