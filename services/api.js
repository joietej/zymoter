import { get, post } from "./core";

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
  const res = await get(`/api/otp?phone=${phone}`);
  return res;
};

export const verifyOtp = async (session_id, code) => {
  const res = await get(`/api/verify?session_id=${session_id}&code=${code}`);
  return res;
};

export const getUsers = async () => {
  const res = await get("/api/users");
  return res.data || [];
};

export const createUser = async (user) => {
  const res = await post("/api/user", null, {
    email: user.email,
    external_id: user.phone,
    firstame: user.firstName,
    lastname: user.lastName,
  });
  return { ...user, res };
};
