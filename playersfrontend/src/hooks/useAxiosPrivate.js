// to attach the interceptors

import { axiosPrivate } from "../api/Axios";
import {useEffect} from "react";
import useRefreshoken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    // const refresh =useRefreshoken();
    // const { auth } = useAuth();

    // useEffect(() =>{

    //     const requestIntercept = axiosPrivate.interceptors.request.use(
    //         congig => {
    //             if (!config.headers["Authorization"]){
    //                 config.headers["Authorization"] = `Bearer ${auth?. accessToken}`;
    //             }
    //             return config;
            
    //         },(error) => Promise.reject(error)
    //     );

    //     const responseIntercept = axiosPrivate.interceptors.response.use( response => response,
    //         async(error) =>{
    //             const prevRequest = error?.config;
    //             if (error?.response?.status ===403 && !prevRequest.sent){
    //                 prevRequest.sent =true;
    //                 const newAccessToken = await refresh();
    //                 prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

    //                 return axiosPrivate(prevRequest);
    //             }
    //             return Promise.reject(error);

    //         });
    //         return () =>{
    //             axiosPrivate.interceptors.request.eject(responseIntercept);
    //             axiosPrivate.interceptors.response.eject(responseIntercept);
    //         }
    // },[auth, refresh])
    // return axiosPrivate;
}

export default useAxiosPrivate;