import * as React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import SelectList from 'react-native-dropdown-select-list';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView, 
  ScrollView, 
  StatusBar
} from 'react-native';
let rounds = [1];
import SeasonView from './compoments/SeasonView';
import ChartAPIs from '../../controller/APIs/ChartAPI';
const ChartsScreen = () => {

  let [isLoading, setIsLoading] = React.useState(false);
  const [fixtures, setFixtures] = React.useState([]);
  const getFixturesByChart = async () => {

    try {
      let data = await ChartAPIs.getStandingsByLeague(
        '39',
        '2022'
      );
      setFixtures(data?.response[0]?.league?.standings[0]);
    } catch (error) {
      console.log(error);
      setFixtures([]);
    }
  };

  // const getFixturesByChart = async () => {
  //   try {
  //     let data = {
  //       "get": "standings",
  //       "parameters": {
  //         "league": "39",
  //         "season": "2021"
  //       },
  //       "errors": [],
  //       "results": 1,
  //       "paging": {
  //         "current": 1,
  //         "total": 1
  //       },
  //       "response": [
  //         {
  //           "league": {
  //             "id": 39,
  //             "name": "Premier League",
  //             "country": "England",
  //             "logo": "https://media-2.api-sports.io/football/leagues/39.png",
  //             "flag": "https://media-1.api-sports.io/flags/gb.svg",
  //             "season": 2021,
  //             "standings": [
  //               [
  //                 {
  //                   "rank": 1,
  //                   "team": {
  //                     "id": 50,
  //                     "name": "Manchester City",
  //                     "logo": "https://media-2.api-sports.io/football/teams/50.png"
  //                   },
  //                   "points": 93,
  //                   "goalsDiff": 73,
  //                   "group": "Premier League",
  //                   "form": "WDWWW",
  //                   "status": "same",
  //                   "description": "Promotion - Champions League (Group Stage)",
  //                   "all": {
  //                     "played": 38,
  //                     "win": 29,
  //                     "draw": 6,
  //                     "lose": 3,
  //                     "goals": {
  //                       "for": 99,
  //                       "against": 26
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 15,
  //                     "draw": 2,
  //                     "lose": 2,
  //                     "goals": {
  //                       "for": 58,
  //                       "against": 15
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 14,
  //                     "draw": 4,
  //                     "lose": 1,
  //                     "goals": {
  //                       "for": 41,
  //                       "against": 11
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 2,
  //                   "team": {
  //                     "id": 40,
  //                     "name": "Liverpool",
  //                     "logo": "https://media-2.api-sports.io/football/teams/40.png"
  //                   },
  //                   "points": 92,
  //                   "goalsDiff": 68,
  //                   "group": "Premier League",
  //                   "form": "WWWDW",
  //                   "status": "same",
  //                   "description": "Promotion - Champions League (Group Stage)",
  //                   "all": {
  //                     "played": 38,
  //                     "win": 28,
  //                     "draw": 8,
  //                     "lose": 2,
  //                     "goals": {
  //                       "for": 94,
  //                       "against": 26
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 15,
  //                     "draw": 4,
  //                     "lose": 0,
  //                     "goals": {
  //                       "for": 49,
  //                       "against": 9
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 13,
  //                     "draw": 4,
  //                     "lose": 2,
  //                     "goals": {
  //                       "for": 45,
  //                       "against": 17
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 3,
  //                   "team": {
  //                     "id": 49,
  //                     "name": "Chelsea",
  //                     "logo": "https://media-3.api-sports.io/football/teams/49.png"
  //                   },
  //                   "points": 74,
  //                   "goalsDiff": 43,
  //                   "group": "Premier League",
  //                   "form": "WDWDL",
  //                   "status": "same",
  //                   "description": "Promotion - Champions League (Group Stage)",
  //                   "all": {
  //                     "played": 38,
  //                     "win": 21,
  //                     "draw": 11,
  //                     "lose": 6,
  //                     "goals": {
  //                       "for": 76,
  //                       "against": 33
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 9,
  //                     "draw": 7,
  //                     "lose": 3,
  //                     "goals": {
  //                       "for": 37,
  //                       "against": 22
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 12,
  //                     "draw": 4,
  //                     "lose": 3,
  //                     "goals": {
  //                       "for": 39,
  //                       "against": 11
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 4,
  //                   "team": {
  //                     "id": 47,
  //                     "name": "Tottenham",
  //                     "logo": "https://media-2.api-sports.io/football/teams/47.png"
  //                   },
  //                   "points": 71,
  //                   "goalsDiff": 29,
  //                   "group": "Premier League",
  //                   "form": "WWWDW",
  //                   "status": "same",
  //                   "description": "Promotion - Champions League (Group Stage)",
  //                   "all": {
  //                     "played": 38,
  //                     "win": 22,
  //                     "draw": 5,
  //                     "lose": 11,
  //                     "goals": {
  //                       "for": 69,
  //                       "against": 40
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 13,
  //                     "draw": 1,
  //                     "lose": 5,
  //                     "goals": {
  //                       "for": 38,
  //                       "against": 19
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 9,
  //                     "draw": 4,
  //                     "lose": 6,
  //                     "goals": {
  //                       "for": 31,
  //                       "against": 21
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 5,
  //                   "team": {
  //                     "id": 42,
  //                     "name": "Arsenal",
  //                     "logo": "https://media-3.api-sports.io/football/teams/42.png"
  //                   },
  //                   "points": 69,
  //                   "goalsDiff": 13,
  //                   "group": "Premier League",
  //                   "form": "WLLWW",
  //                   "status": "same",
  //                   "description": "Promotion - Europa League (Group Stage)",
  //                   "all": {
  //                     "played": 38,
  //                     "win": 22,
  //                     "draw": 3,
  //                     "lose": 13,
  //                     "goals": {
  //                       "for": 61,
  //                       "against": 48
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 13,
  //                     "draw": 2,
  //                     "lose": 4,
  //                     "goals": {
  //                       "for": 35,
  //                       "against": 17
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 9,
  //                     "draw": 1,
  //                     "lose": 9,
  //                     "goals": {
  //                       "for": 26,
  //                       "against": 31
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 6,
  //                   "team": {
  //                     "id": 33,
  //                     "name": "Manchester United",
  //                     "logo": "https://media-1.api-sports.io/football/teams/33.png"
  //                   },
  //                   "points": 58,
  //                   "goalsDiff": 0,
  //                   "group": "Premier League",
  //                   "form": "LLWDL",
  //                   "status": "same",
  //                   "description": "Promotion - Europa League (Group Stage)",
  //                   "all": {
  //                     "played": 38,
  //                     "win": 16,
  //                     "draw": 10,
  //                     "lose": 12,
  //                     "goals": {
  //                       "for": 57,
  //                       "against": 57
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 10,
  //                     "draw": 5,
  //                     "lose": 4,
  //                     "goals": {
  //                       "for": 32,
  //                       "against": 22
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 6,
  //                     "draw": 5,
  //                     "lose": 8,
  //                     "goals": {
  //                       "for": 25,
  //                       "against": 35
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 7,
  //                   "team": {
  //                     "id": 48,
  //                     "name": "West Ham",
  //                     "logo": "https://media-3.api-sports.io/football/teams/48.png"
  //                   },
  //                   "points": 56,
  //                   "goalsDiff": 9,
  //                   "group": "Premier League",
  //                   "form": "LDWLL",
  //                   "status": "same",
  //                   "description": "Promotion - Europa Conference League (Qualification)",
  //                   "all": {
  //                     "played": 38,
  //                     "win": 16,
  //                     "draw": 8,
  //                     "lose": 14,
  //                     "goals": {
  //                       "for": 60,
  //                       "against": 51
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 9,
  //                     "draw": 5,
  //                     "lose": 5,
  //                     "goals": {
  //                       "for": 33,
  //                       "against": 26
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 7,
  //                     "draw": 3,
  //                     "lose": 9,
  //                     "goals": {
  //                       "for": 27,
  //                       "against": 25
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 8,
  //                   "team": {
  //                     "id": 46,
  //                     "name": "Leicester",
  //                     "logo": "https://media-3.api-sports.io/football/teams/46.png"
  //                   },
  //                   "points": 52,
  //                   "goalsDiff": 3,
  //                   "group": "Premier League",
  //                   "form": "WDWWL",
  //                   "status": "same",
  //                   "description": null,
  //                   "all": {
  //                     "played": 38,
  //                     "win": 14,
  //                     "draw": 10,
  //                     "lose": 14,
  //                     "goals": {
  //                       "for": 62,
  //                       "against": 59
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 10,
  //                     "draw": 4,
  //                     "lose": 5,
  //                     "goals": {
  //                       "for": 34,
  //                       "against": 23
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 4,
  //                     "draw": 6,
  //                     "lose": 9,
  //                     "goals": {
  //                       "for": 28,
  //                       "against": 36
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 9,
  //                   "team": {
  //                     "id": 51,
  //                     "name": "Brighton",
  //                     "logo": "https://media-1.api-sports.io/football/teams/51.png"
  //                   },
  //                   "points": 51,
  //                   "goalsDiff": -2,
  //                   "group": "Premier League",
  //                   "form": "WDWWD",
  //                   "status": "same",
  //                   "description": null,
  //                   "all": {
  //                     "played": 38,
  //                     "win": 12,
  //                     "draw": 15,
  //                     "lose": 11,
  //                     "goals": {
  //                       "for": 42,
  //                       "against": 44
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 5,
  //                     "draw": 7,
  //                     "lose": 7,
  //                     "goals": {
  //                       "for": 19,
  //                       "against": 23
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 7,
  //                     "draw": 8,
  //                     "lose": 4,
  //                     "goals": {
  //                       "for": 23,
  //                       "against": 21
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 10,
  //                   "team": {
  //                     "id": 39,
  //                     "name": "Wolves",
  //                     "logo": "https://media-2.api-sports.io/football/teams/39.png"
  //                   },
  //                   "points": 51,
  //                   "goalsDiff": -5,
  //                   "group": "Premier League",
  //                   "form": "LDLDL",
  //                   "status": "same",
  //                   "description": null,
  //                   "all": {
  //                     "played": 38,
  //                     "win": 15,
  //                     "draw": 6,
  //                     "lose": 17,
  //                     "goals": {
  //                       "for": 38,
  //                       "against": 43
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 7,
  //                     "draw": 3,
  //                     "lose": 9,
  //                     "goals": {
  //                       "for": 20,
  //                       "against": 25
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 8,
  //                     "draw": 3,
  //                     "lose": 8,
  //                     "goals": {
  //                       "for": 18,
  //                       "against": 18
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 11,
  //                   "team": {
  //                     "id": 34,
  //                     "name": "Newcastle",
  //                     "logo": "https://media-1.api-sports.io/football/teams/34.png"
  //                   },
  //                   "points": 49,
  //                   "goalsDiff": -18,
  //                   "group": "Premier League",
  //                   "form": "WWLLW",
  //                   "status": "same",
  //                   "description": null,
  //                   "all": {
  //                     "played": 38,
  //                     "win": 13,
  //                     "draw": 10,
  //                     "lose": 15,
  //                     "goals": {
  //                       "for": 44,
  //                       "against": 62
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 8,
  //                     "draw": 6,
  //                     "lose": 5,
  //                     "goals": {
  //                       "for": 26,
  //                       "against": 27
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 5,
  //                     "draw": 4,
  //                     "lose": 10,
  //                     "goals": {
  //                       "for": 18,
  //                       "against": 35
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 12,
  //                   "team": {
  //                     "id": 52,
  //                     "name": "Crystal Palace",
  //                     "logo": "https://media-2.api-sports.io/football/teams/52.png"
  //                   },
  //                   "points": 48,
  //                   "goalsDiff": 4,
  //                   "group": "Premier League",
  //                   "form": "WLDWW",
  //                   "status": "same",
  //                   "description": null,
  //                   "all": {
  //                     "played": 38,
  //                     "win": 11,
  //                     "draw": 15,
  //                     "lose": 12,
  //                     "goals": {
  //                       "for": 50,
  //                       "against": 46
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 7,
  //                     "draw": 8,
  //                     "lose": 4,
  //                     "goals": {
  //                       "for": 27,
  //                       "against": 17
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 4,
  //                     "draw": 7,
  //                     "lose": 8,
  //                     "goals": {
  //                       "for": 23,
  //                       "against": 29
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 13,
  //                   "team": {
  //                     "id": 55,
  //                     "name": "Brentford",
  //                     "logo": "https://media-3.api-sports.io/football/teams/55.png"
  //                   },
  //                   "points": 46,
  //                   "goalsDiff": -8,
  //                   "group": "Premier League",
  //                   "form": "LWWLD",
  //                   "status": "same",
  //                   "description": null,
  //                   "all": {
  //                     "played": 38,
  //                     "win": 13,
  //                     "draw": 7,
  //                     "lose": 18,
  //                     "goals": {
  //                       "for": 48,
  //                       "against": 56
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 7,
  //                     "draw": 3,
  //                     "lose": 9,
  //                     "goals": {
  //                       "for": 22,
  //                       "against": 21
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 6,
  //                     "draw": 4,
  //                     "lose": 9,
  //                     "goals": {
  //                       "for": 26,
  //                       "against": 35
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 14,
  //                   "team": {
  //                     "id": 66,
  //                     "name": "Aston Villa",
  //                     "logo": "https://media-2.api-sports.io/football/teams/66.png"
  //                   },
  //                   "points": 45,
  //                   "goalsDiff": -2,
  //                   "group": "Premier League",
  //                   "form": "LDDLW",
  //                   "status": "same",
  //                   "description": null,
  //                   "all": {
  //                     "played": 38,
  //                     "win": 13,
  //                     "draw": 6,
  //                     "lose": 19,
  //                     "goals": {
  //                       "for": 52,
  //                       "against": 54
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 6,
  //                     "draw": 5,
  //                     "lose": 8,
  //                     "goals": {
  //                       "for": 29,
  //                       "against": 29
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 7,
  //                     "draw": 1,
  //                     "lose": 11,
  //                     "goals": {
  //                       "for": 23,
  //                       "against": 25
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 15,
  //                   "team": {
  //                     "id": 41,
  //                     "name": "Southampton",
  //                     "logo": "https://media-3.api-sports.io/football/teams/41.png"
  //                   },
  //                   "points": 40,
  //                   "goalsDiff": -24,
  //                   "group": "Premier League",
  //                   "form": "LLLLD",
  //                   "status": "same",
  //                   "description": null,
  //                   "all": {
  //                     "played": 38,
  //                     "win": 9,
  //                     "draw": 13,
  //                     "lose": 16,
  //                     "goals": {
  //                       "for": 43,
  //                       "against": 67
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 6,
  //                     "draw": 7,
  //                     "lose": 6,
  //                     "goals": {
  //                       "for": 23,
  //                       "against": 24
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 3,
  //                     "draw": 6,
  //                     "lose": 10,
  //                     "goals": {
  //                       "for": 20,
  //                       "against": 43
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 16,
  //                   "team": {
  //                     "id": 45,
  //                     "name": "Everton",
  //                     "logo": "https://media-1.api-sports.io/football/teams/45.png"
  //                   },
  //                   "points": 39,
  //                   "goalsDiff": -23,
  //                   "group": "Premier League",
  //                   "form": "LWLDW",
  //                   "status": "same",
  //                   "description": null,
  //                   "all": {
  //                     "played": 38,
  //                     "win": 11,
  //                     "draw": 6,
  //                     "lose": 21,
  //                     "goals": {
  //                       "for": 43,
  //                       "against": 66
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 9,
  //                     "draw": 2,
  //                     "lose": 8,
  //                     "goals": {
  //                       "for": 27,
  //                       "against": 25
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 2,
  //                     "draw": 4,
  //                     "lose": 13,
  //                     "goals": {
  //                       "for": 16,
  //                       "against": 41
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 17,
  //                   "team": {
  //                     "id": 63,
  //                     "name": "Leeds",
  //                     "logo": "https://media-2.api-sports.io/football/teams/63.png"
  //                   },
  //                   "points": 38,
  //                   "goalsDiff": -37,
  //                   "group": "Premier League",
  //                   "form": "WDLLL",
  //                   "status": "same",
  //                   "description": null,
  //                   "all": {
  //                     "played": 38,
  //                     "win": 9,
  //                     "draw": 11,
  //                     "lose": 18,
  //                     "goals": {
  //                       "for": 42,
  //                       "against": 79
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 4,
  //                     "draw": 6,
  //                     "lose": 9,
  //                     "goals": {
  //                       "for": 19,
  //                       "against": 38
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 5,
  //                     "draw": 5,
  //                     "lose": 9,
  //                     "goals": {
  //                       "for": 23,
  //                       "against": 41
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 18,
  //                   "team": {
  //                     "id": 44,
  //                     "name": "Burnley",
  //                     "logo": "https://media-3.api-sports.io/football/teams/44.png"
  //                   },
  //                   "points": 35,
  //                   "goalsDiff": -19,
  //                   "group": "Premier League",
  //                   "form": "LDLLW",
  //                   "status": "same",
  //                   "description": "Relegation - Championship",
  //                   "all": {
  //                     "played": 38,
  //                     "win": 7,
  //                     "draw": 14,
  //                     "lose": 17,
  //                     "goals": {
  //                       "for": 34,
  //                       "against": 53
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 5,
  //                     "draw": 6,
  //                     "lose": 8,
  //                     "goals": {
  //                       "for": 18,
  //                       "against": 25
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 2,
  //                     "draw": 8,
  //                     "lose": 9,
  //                     "goals": {
  //                       "for": 16,
  //                       "against": 28
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 19,
  //                   "team": {
  //                     "id": 38,
  //                     "name": "Watford",
  //                     "logo": "https://media-3.api-sports.io/football/teams/38.png"
  //                   },
  //                   "points": 23,
  //                   "goalsDiff": -43,
  //                   "group": "Premier League",
  //                   "form": "LLDLL",
  //                   "status": "same",
  //                   "description": "Relegation - Championship",
  //                   "all": {
  //                     "played": 38,
  //                     "win": 6,
  //                     "draw": 5,
  //                     "lose": 27,
  //                     "goals": {
  //                       "for": 34,
  //                       "against": 77
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 2,
  //                     "draw": 2,
  //                     "lose": 15,
  //                     "goals": {
  //                       "for": 17,
  //                       "against": 46
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 4,
  //                     "draw": 3,
  //                     "lose": 12,
  //                     "goals": {
  //                       "for": 17,
  //                       "against": 31
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 },
  //                 {
  //                   "rank": 20,
  //                   "team": {
  //                     "id": 71,
  //                     "name": "Norwich",
  //                     "logo": "https://media-1.api-sports.io/football/teams/71.png"
  //                   },
  //                   "points": 22,
  //                   "goalsDiff": -61,
  //                   "group": "Premier League",
  //                   "form": "LDLLL",
  //                   "status": "same",
  //                   "description": "Relegation - Championship",
  //                   "all": {
  //                     "played": 38,
  //                     "win": 5,
  //                     "draw": 7,
  //                     "lose": 26,
  //                     "goals": {
  //                       "for": 23,
  //                       "against": 84
  //                     }
  //                   },
  //                   "home": {
  //                     "played": 19,
  //                     "win": 3,
  //                     "draw": 3,
  //                     "lose": 13,
  //                     "goals": {
  //                       "for": 12,
  //                       "against": 43
  //                     }
  //                   },
  //                   "away": {
  //                     "played": 19,
  //                     "win": 2,
  //                     "draw": 4,
  //                     "lose": 13,
  //                     "goals": {
  //                       "for": 11,
  //                       "against": 41
  //                     }
  //                   },
  //                   "update": "2022-05-22T00:00:00+00:00"
  //                 }
  //               ]
  //             ]
  //           }
  //         }
  //       ]
  //     }
  //     setFixtures(data?.response[0]?.league?.standings[0]);
  //   } catch (error) {
  //     console.log(error);
  //     setFixtures([]);
  //   }
  // };
  React.useEffect(() => {
    setIsLoading(true)
    getFixturesByChart();
    console.log('fixtures: ');
    console.log(fixtures);
  }, []);
  return (
     <View style={{
      backgroundColor:"#fff"
     }}>
     <View style={{
      height:50,
      paddingVertical:10,
      borderBottomWidth:1.2,
      borderBottomColor:'gray',
      borderTopColor:'gray',
      borderTopWidth:1.2,
      }}>
        <Text style={{
          color:"black",
          fontSize:14,
          fontWeight:'400',
        }}>
          Mùa giải 2022-23
        </Text>
      </View>
        <FlatList
        data={rounds}
        renderItem={(item, index) => <SeasonView roundRS={fixtures} />}
        numColumns={1}
      />  
     </View>
  );
};

export default ChartsScreen;

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginHorizontal: 16,
    // backgroundColor: 'blue',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});