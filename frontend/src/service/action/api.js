import axios from 'axios';
import { url } from './types';

const conf = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const apiCall = {
    get: async(endpoint, config = conf) => {
        try {
            const { data } = await axios.get(`${url}/${endpoint}`, config);
            return {
                success: true,
                data
            }
        } catch (error) {
            let err = 'Something went wrong !';
            if(error.response && error.response.data) {
                err = error.response.data
            }
            return {
                success: false,
                data: err
            }
        }
    },
    post: async(endpoint, payload,config = conf) => {
        try {
            const { data } = await axios.post(`${url}/${endpoint}`, payload,config);
            return {
                success: true,
                data
            }
        } catch (error) {
            let err = {
                data: {
                    data: [
                        { msg: [ { msg: 'Something went wrong' } ] }
                    ]
                }
            }
            if(error.response && error.response.data) {
                err = error.response.data.data[0].msg
            }
            return {
                success: false,
                data: err
            }
        }
    }
}

export {
    apiCall
}