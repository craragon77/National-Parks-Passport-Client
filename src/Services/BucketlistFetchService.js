import TokenService from './TokenService';
import config from '../config'; 

const BucketlistFetchService = {
    getAllBucketlist(){
        fetch(`${config.API_ENDPOINT}/bucketlist`, {
        })
        .then(res => {
            if (res.ok){
                return res.json();
            }
        })
        .catch((error) => {
            console.error(error);
        })
    },
    getBucketlistById(id){
        fetch(`${config.API_ENDPOINT}/bucketlist/${id}`, {
        })
        .then(res => {
            if (res.ok){
                return res.json();
            }
        })
        .catch((error) => {
            console.error(error);
        })
    },
    postNewBucketlist(user_id, park_id){
        return fetch(`${config.API_ENDPOINT}/api/bucketlist`, {
            method: 'POST',
            headers: {
                'authorization': `${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "user_id": user_id,
                "park_id": park_id
            })
        });
    }, 
    getBucketlistUser(id){
        return fetch(`${config.API_ENDPOINT}/api/bucketlist/userId/${id}`, {
            headers: {
                'authorization': `${TokenService.getAuthToken()}`
            }
        });
    },
    getBucketlistAndParkName(id){
        return fetch(`${config.API_ENDPOINT}/api/bucketlist/info/${id}`, {
            headers: {
                'authorization': `${TokenService.getAuthToken()}`
            }
        });
    },
    deleteBucketlistItem(id){
        return fetch(`${config.API_ENDPOINT}/api/bucketlist/id/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            }
        });
    }
};

export default BucketlistFetchService