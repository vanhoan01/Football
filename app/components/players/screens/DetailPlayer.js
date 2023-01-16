import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import MatchAPIs from '../../../controller/APIs/MatchAPIs';

const DetailPlayer = () => {
  const [player, setPlayer] = useState({});
  const route = useRoute();
  const data = parseInt(route.params?.id);
  let [isLoading, setIsLoading] = React.useState(true);

  const getPlayer = async () => {
    try {
      const info = await MatchAPIs.getPlayer(data, 39, 2022);
      console.log('Player', info?.response[0]);
      setPlayer(info?.response[0]);
    } catch (error) {
      console.log(error);
      setPlayer({});
    }
    setIsLoading(false);
  };

  const item = (text1, text2) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            width: 120,
            color: 'black',
          }}>
          {text1}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '600',
          }}>
          {text2}
        </Text>
      </View>
    );
  };

  const position = position => {
    switch (position) {
      case 'Goalkeeper':
        return 'Thủ môn';
      case 'Defender':
        return 'Hậu vệ';
      case 'Center Defender':
        return 'Trung vệ';
      case 'Midfielder':
        return 'Tiền vệ';
      case 'Attacker':
        return 'Tiền đạo';
      default:
        return 'Trung vệ';
    }
  };

  useEffect(() => {
    getPlayer();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView
          style={{
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: 15,
              backgroundColor: 'white',
              paddingBottom: 15,
            }}>
            <View>
              <Image
                style={styles.imageThumbnail}
                source={{uri: player?.player?.photo}}
              />
            </View>

            <Text
              style={{
                fontSize: 22,
                fontWeight: '600',
                color: 'black',
                paddingVertical: 5,
              }}
              numberOfLines={1}>
              {player.player?.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                textAlignVertical: 'center',
              }}
              numberOfLines={1}>
              {position(
                player?.statistics
                  ? player?.statistics[0]?.games?.position
                  : '',
              )}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
              }}>
              <View style={{height: 30, width: 30}}>
                <Image
                  source={{
                    uri: player?.statistics
                      ? player?.statistics[0]?.team?.logo
                      : 'https://media-3.api-sports.io/football/teams/50.png',
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  paddingLeft: 5,
                  textAlignVertical: 'center',
                }}>
                {player?.statistics ? player?.statistics[0]?.team?.name : ''}
              </Text>
            </View>
          </View>

          <View style={styles.detail}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: 'black',
                paddingVertical: 10,
              }}>
              Chi tiết
            </Text>
            {item(
              'Họ tên đầy đủ',
              player?.player?.firstname + ' ' + player?.player?.lastname,
            )}
            {item('Ngày sinh', player.player?.birth?.date)}
            {item('Nơi sinh', player.player?.birth?.place)}
            {item('Chiều cao', player.player?.height)}
            {item('Quốc tịch', player.player?.nationality)}
            {item('Cân nặng', player.player?.weight)}
          </View>
          <View style={styles.detail}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: 'black',
                paddingVertical: 10,
              }}>
              Thống kê
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'black',
                paddingVertical: 10,
              }}>
              Ngoại hạng Anh
            </Text>
            {item(
              'Mùa giải',
              player?.statistics ? player?.statistics[0]?.league?.season : '',
            )}
            {item(
              'Số trận',
              player?.statistics
                ? player?.statistics[0]?.games?.appearences
                : '',
            )}
            {item(
              'Ghi bàn',
              player?.statistics ? player?.statistics[0]?.goals?.total : '',
            )}
            {item(
              'Kiến tạo',
              player?.statistics
                ? player?.statistics[0]?.goals?.assists
                  ? player?.statistics[0]?.goals?.assists
                  : 0
                : '',
            )}
            {item(
              'Thẻ vàng',
              player?.statistics ? player?.statistics[0]?.cards?.yellow : '',
            )}
            {item(
              'Thẻ đỏ',
              player?.statistics ? player?.statistics[0]?.cards?.red : '',
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default DetailPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageThumbnail: {
    height: 180,
    width: 180,
    resizeMode: 'contain',
    borderRadius: 180,
    borderColor: 'black',
    borderWidth: 1,
  },
  avatar: {
    padding: 8,
    marginTop: 9,
    marginLeft: 10,
    width: 150,
    height: 150,
  },
  detail: {
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 10,
  },
});
