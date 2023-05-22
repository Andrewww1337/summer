import axios from "axios";

const defaultURL = "https://startup-summer-2023-proxy.onrender.com/2.0/";
const defaultHeaders = {
  "x-secret-key": "GEU4nvd3rej*jeh.eqp",
  "x-api-app-id":
    "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
};
const authParams = {
  login: "sergei.stralenia@gmail.com",
  password: "paralect123",
  client_id: 2356,
  client_secret:
    "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
  hr: 0,
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

    localStorage.setItem(
      "refresh",
      JSON.parse(response.request.response).refresh_token
    );
    localStorage.setItem("ttl", JSON.parse(response.request.response).ttl);

    return true;
  } catch (error) {
    console.log(error.message);
  }
};
export const getNewAccessToken = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${defaultURL}oauth2/refresh_token/`,
      headers: defaultHeaders,
      params: {
        refresh_token: `${localStorage.getItem("refresh")}`,
        client_id: 2356,
        client_secret:
          "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      },
    });

    localStorage.setItem(
      "jwt",
      JSON.parse(response.request.response).access_token
    );

    localStorage.setItem(
      "refresh",
      JSON.parse(response.request.response).refresh_token
    );
    localStorage.setItem("ttl", JSON.parse(response.request.response).ttl);
    return true;
  } catch (error) {
    console.log(error.message);
  }
};

export const getFavorite = async () => {
  if (localStorage.getItem("ttl")) {
    if (Number(localStorage.getItem("ttl")) < Date.now() / 1000) {
      await getNewAccessToken();
    }
  }
  const vacancies = JSON.parse(localStorage.getItem("favorite"));
  try {
    const response = await axios({
      method: "get",
      url: `${defaultURL}vacancies/`,
      headers: defaultHeaders,
      params: { ids: vacancies },
    });

    return response.data.objects;
  } catch (error) {
    console.log(error.message);
  }
};

export const getVacancies = async (params) => {
  if (localStorage.getItem("ttl")) {
    if (Number(localStorage.getItem("ttl")) < Date.now() / 1000) {
      await getNewAccessToken();
    }
  }
  try {
    const { keyword, payment_from, payment_to, catalogues, page } = params;
    const parsedParams = {
      published: 1,
      count: 4,
    };

    if (keyword) {
      parsedParams.keyword = keyword;
    }
    if (payment_from) {
      parsedParams.payment_from = payment_from;
    }
    if (payment_to) {
      parsedParams.payment_to = payment_to;
    }
    if (catalogues) {
      parsedParams.catalogues = catalogues;
    }
    if (payment_to || payment_from) {
      parsedParams.no_agreement = 1;
    }
    if (page) {
      parsedParams.page = page;
    }
    const response = await axios({
      method: "get",
      url: `${defaultURL}vacancies/`,
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      params: parsedParams,
    });

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const getCatalogues = async () => {
  if (localStorage.getItem("ttl")) {
    if (Number(localStorage.getItem("ttl")) < Date.now() / 1000) {
      await getNewAccessToken();
    }
  }
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
    console.log(error.message);
  }
};

export const getVacancy = async (id) => {
  if (localStorage.getItem("ttl")) {
    if (Number(localStorage.getItem("ttl")) < Date.now() / 1000) {
      await getNewAccessToken();
    }
  }
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
    console.log(error.message);
  }
};
