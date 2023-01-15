import {StackActions, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import FixtureView from './FixtureView';
import NameView from './NameView';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons/faCircleMinus';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons/faCircleXmark';
import {faSquare} from '@fortawesome/free-solid-svg-icons/faSquare';

// import Constant from '../../controller/Constant';

const SeasonView = roundRS => {
  let rounds = roundRS?.roundRS;

  console.log('season_view');
  console.log(rounds);

  return (
    <View
      style={{
        marginBottom: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 15,
        }}>
        <View
          style={{
            width: '50%',
          }}>
          <View
            style={{
              paddingHorizontal: 10,
              height: 40,
              paddingVertical: 10,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                }}>
                Câu lạc bộ
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
            }}>
            {rounds.map((item, index) => {
              return (
                <NameView fixture={item} key={`nameview${index.toString()}`} />
              );
            })}
          </View>
        </View>

        <View
          style={{
            width: 200,
          }}>
          <ScrollView horizontal>
            <View>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    paddingHorizontal: 10,
                    height: 40,
                    flexDirection: 'row',
                  }}>
                  <View style={styles.textView}>
                    <Text style={styles.text}>ĐĐ</Text>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.text}>Thắng</Text>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.text}>H</Text>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.text}>Thua</Text>
                  </View>
                  <View style={styles.textView}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      Đ
                    </Text>
                  </View>

                  <View style={styles.textView}>
                    <Text style={styles.text}>BT</Text>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.text}>SBT</Text>
                  </View>

                  <View style={styles.textView}>
                    <Text style={styles.text}>HS</Text>
                  </View>
                  <View
                    style={{
                      width: 120,
                      fontSize: 13,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.text}>5 trận gần nhất</Text>
                  </View>
                </View>

                <FlatList
                  data={rounds}
                  renderItem={(item, index) => <FixtureView fixture={item} />}
                  keyExtractor={item => item.rank}
                  numColumns={1}
                  initialNumToRender={20}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      <View
        style={{
          height: 300,
          borderColor: '#C0C0C0',
          borderWidth: 1.2,
          borderRadius: 5,
          paddingVertical: 15,
          paddingHorizontal: 10,
          marginBottom: 8,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            paddingLeft: 5,
            marginBottom: 30,
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                marginBottom: 5,
                color: 'black',
              }}>
              Hạng trên/Hạng dưới
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
            }}>
            <FontAwesomeIcon
              icon={faSquare}
              size={14}
              style={{
                color: 'blue',
                marginHorizontal: 2,
                marginRight: 9,
                marginTop: 2,
              }}
            />
            <Text style={styles.text}>Vòng bảng vô địch các CLB châu Âu</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
            }}>
            <FontAwesomeIcon
              icon={faSquare}
              size={14}
              style={{
                color: 'orange',
                marginHorizontal: 2,
                marginRight: 9,
                marginTop: 2,
              }}
            />
            <Text style={styles.text}>Vòng bảng UEFA Europa</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
            }}>
            <FontAwesomeIcon
              icon={faSquare}
              size={14}
              style={{
                color: 'red',
                marginHorizontal: 2,
                marginRight: 9,
                marginTop: 2,
              }}
            />
            <Text style={styles.text}>Xuống hạng</Text>
          </View>
        </View>

        <View
          style={{
            paddingLeft: 5,
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                marginBottom: 5,
                color: 'black',
              }}>
              5 Trận gần nhất
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
            }}>
            <FontAwesomeIcon
              icon={faCircleCheck}
              size={18}
              style={{
                color: 'green',
                marginHorizontal: 2,
                marginRight: 7,
              }}
            />
            <Text style={styles.text}>Thắng</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
            }}>
            <FontAwesomeIcon
              icon={faCircleMinus}
              size={18}
              style={{
                color: 'gray',
                marginHorizontal: 2,
                marginRight: 7,
              }}
            />
            <Text style={styles.text}>Hòa</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
            }}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              size={18}
              style={{
                color: 'red',
                marginHorizontal: 2,
                marginRight: 7,
              }}
            />
            <Text style={styles.text}>Thua</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SeasonView;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  textView: {
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});
