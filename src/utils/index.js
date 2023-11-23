import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const getPlayingNow = async () => {
  try {
    const anime = await axios.get(`${baseUrl}/seasons/now`);
    return anime.data.data;
  } catch (error) {
    return error;
  }
};

export const getPopularAnime = async () => {
  try {
    const anime = await axios.get(`${baseUrl}/recommendations/anime`);
    return anime.data.data;
  } catch (error) {
    return error;
  }
};

export const getPopularManga = async () => {
  try {
    const anime = await axios.get(`${baseUrl}/recommendations/manga`);
    return anime.data.data;
  } catch (error) {
    return error;
  }
};

export const getTopRatedAnime = async () => {
  try {
    const anime = await axios.get(`${baseUrl}/top/anime`);
    return anime.data.data;
  } catch (error) {
    return error;
  }
};

export const getTopRatedManga = async () => {
  try {
    const anime = await axios.get(`${baseUrl}/top/manga`);
    return anime.data.data;
  } catch (error) {
    return error;
  }
};
