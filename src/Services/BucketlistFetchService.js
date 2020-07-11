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
    postNewBucketlist(){
        fetch(`${config.API_ENDPOINT}/bucketlist`, {
            headers: {
                'content-type': 'application/json'
                //headers bb
            },
            body: {
                user_id: userId,
                park_id: park_id
            }
        })
        .then(res => {
            if (res.status == 201){
                console.log('user successfully posted!')
                return res.json()
            }
        })
        .catch(() => {
            console,log('something went bump in the night with the postNewBucketlist endpoint')
        })
    }
}