// src/hooks/useMain.js
import { useState, useEffect } from "react";
import { getBoothDetail } from "../apis/boothDetail";
import { useParams } from "react-router-dom";

export const useBoothDetailData = () => {
  const [boothDetailData, setBoothDetailData] = useState(null);
  const { booth_id } = useParams();
  const fetchBoothDetailData = async () => {
    try {
      const res = await getBoothDetail(booth_id);
      console.log("response:", res);
      const resData = res.data;
      console.log("resData:", resData);
      setBoothDetailData(resData);
    } catch (error) {
      // console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchBoothDetailData();
  }, []);

  return { boothDetailData };
};
