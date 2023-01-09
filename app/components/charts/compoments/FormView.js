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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons/faCircleMinus'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark'

// import Constant from '../../controller/Constant';

const FormView = ({form}) => {
  let data = form?.item;


  let kh
  {data =='W' ? kh = faCircleCheck : null }

  {data =='D' ? kh = faCircleMinus : null }
  
  {data =='L' ? kh = faCircleXmark : null }

  let color

  {data =='W' ? color = 'green' : null }

  {data =='D' ? color = 'gray' : null }
  
  {data =='L' ? color = 'red' : null }

  return (
      <FontAwesomeIcon icon={ kh } size={ 18 } 
          style={{
            color:color,
            marginHorizontal:2,
          }} />

  );
};

export default FormView;

