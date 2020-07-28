import TokenService from './TokenService';
import config from '../config';

const ParkFetchService = {
    getAllParks(){
        return (
            fetch(`${config.API_ENDPOINT}/api/parks`, {
                headers: {
                    'authorization': `${TokenService.getAuthToken()}`,
                }
            })
            .then(res => {
                if (res.ok){
                    return res.json();
                }
            })
            .catch(error => console.error('there was an error in the fetchAllParks endpoint!'))
        );
    },
    getParkByFullName(params){
        return fetch(`${config.API_ENDPOINT}/api/parks/name/${params}`, {
                headers: {
                    'authorization': `${TokenService.getAuthToken()}`
                }
            });
    },
    getParkById(id){
        return(
            fetch(`${config.API_ENDPOINT}/api/parks/id/${id}`, {
                headers: {
                    'authorization': `${TokenService.getAuthToken()}`
                }
            })
        );
    }
};

export default ParkFetchService;