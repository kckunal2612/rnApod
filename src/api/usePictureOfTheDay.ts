// src/hooks/usePictureOfTheDay.ts

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { QueryKeys } from '../constants/queryKeys';
import { PictureOfTheDay } from '../types';

const API_KEY = `${process.env.NASA_API_KEY}`;
const BASE_URL = 'https://api.nasa.gov/planetary';

export const getPictureOfTheDay = async () => {
  const response = await axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`);
  return response.data;
};

export const usePictureOfTheDay = () => {
  return useQuery<PictureOfTheDay, Error>({
    queryKey: [QueryKeys.PICTURE_OF_THE_DAY],
    queryFn: getPictureOfTheDay,
    staleTime: Infinity,
  });
};
