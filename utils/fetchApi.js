import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'c0ac3ca1b2msh7d3af0ff6c9313cp17067bjsne10c53630e08'
    },
  });
    
  return data;
}