import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

const apiKey = import.meta.env.VITE_API_KEY;

export const getData = async (resource) => {
  try {
    const movie = await axios.get(`${baseUrl}${resource}?api_key=${apiKey}`);
    return movie;
  } catch (error) {
    return error;
  }
};
