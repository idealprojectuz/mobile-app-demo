import axios from "axios";
const baseURL = process.env.EXPO_PUBLIC_BASE_URL;
// console.log(process.env.EXPO_PUBLIC_CONSUMER_KEY);
export const request = axios.create({
  baseURL: `${baseURL}/wp-json/wc/v3`,
  auth: {
    username: process.env.EXPO_PUBLIC_CONSUMER_KEY as string,
    password: process.env.EXPO_PUBLIC_CONSUMER_SECRET as string,
  },
});
