import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "Yutoblog",
  apiKey: process.env.API_KEY,
});
