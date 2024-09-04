import axios from "axios";

const instance = axios.create({
  baseURL: "",
  timeout: 3000,
  headers: "",
});

async function get(url, params) {
  let response = null;
  try {
    const res = await instance.get(url, {
      params,
    });
    response = res;
  } catch (error) {
    response = error;
  }
  return response;
}

async function post(url, data) {
  let response = null;
  try {
    res = await instance({
      method: "post",
      url,
      data,
    });
    response = res;
  } catch (error) {
    response = error;
  }
  return response;
}

export { get, post };
