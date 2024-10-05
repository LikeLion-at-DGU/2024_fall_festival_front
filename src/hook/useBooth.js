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
