import axios from "axios";

const instance = axios.create({
    baseURL: "https://newsapp-95ffc.firebaseio.com/",
    responseType: "json"
});

export default instance;