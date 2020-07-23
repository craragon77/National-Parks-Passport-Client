import TokenService from './TokenService';
import config from '../config'; 

const StampBookFetchService = {
    getAllStamps(){
        fetch(`${config.API_ENDPOINT}/stampbook`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
                //headers bb
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
        .catch(() => {
            console.log('ahhh the getAllStamps service is being all broken or whatever')
        })
    },
    getStampById(id){
        return fetch(`${config.API_ENDPOINT}/api/stampbook/id/${id}`, {
            headers: {
                'authorization': `${TokenService.getAuthToken()}`,
                //headers bb
            }
        })
    },
    postNewStamp(userId, parkId, stampDate, comments){
        return fetch(`${config.API_ENDPOINT}/api/stampbook` , {
            method: 'POST',
            headers: {
                'authorization': `${TokenService.getAuthToken()}`,
                'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify({
                user_id: userId,
                park_id: parkId,
                stamp_date: stampDate,
                comments: comments
            })
            })
    },
    fetchUserStamp(id){
        return fetch(`${config.API_ENDPOINT}/api/stampbook/userId/${id}`, {
            headers: {
                'authorization': `${TokenService.getAuthToken()}`
            }
        })
            
    },
    fetchStampAndNames(id){
        return fetch(`${config.API_ENDPOINT}/api/stampbook/stampList/${id}`,{
            headers: {
                'authorization': `${TokenService.getAuthToken()}`
            }
        })
    },
    fetchStampInfo(stamp_id){
        return fetch(`${config.API_ENDPOINT}/api/stampbook/stampInfo/${stamp_id}`, {
            headers: {
                'authorization': `${TokenService.getAuthToken()}`
            }
        })
    }
}

export default StampBookFetchService;