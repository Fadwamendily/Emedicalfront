

import axios from 'axios'

export function register (data) {

    return axios.post("http://localhost:5000/patients/register" ,data, {credentials : 'include'} )
        .then(res => {
            return res
        }
        )
        .catch(err => {
            return err
        }
        )

}