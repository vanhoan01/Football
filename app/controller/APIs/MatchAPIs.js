import axios from 'axios';
import API from './API';
export default class MatchAPIs {
    static endpoints = {
        getFixturesByLeague: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        getFixturesByRound: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    };

    static getFixturesByLeague = async(league = 39, season = 2022) => {
        try {
            let reponse = await axios.get(
                this.endpoints.getFixturesByLeague +
                '?league=' +
                league +
                '&season=' +
                season, {
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
    static getFixturesByRound = async(
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
                round, {
                    headers: {
                        'X-RapidAPI-Key': API.headers.XRapidAPIKey,
                        'X-RapidAPI-Host': API.headers.XRapidAPIHost,
                    },
                },
            );
            return Promise.resolve(reponse.data);
        } catch (error) {
            console.log('Error call api dá banh');
            console.log(error);
            return Promise.reject(error);
        }
    };
}