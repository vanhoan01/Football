import axios from 'axios';
import API from './API';
export default class MatchAPIs {
  static endpoints = {
    getFixturesByLeague: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    getFixturesByRound: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    getCurrentRound:
      'https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds',
    getFixturesByFixtureId:
      'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    getPredictionsFixture:
      'https://api-football-v1.p.rapidapi.com/v3/predictions',
    getTeams: ' https://api-football-v1.p.rapidapi.com/v3/teams',
    getPlayer: 'https://api-football-v1.p.rapidapi.com/v3/players',
    getSquads: 'https://api-football-v1.p.rapidapi.com/v3/players/squads',
  };

  static getFixturesByLeague = async (league = 39, season = 2022) => {
    try {
      let reponse = await axios.get(
        this.endpoints.getFixturesByLeague +
          '?league=' +
          league +
          '&season=' +
          season +
          '&timezone=' +
          API.headers.timezone,
        {
          headers: {
            'X-RapidAPI-Key': API.headers.XRapidAPIKey,
            'X-RapidAPI-Host': API.headers.XRapidAPIHost,
          },
        },
      );
      return Promise.resolve(reponse.data);
    } catch (error) {
      console.log('Error call api ');
      console.log(error);
      return Promise.reject(error);
    }
  };

  static getFixturesByRound = async (
    league = '39',
    season = '2022',
    round = 'Regular Season - 10',
  ) => {
    try {
      let reponse = await axios.get(
        this.endpoints.getFixturesByRound +
          '?league=' +
          league +
          '&season=' +
          season +
          '&round=' +
          round +
          '&timezone=' +
          API.headers.timezone,
        {
          headers: {
            'X-RapidAPI-Key': API.headers.XRapidAPIKey,
            'X-RapidAPI-Host': API.headers.XRapidAPIHost,
          },
        },
      );
      return Promise.resolve(reponse.data);
    } catch (error) {
      console.log('Error call api ');
      console.log(error);
      return Promise.reject(error);
    }
  };

  static getFixturesByFixtureId = async (id = '157201') => {
    try {
      let reponse = await axios.get(
        this.endpoints.getFixturesByFixtureId +
          '?id=' +
          id +
          '&timezone=' +
          API.headers.timezone,
        {
          headers: {
            'X-RapidAPI-Key': API.headers.XRapidAPIKey,
            'X-RapidAPI-Host': API.headers.XRapidAPIHost,
          },
        },
      );
      return Promise.resolve(reponse.data);
    } catch (error) {
      console.log('Error call api ');
      console.log(error);
      return Promise.reject(error);
    }
  };

  static getCurrentRound = async (league = '39', season = '2022') => {
    try {
      let reponse = await axios.get(
        this.endpoints.getCurrentRound +
          '?league=' +
          league +
          '&season=' +
          season +
          '&current=true',
        {
          headers: {
            'X-RapidAPI-Key': API.headers.XRapidAPIKey,
            'X-RapidAPI-Host': API.headers.XRapidAPIHost,
          },
        },
      );
      return Promise.resolve(reponse.data);
    } catch (error) {
      console.log('Error call api ');
      console.log(error);
      return Promise.reject(error);
    }
  };

  static getPredictionsFixture = async (fixture = '198772') => {
    try {
      let reponse = await axios.get(
        this.endpoints.getPredictionsFixture + '?fixture=' + fixture,
        {
          headers: {
            'X-RapidAPI-Key': API.headers.XRapidAPIKey,
            'X-RapidAPI-Host': API.headers.XRapidAPIHost,
          },
        },
      );
      return Promise.resolve(reponse.data);
    } catch (error) {
      console.log('Error call api ');
      console.log(error);
      return Promise.reject(error);
    }
  };

  // params: {league: '39', season: '2020', team: '33'},

  static getTeams = async (league = 39, season = 2022) => {
    try {
      let response = await axios.get(
        this.endpoints.getTeams + '?league=' + league + '&season=' + season,
        {
          headers: {
            'X-RapidAPI-Key': API.headers.XRapidAPIKey,
            'X-RapidAPI-Host': API.headers.XRapidAPIHost,
          },
        },
      );
      return Promise.resolve(response.data);
    } catch (error) {
      console.log('Error call api ');
      console.log(error);
      return Promise.reject(error);
    }
  };

  static getSquads = async (team = '33') => {
    try {
      let reponse = await axios.get(
        this.endpoints.getSquads + '?team=' + team,
        {
          headers: {
            'X-RapidAPI-Key': API.headers.XRapidAPIKey,
            'X-RapidAPI-Host': API.headers.XRapidAPIHost,
          },
        },
      );
      return Promise.resolve(reponse.data);
    } catch (error) {
      console.log('Error call api ');
      console.log(error);
      return Promise.reject(error);
    }
  };

  static getPlayer = async (id = '882', season = '2022') => {
    try {
      let reponse = await axios.get(
        this.endpoints.getPlayer + '?id=' + id + '&season=' + season,
        {
          headers: {
            'X-RapidAPI-Key': API.headers.XRapidAPIKey,
            'X-RapidAPI-Host': API.headers.XRapidAPIHost,
          },
        },
      );
      return Promise.resolve(reponse.data);
    } catch (error) {
      console.log('Error call api ');
      console.log(error);
      return Promise.reject(error);
    }
  };
}
