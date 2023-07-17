
import  { get, post } from "./axiosClient";

export async function loginUser(data) {
    try {
      const response = await post('/auth/login',data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export async function getUsersData() {
    try {
      const response = await get('/users');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }