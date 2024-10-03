// src/hooks/useMain.js
import { useState, useEffect } from "react";
import { getBoothList } from "../apis/booth";
import { useParams } from "react-router-dom";

export const useBoothData = () => {
  const [boothData, setBoothData] = useState(null);
  const { day, category, location, is_night, is_reservable } = useParams();
  const fetchBoothData = async () => {
    try {
      const res = await getBoothList(
        day,
        category,
        location,
        is_night,
        is_reservable
      );
      console.log("response:", res);
      const resData = res.data;
      console.log("resData:", resData);
      setBoothData(resData);
    } catch (error) {
      // console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchBoothData();
  }, []);

  return { boothData };
};
