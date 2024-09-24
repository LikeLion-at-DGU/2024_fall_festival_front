//시간대별로 id매겨서 같은시간대에 하는공연은 한 슬라이드에 띄워야됨

const timeTableData = [
  {
    id: 1,
    type: "동아리",
    startTime: "12:30",
    endTime: "13:00",
    name: "백상응원단",
    location: "대운동장",
    starImg:
      "https://cdn2.smentertainment.com/wp-content/uploads/2024/08/%EC%97%90%EC%8A%A4%ED%8C%8C-%EC%B2%AB-%EC%A0%95%EA%B7%9C-Armageddon-%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
  },
  {
    id: 2,
    type: "동아리",
    startTime: "12:30",
    endTime: "13:00",
    name: "뭉게구름",
    location: "팔정도",
    starImg: null,
  },
  {
    id: 3,
    type: "동아리",
    startTime: "13:00",
    endTime: "14:00",
    name: "한소리",
    location: "팔정도",
    starImg:
      "https://cdn2.smentertainment.com/wp-content/uploads/2024/08/%EC%97%90%EC%8A%A4%ED%8C%8C-%EC%B2%AB-%EC%A0%95%EA%B7%9C-Armageddon-%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
  },
  {
    id: 4,
    type: "동아리",
    startTime: "13:00",
    endTime: "14:00",
    name: "동아리4",
    location: "대운동장",
    starImg:
      "https://cdn2.smentertainment.com/wp-content/uploads/2024/08/%EC%97%90%EC%8A%A4%ED%8C%8C-%EC%B2%AB-%EC%A0%95%EA%B7%9C-Armageddon-%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
  },
  {
    id: 8,
    type: "동아리",
    startTime: "16:00",
    endTime: "17:00",
    name: "동아리5",
    location: "팔정도",
    starImg:
      "https://cdn2.smentertainment.com/wp-content/uploads/2024/08/%EC%97%90%EC%8A%A4%ED%8C%8C-%EC%B2%AB-%EC%A0%95%EA%B7%9C-Armageddon-%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
  },
  {
    id: 5,
    type: "연예인",
    startTime: "19:00",
    endTime: null,
    name: "에스파",
    location: "대운동장",
    starImg:
      "https://cdn2.smentertainment.com/wp-content/uploads/2024/08/%EC%97%90%EC%8A%A4%ED%8C%8C-%EC%B2%AB-%EC%A0%95%EA%B7%9C-Armageddon-%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
  },
  {
    id: 6,
    type: "연예인",
    startTime: "19:00",
    endTime: null,
    name: "아이브",
    location: "대운동장",
    starImg:
      "https://ojsfile.ohmynews.com/STD_IMG_FILE/2024/0503/IE003295647_STD.jpg",
  },
  {
    id: 7,
    type: "연예인",
    startTime: "19:00",
    endTime: null,
    name: "에미넴",
    location: "대운동장",
    starImg:
      "https://cdn.eyesmag.com/content/uploads/posts/2024/07/24/452595277_1445898132790193_1405880405851642120_n-17c26782-2c45-4c03-bb24-49693fffdf04.jpg",
  },
];
export { timeTableData };
