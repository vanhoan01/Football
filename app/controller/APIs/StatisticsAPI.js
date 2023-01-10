import axios from 'axios';
import API from './API';
export default class StatisticsAPI {
  static endpoint = {
    getFixturesByLeague: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    getTopScore: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
    getTopAssist:
      'https://api-football-v1.p.rapidapi.com/v3/players/topassists',
    getTopYellowCard:
      'https://api-football-v1.p.rapidapi.com/v3/players/topyellowcards',
    getTopRedCard:
      'https://api-football-v1.p.rapidapi.com/v3/players/topredcards',
  };
  static getFixturesByLeague = async (league = '39', season = '2020') => {
    try {
      let reponse = await axios.get(
        this.endpoints.getFixturesByLeague +
          '?league=' +
          league +
          '&season=' +
          season,
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
  static getTopScore = async (league = '39', season = '2020') => {
    try {
      let response = await axios.get(
        this.endpoint.getTopScore + '?league=' + league + '$season=' + season,
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
  static getTopAssist = async (league = '39', season = '2020') => {
    try {
      let response = await axios.get(
        this.endpoint.getTopScore + '?league=' + league + '$season=' + season,
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
  static getTopYellowCard = async (league = '39', season = '2020') => {
    try {
      let resonse = await axios.get(
        this.endpoint.getTopScore + '?league=' + league + '$season=' + season,
        {
          headers: {
            'X-RapidAPI-Key': API.headers.XRapidAPIKey,
            'X-RapidAPI-Host': API.headers.XRapidAPIHost,
          },
        },
      );
      return Promise.resolve(resonse.data);
    } catch (error) {
      console.log('Error call api ');
      console.log(error);
      return Promise.reject(error);
    }
  };
  static getTopRedCard = async (league = '39', season = '2020') => {
    try {
      let resonse = await axios.get(
        this.endpoint.getTopScore + '?league=' + league + '$season=' + season,
        {
          headers: {
            'X-RapidAPI-Key': API.headers.XRapidAPIKey,
            'X-RapidAPI-Host': API.headers.XRapidAPIHost,
          },
        },
      );
      return Promise.resolve(resonse.data);
    } catch (error) {
      console.log('Error call api ');
      console.log(error);
      return Promise.reject(error);
    }
  };
}
