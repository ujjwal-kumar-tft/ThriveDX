import axios from "axios";
import {
  getAdminToken,
  isApiAccessibleWithoutToken,
  isTokenExpired,
} from "../helpers";

const axiosInst = axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL === "development"
      ? process.env.REACT_APP_BASE_URL
      : process.env.REACT_APP_BASE_URL_PROD,
  timeout: 90000,
});
axiosInst.interceptors.request.use(
  (requestConfig) => {
    if (!isApiAccessibleWithoutToken(requestConfig.url)) {
      requestConfig.headers.Authorization = `Bearer ${getAdminToken()}`;
    }
    if (!requestConfig.headers["Content-Type"]) {
      requestConfig.headers["Content-Type"] = "application/json";
    }
    return requestConfig;
  },
  (error) => Promise.reject(error)
);

axiosInst.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return isTokenExpired(error);
  }
);

export const makeMultipleRequests = async (reqParamsArray) => {
  const promiseArray = [];
  for (const reqParams of reqParamsArray) {
    const promise = axiosInst(reqParams);
    promiseArray.push(promise);
  }
  return Promise.all(promiseArray)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
};

const makeAdminRequest = async (
  reqParams,
  { onSuccess, onError, throwErrorOnFailure = true } = {}
) => {
  try {
    const response = await axiosInst(reqParams);
    onSuccess && onSuccess(response);
    return response;
  } catch (error) {
    onError && onError(error.response);
    if (throwErrorOnFailure) {
      throw error;
    }
  }
};

export default makeAdminRequest;
