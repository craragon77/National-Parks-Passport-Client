import TokenService from './TokenService';
import config from '../config';

const ParkFetchService = {
    getAllParks(){
        return (
            fetch(`${config.API_ENDPOINT}/api/parks`, {
                headers: {
                    'authorization': `basic ${TokenService.getAuthToken()}`,
                    //something goes in here
                }
            })
            .then(res => {
                if (res.ok){
                    return res.json()
                }
            })
            .then(resJson => {
                console.log(resJson)
            })
            .catch(error => console.log('there was an error in the fetchAllParks endpoint!'))
        )
    },
    getParkByFullName(params){
        return fetch(`${config.API_ENDPOINT}/api/parks/name/${params}`, {
                headers: {
                    'authorization': `${TokenService.getAuthToken()}`,
                    //more code will go in here eventually
                }
            })
    },
    getParkById(id){
        return(
            fetch(`${config.API_ENDPOINT}/api/parks/id/${id}`, {
                headers: {
                    'authorization': `${TokenService.getAuthToken()}`,
                    //more code will go in here eventually
                }
            })
        )
    }
}

export default ParkFetchService;