import { instance } from "./instance";
export const getBoothList = async (
  day,
  category,
  location,
  is_night,
  is_reservable
) => {
  try {
    let params = [];

    // 각 필터가 값이 있을 때만 쿼리 파라미터에 추가
    if (day) params.push(`day=${day}`);
    if (category) params.push(`category=${category}`);
    if (location) params.push(`location=${location}`);
    if (is_night !== undefined) params.push(`is_night=${is_night}`);
    if (is_reservable !== undefined)
      params.push(`is_reservable=${is_reservable}`);

    // 쿼리 파라미터가 있을 경우 URL에 추가
    const queryString = params.length > 0 ? `?${params.join("&")}` : "";

    const res = await instance.get(`/api/v1/booth/${queryString}`);
    console.log("booth.js에서의 res 값", res);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
