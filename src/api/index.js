import axios from "axios";
import {baseUrl,AxiosWithCredentials} from "../config/env.js";

axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = AxiosWithCredentials;

export default axios;
