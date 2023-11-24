import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const getData = async (resource, query) => {
  try {
    const anime = await axios.get(`${baseUrl}${resource}?${query}`);
    return anime.data.data;
    // console.log(anime.data.data);
  } catch (error) {
    return error;
  }
};
