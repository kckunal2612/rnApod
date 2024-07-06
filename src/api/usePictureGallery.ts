import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QueryKeys } from '../constants/queryKeys';
import { calculateDateRange } from '../utils/dateUtils';
import { PictureOfTheDay } from '../types';

// Helper function to fetch APOD images
const fetchAPODImages = async ({ pageParam = '' }) => {
  const API_KEY = process.env.NASA_API_KEY;
  const { startDateStr, endDateStr, nextPageParam } =
    calculateDateRange(pageParam);

  const requestUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDateStr}&end_date=${endDateStr}`;

  // Fetch data from NASA APOD API
  const response = await axios.get(requestUrl);

  const data: PictureOfTheDay[] = response?.data;
  const reversedList = data?.reverse();

  return {
    data: reversedList,
    nextPageParam,
  };
};

// Custom hook to use the infinite query
const usePictureGallery = () => {
  return useInfiniteQuery({
    queryKey: [QueryKeys.GALLERY],
    queryFn: fetchAPODImages,
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextPageParam,
    staleTime: Infinity,
  });
};

export { usePictureGallery };
