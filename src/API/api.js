import axios from 'axios'

export const get_API = async (url,endpoint) => {
    return axios.get(url + endpoint).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

export const post_API = async (url,endpoint,data) => {
    return axios.post(url + endpoint,data).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

export const delete_API = async (url,endpoint,id) => {
    return axios.delete(url + endpoint + "/" + id).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

export const update_API = async (url,endpoint,id,data) => {
    return axios.put(url + endpoint + "/" + id,data).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}