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
    console.log("fetchBoothData 호출됨");
    try {
      const res = await getBoothList(
        day,
        category,
        location,
        is_night,
        is_reservable
      );
      const resData = res.data;
      console.log("resData:", resData);
      setBoothData(resData);
    } catch (error) {
      console.error("API 요청 에러:", error);
    }
  };

  useEffect(() => {
    if (day) {
      // day가 있을 때만 API 호출
      fetchBoothData();
    }
  }, [day, category, location, is_night, is_reservable]);

  return { boothData };
};
