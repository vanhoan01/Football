import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import MatchAPIs from '../../../controller/APIs/MatchAPIs';
import FixtureOverviewView from '../compoments/FixtureOverviewView';
import FixtureStatisticView from '../compoments/FixtureStatisticView';
import FixturePercentView from '../compoments/FixturePercentView';

const FixtureDetailsScreen = () => {
  let [isLoading, setIsLoading] = React.useState(true);
  const route = useRoute();
  let id = route.params?.id;
  console.log(id);

  let [fixtures, setFixtures] = React.useState({});

  getFixturesByFixtureId = async () => {
    try {
      let data = await MatchAPIs.getFixturesByFixtureId(id);
      console.log('fixtures data:');
      console.log(data?.response[0]);
      setFixtures(data?.response[0]);
      // getResultDT();
      console.log('fixtures:');
      console.log(fixtures);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    getFixturesByFixtureId();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView style={styles.scrollView}>
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'column',
                backgroundColor: 'white',
              }}>
              {/* view tỉ số */}
              <View
                style={{
                  flexDirection: 'column',
                  paddingVertical: 24,
                  paddingHorizontal: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.imageThumbnail}
                    source={{
                      uri: fixtures?.teams?.home?.logo,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 32,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    {fixtures?.goals?.home == null ? '' : fixtures?.goals?.home}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'black',
                      }}>
                      {fixtures?.fixture?.status?.short == 'FT'
                        ? 'KT'
                        : fixtures?.fixture?.date?.substr(8, 2) +
                          '/' +
                          fixtures?.fixture?.date?.substr(5, 2)}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'black',
                      }}>
                      {fixtures?.fixture?.status?.short == 'FT'
                        ? fixtures?.fixture?.date?.substr(8, 2) +
                          '/' +
                          fixtures?.fixture?.date?.substr(5, 2)
                        : fixtures?.fixture?.date?.substr(11, 5)}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 32,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    {fixtures?.goals?.away == null ? '' : fixtures?.goals?.away}
                  </Text>
                  <Image
                    style={styles.imageThumbnail}
                    source={{
                      uri: fixtures?.teams?.away?.logo,
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    {fixtures?.teams?.home?.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    {fixtures?.teams?.away?.name}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',

                marginTop: 10,
              }}>
              <FixtureOverviewView
                events={fixtures?.events}
                venue={fixtures?.fixture?.venue}
                status={fixtures?.fixture?.status?.short == 'FT' ? true : false}
                teams={fixtures?.teams}
              />
              {fixtures?.fixture?.status?.short == 'FT' ? (
                <FixtureStatisticView id={id} />
              ) : (
                <FixturePercentView id={id} />
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default FixtureDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  text: {
    fontSize: 42,
  },
  imageThumbnail: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  imageThumbnail1: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  playerGoalsText1: {
    fontSize: 14,
    color: 'black',
  },
  playerGoalsText2: {
    fontSize: 14,
    color: 'gray',
  },
  line: {
    height: 1,
    backgroundColor: '#CCCCCC',
    width: '100%',
  },
  statisticText: {
    fontSize: 16,
    color: 'black',
  },
});
