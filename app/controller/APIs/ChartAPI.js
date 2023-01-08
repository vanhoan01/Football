import axios from 'axios';
import API from './API';
export default class MatchAPIs {
    static endpoints = {
        getStandingsByLeague: 'https://api-football-v1.p.rapidapi.com/v3/standings'
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

}