import IMAGE1 from "../../src/assets/img/park1.png";
import IMAGE2 from "../../src/assets/img/park2.jpeg";
import IMAGE3 from "../../src/assets/img/park3.jpeg";
import IMAGE4 from "../../src/assets/img/park4.png";

const BoothData = [
  {
    id: 1,
    boothName: "부스 A",
    likes: "10",
    description: "맛있는 음식을 제공합니다.",
    owner: "푸드트럭 협회",
    operationTime: "10/7(월), 12:00 ~ 18:00",
    entranceFee: "무료",
    menu: "핫도그, 버거",
    image: IMAGE1,
    instagram: "https://instagram.com/booth_a",
    latitude: 37.5585, // 동국대학교 만해광장
    longitude: 127.0027,
    filters: {
      time: "낮",
      type: "주점",
      location: "팔정도"
    }
  },
  {
    id: 2,
    boothName: "부스 B",
    likes: "12",
    description: "다양한 음료를 판매합니다.",
    owner: "주점 협회",
    operationTime: "10/8(화), 18:00 ~ 22:00",
    entranceFee: "5000원",
    menu: "칵테일, 맥주",
    image: IMAGE2,
    instagram: "https://instagram.com/booth_b",
    latitude: 37.5591, // 동국대학교 팔정도
    longitude: 127.0016,
    filters: {
      time: "밤",
      type: "주점",
      location: "만해광장"
    }
  },
  {
    id: 3,
    boothName: "부스 C",
    likes: "15",
    description: "아이들이 즐길 수 있는 놀이 공간입니다.",
    owner: "박영신",
    operationTime: "10/7(월), 12:00 ~ 18:00",
    entranceFee: "2000원",
    menu: "스낵, 음료",
    image: IMAGE3,
    instagram: "https://instagram.com/booth_c",
    latitude: 37.5581, // 동국대학교 명진관
    longitude: 127.0021,
    filters: {
      time: "낮",
      type: "기타",
      location: "팔정도"
    }
  },
  {
    id: 4,
    boothName: "부스 D",
    likes: "20",
    description: "재미있는 게임을 즐길 수 있는 공간입니다.",
    owner: "오태준태오",
    operationTime: "10/8(화), 18:00 ~ 22:00",
    entranceFee: "3000원",
    menu: "피자, 음료",
    image: IMAGE4,
    instagram: "https://instagram.com/booth_d",
    latitude: 37.5589, // 동국대학교 혜화관
    longitude: 127.0005,
    filters: {
      time: "밤",
      type: "기타",
      location: "만해광장"
    }
  }
];

export default BoothData;
