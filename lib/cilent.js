import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "yutoblog",
  apiKey: process.env.API_KEY,
});
