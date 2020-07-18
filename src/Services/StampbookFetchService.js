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
        fetch(`${config.API_ENDPOINT}/stampbook/${id}`, {
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
            console.log('ahhh the getStampById service is being all broken or whatever')
        })
    },
    postNewStamp(userId, parkId, stampDate, comments){
        fetch(`${config.API_ENDPOINT}/api/stampbook` , {
            method: 'POST',
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
               'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify({
                user_id: userId,
                park_id: parkId,
                stamp_date: stampDate,
                comments: comments
            })
            })
                .then(res => {
                    console.log(res)
                    console.log(res.status == 201)
                    if (res.ok){
                        return res.json()
                        .then(res => {
                            console.log('good golly miss molly! the second .then statement has executed!')
                        })
                    } else{
                        throw 'the else has activated'
                    }
                })
                
                .catch(error => 'There was an error!')
    },
    fetchUserStamp(id){
        fetch(`${config.API_ENDPOINT}/api/stampbook/userId/${id}`)
            .then(res => {
                if (res.ok){
                    return res.json()
                }
            })
            .then(resJson => {
                console.log(resJson)
            })
            .catch(error => {
                `aaaaaah there are literally no stamps like this in this bitch!`
            })
    }
}

export default StampBookFetchService;