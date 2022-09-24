import axiosClient from "../plugins/axios";
const { makeRequest, makeRequestAuth } = axiosClient(
    process.env.REACT_APP_API_ENDPOINT,
  );

  export class UserService {
    getUser = (params) => makeRequestAuth("get", "/user/all", { params });
    addUser = (data) => makeRequest("post", "/auth/register", { data });
    updateUser = (data) => makeRequestAuth("put", "/user/update", { data });
    deleteUser = (data) => makeRequestAuth("delete", "/user/delete", { data });
  }