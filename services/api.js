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

export const getOtp = async (phone) => {
  //const res = await get(`/api/otp?phone=${phone}`);
  const res = { Details: "foo" };
  return res;
};

export const verifyOtp = async (session_id, code) => {
  //const res = await get(`/api/verify?session_id=${session_id}&code=${code}`);
  const res = { Details: "bar" };
  return res;
};

export const getUsers = async () => {
  const res = await get("/api/users");
  return res?.data || [];
};

export const createUser = async (req) => {
  //const res = await post("/api/user", null, req);
  //return { ...user, res };
  return {...req, id : 'cust_1'}
};
