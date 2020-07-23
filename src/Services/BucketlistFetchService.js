import TokenService from './TokenService';
import config from '../config'; 

const BucketlistFetchService = {
    getAllBucketlist(){
        fetch(`${config.API_ENDPOINT}/bucketlist`, {
            headers: {
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
            console.log('ahhh the getAllBucketlist service thingy is being all broken or whatever')
        })
    },
    getBucketlistById(id){
        fetch(`${config.API_ENDPOINT}/bucketlist/${id}`, {
            headers: {
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
            console.log('ahhh the getAllBucketlist service thingy is being all broken or whatever')
        })
    },
    postNewBucketlist(user_id, park_id){
        return fetch(`${config.API_ENDPOINT}/api/bucketlist`, {
            method: 'POST',
            headers: {
                'authorization': `${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
                //headers bb
            },
            body: JSON.stringify({
                "user_id": user_id,
                "park_id": park_id
            })
        })
    }, 
    getBucketlistUser(id){
        return fetch(`${config.API_ENDPOINT}/api/bucketlist/userId/${id}`, {
            headers: {
                'authorization': `${TokenService.getAuthToken()}`
            }
        })
    },
    getBucketlistAndParkName(id){
        return fetch(`${config.API_ENDPOINT}/api/bucketlist/info/${id}`, {
            headers: {
                'authorization': `${TokenService.getAuthToken()}`
            }
        })
    },
    deleteBucketlistItem(id){
        return fetch(`${config.API_ENDPOINT}/api/bucketlist/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            }
        })
    }
}

export default BucketlistFetchService