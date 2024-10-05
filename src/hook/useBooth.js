import { useState, useEffect } from "react";
import { getBoothList } from "../apis/booth";

export const useBoothData = ({
  day,
  category,
  location,
  is_night,
  is_reservable,
}) => {
  const [boothData, setBoothData] = useState(null);

  const fetchBoothData = async () => {
    try {
      if (!day) {
        console.warn("day 값이 없습니다. 기본값을 사용합니다.");
        return; // day 값이 없을 경우 요청을 보내지 않음
      }
      const res = await getBoothList(
        day,
        category,
        location,
        is_night,
        is_reservable
      );
      const resData = res.data;
      setBoothData(resData);
    } catch (error) {
      console.error("API 요청 에러:", error);
    }
  };

  useEffect(() => {
    fetchBoothData();
  }, [day, category, location, is_night, is_reservable]);

  return { boothData };
};
