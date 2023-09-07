import { axiosInstance } from "../sdk";
import { getToken } from "./helper";

export const apiLogin = (data) =>
  axiosInstance
    .post("api/web-authenticate", {
      username: data.username,
      password: data.password,
    })
    .then((res) => res.data);

export const apiGetMe = () =>
  axiosInstance
    .get("api/me", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((res) => res.data.user);

export const apiLogout = () =>
  axiosInstance
    .post(
      "api/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )
    .then((res) => res.data);

export const apiGetSpecies = (filter) =>
  axiosInstance
    .get(`api/species?${filter}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
    .then((res) => res.data);

export const apiGetSix = (params) =>
  axiosInstance
    .get(`api/phanloaihoc?ranks[]=${params}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
    .then((res) => res.data);
export const apiAddSpecies = (postData) =>
  axiosInstance
    .post(`api/species`, postData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
    .then((res) => res.data);

export const apiDelete = (id) =>
  axiosInstance
    .delete(`api/species/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
    .then((res) => res.data);
