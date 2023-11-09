import { BASE_URL_API } from '@/utils/constant';
import qs from 'querystring';

export const fetcher = async (path, params) => {
  const query = params ? '?' + qs.stringify(params) : '';
  console.log('query', query);

  const fullUrl = [BASE_URL_API, path, query].join('');
  console.log('full url', fullUrl);
  return await fetch(fullUrl).then((res) => res.json());
};
