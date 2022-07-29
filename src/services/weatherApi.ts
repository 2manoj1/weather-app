import axios from "axios";
import { ACCESS_KEY } from "@env";
const BASE_URL = "http://api.weatherstack.com/current";

const weatherApi = async (cityCapital: string) => {
  return axios.get(BASE_URL, {
    params: {
      access_key: ACCESS_KEY,
      query: cityCapital,
    },
  });
};

export default weatherApi;
