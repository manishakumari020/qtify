import axios from "axios";


export const bakend_endpoint = "https://qtify-backend-labs.crio.do";

export const getId = () => {
    var id = Math.random().toString(36).substring(3,9)
    return id;
}

export const fetchTopAlbum = async() => {
    try{
        const res = await axios.get(`${bakend_endpoint}/albums/top`);
        //console.log(res.data);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}

export const newAlbum = async() => {
    try{
        const res = await axios.get(`${bakend_endpoint}/albums/new`)
        console.log(res.data);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}


export const songs = async() => {
    try{
        const res = await axios.get(`${bakend_endpoint}/songs`)
        console.log(res.data);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}

export const faqData = async() => {
    try{
        const faqData = await axios.get(`${bakend_endpoint}/faq`)
        return faqData.data;
    }
    catch(err){
        console.log(err);
    }
}