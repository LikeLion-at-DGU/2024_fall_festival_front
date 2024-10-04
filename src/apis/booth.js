import { instance } from "./instance";
export const getBoothList = async ({
  day,
  category,
  location,
  is_night,
  is_reservable,
}) => {
  try {
    // URLSearchParams 객체 생성
    const params = new URLSearchParams();

    // 파라미터가 존재할 때만 추가
    if (day) params.append("day", day);
    if (category) params.append("category", category);
    if (location) params.append("location", location);
    if (is_night !== undefined) params.append("is_night", is_night);
    if (is_reservable !== undefined)
      params.append("is_reservable", is_reservable);

    // 파라미터들을 포함한 GET 요청
    const res = await instance.get(`api/v1/booth/?${params.toString()}`);
    console.log("booth.js에서의 res 값", res);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
