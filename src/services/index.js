import axiosClient from "../plugins/axios";
const { makeRequest, makeRequestAuth } = axiosClient(
  process.env.REACT_APP_API_ENDPOINT
);

export class AuthService {
  login = (data) => makeRequest("post", "/user/login", { data });
  logout = (data) => makeRequestAuth("post", "/auth/logout", { data }); 
}

export class UserService {
  getSingleUser = (data) => makeRequest("post", "/user/singleuser", { data });
  addUser = (data) => makeRequest("post", "/auth/register", { data });
  addUserAddress = (data) =>
    makeRequest("post", "/user/addUserAdress", { data });
  getUserAddress = (data) => makeRequest("post", "/user/userAdress", { data }); //mock data
  //updateUser = (data) => makeRequestAuth("put", "/user/update", { data });
  //deleteUser = (data) => makeRequestAuth("delete", "/user/delete", { data });
}
