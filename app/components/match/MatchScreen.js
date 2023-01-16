import * as React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';

import MatchAPIs from '../../controller/APIs/MatchAPIs';
import FixtureView from './compoments/FixtureView';

const MatchScreen = () => {
  let [fixtures, setFixtures] = React.useState([]);
  let [fixturesDT, setFixturesDT] = React.useState([]);
  let [start, setStart] = React.useState();
  let [end, setEnd] = React.useState();
  let [isLoading, setIsLoading] = React.useState(true);
  let [footerLoading, setFooterLoading] = React.useState(false);

  const getFixturesByLeague = async () => {
    setIsLoading(true);
    try {
      let data = await MatchAPIs.getFixturesByLeague('39', '2022');
      let response = data?.response?.sort((a, b) =>
        a['fixture']['date'] > b['fixture']['date'] ? 1 : -1,
      );
      setFixtures(response);
      let index = response.findIndex((element, index) => {
        if (element?.fixture?.status?.short === 'NS') {
          return true;
        }
      });
      console.log('index');
      console.log(index);
      console.log(index + 7 > 379 ? 379 : index + 7);
      setStart(index - 3);
      setEnd(index + 6);
    } catch (error) {
      console.log(error);
      setFixtures([]);
    }
    setIsLoading(false);
  };

  const onRefresh = () => {
    if (start > 0) {
      let newStart = start - 5 < 0 ? 0 : start - 5;
      let newEnd;
      if (end - start < 15) {
        setStart(newStart);
      } else {
        newEnd = end - 5;
        setEnd(newEnd);
        setStart(newStart);
      }
    }
    setFooterLoading(false);
  };

  const onEnd = () => {
    setFooterLoading(true);
    if (end < 379) {
      let newEnd = end + 2 > 379 ? 379 : end + 2;
      let newStart = start - 3 < 0 ? 0 : start - 3;
      if (end - start < 15) {
        setStart(newStart);
        setEnd(newEnd);
      } else {
        newStart = start + 2 < 0 ? 0 : start + 2;
        setStart(newStart);
        setEnd(newEnd);
      }
    }
    this.flatListRef.scrollToIndex({
      animated: true,
      index: end - start > 16 ? 13 : end - start - 5,
    });
  };

  React.useEffect(() => {
    getFixturesByLeague();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={(fixturesDT = fixtures?.splice(start, end - start))}
          renderItem={({item, index}) => {
            console.log(end - start);
            // index == fixturesDT.length ? setFooterLoading(false) : null;
            return (
              <FixtureView
                fixture={{item, season: fixturesDT[index - 1]?.league?.round}}
              />
            );
          }}
          numColumns={1}
          onEndReached={onEnd}
          onRefresh={onRefresh}
          refreshing={false}
          onEndReachedThreshold={0.1}
          ref={ref => {
            this.flatListRef = ref;
          }}
          ListFooterComponent={
            <View style={{height: 50, width: '100%'}}>
              {footerLoading == true ? (
                <View style={styles.loadingView}>
                  <ActivityIndicator size="large" />
                </View>
              ) : (
                <View></View>
              )}
            </View>
          }
        />
      )}
    </View>
  );
};

export default MatchScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    flex: 1,
    marginTop: 10,
  },
  imageThumbnail: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginHorizontal: 16,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    color: 'blue',
  },
  loadingViewEnd: {
    flex: 1,
    height: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
