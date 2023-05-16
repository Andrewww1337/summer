import axios from "axios";

const defaultURL = "https://startup-summer-2023-proxy.onrender.com/2.0/";
const defaultHeaders = {
  "x-secret-key": "GEU4nvd3rej*jeh.eqp",
  "x-api-app-id":
    "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
};
const a = 12;
const authParams = {
  login: "sergei.stralenia@gmail.com",
  password: "paralect123",
  client_id: 2356,
  client_secret:
    "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
  hr: 0,
};

export const getCatalogues = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${defaultURL}catalogues/`,
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getToken = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${defaultURL}oauth2/password/`,
      headers: defaultHeaders,
      params: authParams,
    });
    localStorage.setItem(
      "jwt",
      JSON.parse(response.request.response).access_token
    );
    console.log(JSON.parse(response.request.response).access_token);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getVacancies = async (params) => {
  try {
    const searchParams = {
      published: 1,
      keyword: params.keyword,
      payment_from: params.payment_from,
      payment_to: params.payment_to,
      catalogues: params.catalogues,
      count: 4,
      page: params.page,
      no_agreement: params.payment_from || params.payment_to ? 1 : 0,
    };
    const response = await axios({
      method: "get",
      url: `${defaultURL}vacancies/`,
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      params: searchParams,
    });
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getVacancy = async (id) => {
  try {
    const response = await axios({
      method: "get",
      url: `${defaultURL}vacancies/${id}/`,
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.message;
  }
};
