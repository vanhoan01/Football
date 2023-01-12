import axios from 'axios';
import API from './API';
export default class SearchAPIs {
  static endpoints = {
    searchPlayer: 'https://api-football-v1.p.rapidapi.com/v3/players',
    searchTeam: 'https://api-football-v1.p.rapidapi.com/v3/teams',
    searchFixturesTeam: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    searchFixturesTwoTeams:
      'https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead',
  };

  static searchPlayer = async (search = '') => {
    try {
      let reponse = await axios.get(
        this.endpoints.searchPlayer + '?league=39' + '&search=' + search,
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

  static searchTeam = async () => {
    try {
      let reponse = await axios.get(
        this.endpoints.searchTeam + '?league=39&season=2022',
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

  static searchFixturesTeam = async team => {
    try {
      let reponse = await axios.get(
        this.endpoints.searchFixturesTeam +
          '?league=39&season=2022&team=' +
          team,
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

  static searchFixturesTwoTeams = async h2h => {
    try {
      let reponse = await axios.get(
        this.endpoints.searchFixturesTwoTeams + '?h2h=' + h2h,
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
