import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { QueryKeys } from '../constants/queryKeys';
import { PictureOfTheDay } from '../types';

// Helper function to fetch 10 random APOD images
const fetchRandomImages = async (): Promise<PictureOfTheDay[]> => {
  const API_KEY = process.env.NASA_API_KEY;

  const requestUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=16`;

  const response = await axios.get(requestUrl);

  return response?.data;
};

const useRandomGallery = () => {
  return useQuery({
    queryKey: [QueryKeys.RANDOM],
    queryFn: fetchRandomImages,
    staleTime: Infinity,
  });
};

export { useRandomGallery };
