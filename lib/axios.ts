import axios, { AxiosError} from "axios";

axios.interceptors.response.use( (response:  any) =>  {
    return response;
},  (error: AxiosError) =>  {    
    return Promise.reject(error);
});

export default axios