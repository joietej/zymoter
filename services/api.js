import { get } from "./core";

export const fetchAll = async (provider, page) => {
  const { host, key } = provider;
  const res = await get(`${host}/${page}`, key);
  return res?.data || [];
};

export const fetchByQuery = async (provider, page, query) => {
  const { host, key } = provider;
  const res = await get(`${host}/${page}?${query}`, key);
  return res?.data || [];
};

export const getOrCreate = async (provider, page) => {
  const { host, key } = provider;
  const res = await get(`${host}/${page}`, key);
  return res;
};
