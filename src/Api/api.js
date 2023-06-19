import axios from "axios";


export const bakend_endpoint = "https://qtify-backend-labs.crio.do"

export const fetchTopAlbum = async() => {
    try{
        const res = await axios.get(`${bakend_endpoint}/albums/top`);
        console.log(res.data);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}