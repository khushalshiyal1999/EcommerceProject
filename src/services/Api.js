import axios from 'axios';

const Api = (url) => {
  const postData = async (data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const getData = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return { postData,getData };
};

export default Api;
