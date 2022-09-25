import { notification } from "antd";

export const calculatePrice = (size) => {
  let factor = 5;
  const { weight = 0, length = 0, width = 0, height = 0 } = size;
  const volume = length * width * height;

  return factor * weight * volume;
};

export const setNotificationMessage = ({ type, ...rest }) => {
  notification[type]({
    duration: 3,
    ...rest,
  });
};
