import axios from "axios";

export const BASE_URL='https://youtube.googleapis.com/youtube/v3';
export const API_KEY='AIzaSyBlXr_gNXx77PcIdM-21e46xC76W-0gNSk'

export const fetchFromApi = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}&maxResults=50&key=${API_KEY}`);
  return data;
}