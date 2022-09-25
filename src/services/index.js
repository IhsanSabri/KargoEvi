import axiosClient from "../plugins/axios";
const { makeRequest, makeRequestAuth } = axiosClient(
    process.env.REACT_APP_API_ENDPOINT,
  );


  export class AuthService {
    login = (data) => makeRequest("post", "/user/login", { data });
  }
  
  export class UserService {
    getSingleUser = (data) => makeRequest("post", "/user/singleuser", { data });
    addUser = (data) => makeRequest("post", "/auth/register", { data });
    addUserAddress = (data) => makeRequest("post", "/user/addUserAdress", { data });
    //updateUser = (data) => makeRequestAuth("put", "/user/update", { data });
    //deleteUser = (data) => makeRequestAuth("delete", "/user/delete", { data });
  }