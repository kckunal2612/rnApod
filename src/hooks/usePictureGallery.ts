import axios from 'axios';
import { QueryKeys } from '../constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://api.nasa.gov/planetary';
const API_KEY = process.env.NASA_API_KEY;

export const fetchGallery = async () => {
  const response = await axios.get(`${API_URL}/apod`, {
    params: {
      api_key: API_KEY,
      count: 10, // Fetch 10 random images for the gallery
    },
  });
  return response.data;
};

export const useGalleryQuery = () => {
  return useQuery({
    queryKey: [QueryKeys.GALLERY],
    queryFn: fetchGallery,
    staleTime: Infinity,
  });
};
