import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthService, UserService } from "../../services";
import { modifiedData } from "../../store/DeliveryDetail";
import { setNotificationMessage } from "../utils";

const authService = new AuthService();
const userService = new UserService();

export default function useSignInProcess(closeModal, nextPageLink) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (username, password) => {
    authService
      .login({
        email: username,
        password,
      })
      .then(async (res) => {
        if (res.success) {
          dispatch(modifiedData({ name: "token", data: res.access_token }));

          await getUserId(username);
        }
      })
      .catch((err) => {
        setNotificationMessage({
          type: "error",
          message: "Please check you credentials",
        });
      });
  };

  const getUserId = (username) => {
    userService
      .getSingleUser({
        email: username,
      })
      .then((res) => {
        if (res.success) {
          const {
            data: { _id, name },
          } = res;

          const userInfo = { userId: _id, name };

          dispatch(modifiedData({ name: "userInfo", data: userInfo }));

          setNotificationMessage({
            type: "success",
            message: "Logged in successfully",
          });

          setTimeout(() => {
            closeModal();

            nextPageLink.includes("address") && navigate(nextPageLink);
          }, 500);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return {
    login,
  };
}
