import axios from "./base"
import api from './endpoints'
/* ------------------------------ for register ------------------------------ */
export const registerApi =(data)=>{
    return new Promise((resolve,reject)=>{
        axios.post(api.register,data).then((res)=>{
            console.log(res.data)
            resolve(res.data)
        }).catch((err)=>{
            reject(err.message)
        })
    })
}   