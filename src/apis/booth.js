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

    if (day !== undefined) params.push(`day=${day}`);
    if (category !== undefined) params.push(`category=${category}`);
    if (location !== undefined) params.push(`location=${location}`);

    // is_night와 is_reservable은 boolean 값으로 처리 (undefined와 null 제외)
    if (is_night !== null && is_night !== undefined)
      params.push(`is_night=${is_night}`);
    if (is_reservable !== null && is_reservable !== undefined)
      params.push(`is_reservable=${is_reservable}`);

    // 쿼리 파라미터가 있을 경우 URL에 추가
    const queryString = params.length > 0 ? `?${params.join("&")}` : "";
    const res = await instance.get(`/api/v1/booth/${queryString}`);

    return res;
  } catch (err) {
    console.error("API 요청 중 오류 발생:", err);
    throw err;
  }
};
