import axios from "axios";
import { rapidApiKey } from "../constants";

const baseURL = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
  let data = await apiCall(baseURL + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
