import axios from 'axios';

/**
 * Get the personal data using api
 * @returns personal data
 */
export const fetchData = async () => {
  const response = await axios.get('https://swapi.dev/api/people');
  return response.data;
};