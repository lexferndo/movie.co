import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const getRecommendationsAnime = async () => {
  try {
    const anime = await axios.get(`${baseUrl}/recommendations/anime`);
    return anime.data.data;
  } catch (error) {
    return error;
  }
};
