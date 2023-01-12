import axios from 'axios';
import API from './API';
export default class ChartAPIs {
    static endpoints = {
        getStandingsByLeague: 'https://api-football-v1.p.rapidapi.com/v3/standings',
        getTeamMathById: 'https://api-football-v1.p.rapidapi.com/v3/fixtures'
    };

    static getStandingsByLeague = async(league = 39, season = 2022) => {
        try {
            let reponse = await axios.get(
                this.endpoints.getStandingsByLeague +
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
            console.log('Error call api bảng xếp hạng ');
            console.log(error);
            return Promise.reject(error);
        }
    };

    static getTeamMathById = async(league = 39, season = 2022, team = 33) => {
        try {
            let response = await axios.get(
                this.endpoints.getTeamMathById +
                '?league=' +
                league +
                '&season=' +
                season +
                '&team=' +
                team, {
                    headers: {
                        'X-RapidAPI-Key': API.headers.XRapidAPIKey,
                        'X-RapidAPI-Host': API.headers.XRapidAPIHost,
                    },
                },
            );
            return Promise.resolve(response.data);
        } catch (error) {
            console.log('Error call api team math ');
            console.log(error);
            return Promise.reject(error);
        }
    };


}