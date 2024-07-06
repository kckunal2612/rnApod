import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';

const MAXIMUM_RETRY_COUNT = 2;

enum HttpCodes {
  SUCCESS = 200,
  NOT_FOUND = 404,
}

const getApodUrl = (): string => {
  return Config.API_URL + '?api_key=' + Config.API_TOKEN;
};

const getApodUrlForSpecificDate = (date: string): string => {
  return Config.API_URL + '?api_key=' + Config.API_TOKEN + '&date=' + date;
};

const getApodUrlForDateRange = (startDate: string, endDate: string): string => {
  return (
    Config.API_URL +
    '?api_key=' +
    Config.API_TOKEN +
    '&start_date=' +
    startDate +
    '&end_date=' +
    endDate
  );
};

const setRetryCount = async (count: number) => {
  console.log('setRetryCount(' + count + ')');
  await AsyncStorage.setItem('RETRY_COUNT', count.toString());
};

const getRetryCount = async (): Promise<number | null> => {
  try {
    const tryCountString = await AsyncStorage.getItem('RETRY_COUNT');
    console.log('getRetryCount = ' + tryCountString);
    return Number(tryCountString);
  } catch (error) {
    console.log('getRetryCount = 0');
    return 0;
  }
};

const resetTryCount = async () => {
  await AsyncStorage.setItem('RETRY_COUNT', '0');
  console.log('resetTryCount');
};

export {
  getApodUrl,
  getApodUrlForSpecificDate,
  getApodUrlForDateRange,
  HttpCodes,
  MAXIMUM_RETRY_COUNT,
  setRetryCount,
  resetTryCount,
  getRetryCount,
};
