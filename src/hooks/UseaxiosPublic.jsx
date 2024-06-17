import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-three-eta.vercel.app'
})

const UseaxiosPublic = () => {

    return axiosPublic
};

export default UseaxiosPublic;