import { instance } from "./instance";
export const getBoothList = async ({
  day,
  category,
  location,
  is_night,
  is_reservable,
}) => {
  try {
    const res = await instance.get(
      `api/v1/booth/?day=${day}&category=${category}&location=${location}&is_night=${is_night}&is_reservable=${is_reservable}`
    );
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
