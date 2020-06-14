import axios from "axios";

const dataBaseURL = axios.create({
    baseURL: "https://newsapp-95ffc.firebaseio.com/",
    responseType: "json"
});

export default dataBaseURL;