// src/hooks/useMain.js
import { useState, useEffect } from "react";
import { getBoothDetail } from "../apis/boothDetail";

export const useBoothDetailData = (booth_id) => {
  const [boothDetailData, setBoothDetailData] = useState(null);
  const fetchBoothDetailData = async () => {
    try {
      const res = await getBoothDetail(booth_id);
      const resData = res.data;
      setBoothDetailData(resData);
    } catch (error) {
      // console.error("error:", error);
    }
  };

  useEffect(() => {
    if (booth_id) {
      fetchBoothDetailData();
    }
  }, [booth_id]);

  return { boothDetailData };
};
