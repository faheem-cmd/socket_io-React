import axios from "axios";

export const baseUrl = " https://aa58-115-246-244-26.in.ngrok.io/";
// export const baseUrl = 'http://192.168.10.199:8000/api/';

export const loginCall = (email, password) => {
  const URL = baseUrl + "ad_login";
  return axios(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    data: {
      email: email,
      password: password,
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const logout = (token) => {
  console.log(token);
  // const URL = baseUrl + "adminLogout";
  return axios(`https://c75f-115-246-244-26.in.ngrok.io/adminLogout/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const users = () => {
  const URL = baseUrl + `users`;
  return axios(URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
