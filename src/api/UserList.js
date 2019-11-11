import api from "../service/api";
const endPoint = "/users";

export const fetchAllUser = () => api.get(endPoint);
export const fetchOneUser = payload => {
  const { _id } = payload;
  const url = [endPoint, _id].join("/");
  return api.get(url);
};
export const updateUser = payload => {
  const { _id, data } = payload;
  const url = [endPoint, _id].join("/");
  return api.patch(url, data);
};
export const deleteUser = payload => {
  const { _id } = payload;
  const url = [endPoint, _id].join("/");
  return api.delete(url);
};
export const createUser = payload => {
  const { data } = payload;
  return api.post(endPoint, data);
};
