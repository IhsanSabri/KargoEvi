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

export const depthItemModified = (curObj, name, keys, value) => {
  let obj = curObj[name];

  for (var i = 0; i < keys.length - 1; i++) {
    obj = obj[keys[i]];
  }
  obj[keys[i]] = value;
};

export const getSessionStorage = (name) =>
  JSON.parse(sessionStorage.getItem(name));
