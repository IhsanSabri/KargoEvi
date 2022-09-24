import axios from "axios";
//import { getLocalStorage } from "config/utils";

const axiosClient = (url, interceptors = true) => {
    console.log('url', url)
  const instance = axios.create({
    baseURL: url,
    timeout: 60000,
  });

  if (interceptors) {
    instance.interceptors.response.use(
      (res) => {
        if (!res) {
          throw new Error("Response is not found");
        }
        return res;
      },
      async (err) => {
        console.log(`[axios][interceptors][response][failure] ${err}`);
        throw err;
      },
    );
  }

  function makeRequest(type, path, options = {}) {
    console.log(`[axios][makeRequest] ${type} ${path}`);
    return new Promise((resolve, reject) => {
      instance(path, {
        method: type,
        headers: {
          Authorization: "public",
        },
        ...options,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response || err);
        });
    });
  }

  async function makeRequestAuth(type, path, options = {}) {
    if (!localStorage.getItem("token")) return console.log("Token not found");

    return makeRequest(type, path, {
      headers: {
        //Authorization: getLocalStorage("token"),
      },
      ...options,
    });
  }

  return {
    instance,
    makeRequest,
    makeRequestAuth,
  };
};

export default axiosClient;
