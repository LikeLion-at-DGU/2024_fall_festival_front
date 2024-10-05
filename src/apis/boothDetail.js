import { instance } from "./instance";
export const getBoothDetail = async (booth_id) => {
  try {
    const res = await instance.get(`/api/v1/booth/detail/${booth_id}`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
