// src/api/nasaApi.ts

import axios from 'axios';

const API_KEY = `${process.env.NASA_API_KEY}`;
const BASE_URL = 'https://api.nasa.gov/planetary';

export const getPictureOfTheDay = async () => {
  const response = await axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`);
  return response.data;
};
