import axios from "axios";

const API_DOMAIN = "http://localhost:3002/";

export const get = async (path) => {
  const response = await axios.get(API_DOMAIN + path);
  const result = response.data;
  return result;
};

export const post = async (path, options) => {
  const response = await axios.post(API_DOMAIN + path, options);
  const result = await response.data;
  return result;
};

export const del = async (path) => {
  const response = await axios.delete(API_DOMAIN + path, {
  });
  const result = await response.data;
  return result;
};

export const path = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};
