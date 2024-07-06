import {HttpCodes} from '../utils/networking';

export const fetchApi = async (url: string, options: any) => {
  try {
    console.log(url);
    const res = await fetch(url, options);
    const json = await res.json();
    if (res.status === HttpCodes.SUCCESS) {
      return {response: json};
    } else {
      return {error: json};
    }
  } catch (err) {
    return {error: err};
  }
};
