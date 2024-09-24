import * as S from "./styled";
import 강근우 from "../../../assets/images/강근우.jpg"; 
import 김민기 from "../../../assets/images/김민기.jpg"; 
import 김지우 from "../../../assets/images/김지우.png"; 
import 김지현 from "../../../assets/images/김지현.jpg"; 
import 김진우 from "../../../assets/images/김진우.jpg"; 
import 박서현 from "../../../assets/images/박서현.jpg"; 
import 박선우 from "../../../assets/images/박선우.jpg"; 
import 박세라 from "../../../assets/images/박세라.jpg"; 
import 박세호 from "../../../assets/images/박세호.jpg"; 
import 박채현 from "../../../assets/images/박채현.jpg"; 
import 오태준 from "../../../assets/images/오태준.png"; 
import 이동건 from "../../../assets/images/이동건.jpg"; 
import 임수빈 from "../../../assets/images/임수빈.jpg"; 
import 임현우 from "../../../assets/images/임현우.jpg"; 
import 전효준 from "../../../assets/images/전효준.jpg"; 
import 정지윤 from "../../../assets/images/정지윤.jpg"; 
import 조성현 from "../../../assets/images/조성현.jpg"; 
import 최민 from "../../../assets/images/최민.jpg"; 
import 하채민 from "../../../assets/images/하채민.jpg"; 
import 한지은 from "../../../assets/images/한지은.jpg";
import 황채현 from "../../../assets/images/황채현.jpg";  

const developers = [
  {
    photo: 김민기,
    name: "김민기",
    department: "컴퓨터공학과",
    role: "총괄"
  },
  {
    photo: 박세라,
    name: "박세라",
    department: "광고홍보학과",
    role: "PD 팀장"
  },
  {
    photo: 박세호,
    name: "박세호",
    department: "정보통신공학과",
    role: "FE 팀장"
  },
  {
    photo: 임수빈,
    name: "임수빈",
    department: "화공생물공학과",
    role: "BE 팀장"
  },
  {
    photo: 오태준,
    name: "오태준",
    department: "정보통신공학과",
    role: "대외협력 팀장"
  },
  {
    photo: 김지현,
    name: "김지현",
    department: "경제학과",
    role: "PD 팀원"
  },
  {
    photo: 조성현,
    name: "조성현",
    department: "경영정보학과",
    role: "PD 팀원"
  },
  {
    photo: 최민,
    name: "최민",
    department: "경영정보학과",
    role: "PD 팀원"
  },
  {
    photo: 강근우,
    name: "강근우",
    department: "컴퓨터공학과",
    role: "FE 팀원"
  },
  {
    photo: 오태준,
    name: "오태준",
    department: "정보통신공학과",
    role: "FE 팀원"
  },
  {
    photo: 이동건,
    name: "이동건",
    department: "컴퓨터공학과",
    role: "FE 팀원"
  },
  {
    photo: 전효준,
    name: "전효준",
    department: "산업시스템공학과",
    role: "FE 팀원"
  },
  {
    photo: 최민,
    name: "최민",
    department: "경영정보학과",
    role: "FE 팀원"
  },
  {
    photo: 하채민,
    name: "하채민",
    department: "전자전기공학부",
    role: "FE 팀원"
  },
  {
    photo: 김진우,
    name: "김진우",
    department: "산업시스템공학과",
    role: "BE 팀원"
  },
  {
    photo: 김지우,
    name: "김지우",
    department: "컴퓨터공학과",
    role: "BE 팀원"
  },
  {
    photo: 박서현,
    name: "박서현",
    department: "경영정보학과",
    role: "BE 팀원"
  },
  {
    photo: 박선우,
    name: "박선우",
    department: "컴퓨터공학과",
    role: "BE 팀원"
  },
  {
    photo: 박채현,
    name: "박채현",
    department: "컴퓨터공학과",
    role: "BE 팀원"
  },
  {
    photo: 임현우,
    name: "임현우",
    department: "정보통신공학과",
    role: "BE 팀원"
  },
  {
    photo: 정지윤,
    name: "정지윤",
    department: "멀티미디어공학과",
    role: "BE 팀원"
  },
  {
    photo: 한지은,
    name: "한지은",
    department: "통계학과",
    role: "BE 팀원"
  },
  {
    photo: 황채현,
    name: "황채현",
    department: "전자전기공학부",
    role: "BE 팀원"
  },
  {
    photo: 임현우,
    name: "임현우",
    department: "정보통신공학과",
    role: "대외협력 팀원"
  },
  {
    photo: 조성현,
    name: "조성현",
    department: "경영정보학과",
    role: "대외협력 팀원"
  },
];

const teamMembers = {
  총괄: [developers[0]],
  PD: developers.filter(dev => dev.role.includes("PD 팀원")),
  FE: developers.filter(dev => dev.role.includes("FE 팀원")),
  BE: developers.filter(dev => dev.role.includes("BE 팀원")),
  대외협력: developers.filter(dev => dev.role.includes("대외협력 팀원")),
  팀장: developers.filter(dev => dev.role.includes("팀장")),
};

export const AboutCard = () => {
  return (
    <S.Container>
      <S.Intro><S.IntroLine/>Team Lead</S.Intro>
      {teamMembers.총괄.map((dev, index) => (
        <S.Card key={index} style={{ margin: '0 auto', width: '120px' }}>
          <S.Photo src={dev.photo} alt={dev.name} />
          <S.Name>{dev.name}</S.Name>
          <S.Department>{dev.department}</S.Department>
          <S.Role role={dev.role}>
            <S.Shape role={dev.role} />
            {dev.role}
          </S.Role>
        </S.Card>
      ))}

      {teamMembers.팀장.length > 0 && (
        <div style={{ display: 'flex', width:'70%',flexWrap: 'wrap', gap:'12px', justifyContent: 'center', padding:'0px 2px', margin:'20px'}}>
          {teamMembers.팀장.map((dev, index) => (
            <S.Card key={index} style={{ flex: '0 1 120px' }}>
              <S.Photo src={dev.photo} alt={dev.name} />
              <S.Name>{dev.name}</S.Name>
              <S.Department>{dev.department}</S.Department>
              <S.Role role={dev.role}>
                <S.Shape role={dev.role} />
                {dev.role}
              </S.Role>
            </S.Card>
          ))}
        </div>
      )}

      {teamMembers.PD.length > 0 && (
        <>
        <S.Intro><S.IntroLine/>PD Team Member</S.Intro>
          <div style={{ display: 'flex', width:'70%',flexWrap: 'wrap', gap:'12px', justifyContent: 'center', padding:'0px 2px', margin:'20px'}}>
          {teamMembers.PD.map((dev, index) => (
            <S.Card key={index}>
              <S.Photo src={dev.photo} alt={dev.name} />
              <S.Name>{dev.name}</S.Name>
              <S.Department>{dev.department}</S.Department>
              <S.Role role={dev.role}>
                <S.Shape role={dev.role} />
                {dev.role}
              </S.Role>
            </S.Card>
          ))}
          </div>
        </>
      )}  


      {teamMembers.FE.length > 0 && (
        <>
        <S.Intro><S.IntroLine/>FE Team Member</S.Intro>
          <div style={{ display: 'flex', width:'70%',flexWrap: 'wrap', gap:'12px', justifyContent: 'center', padding:'0px 2px', margin:'20px'}}>
          {teamMembers.FE.map((dev, index) => (
            <S.Card key={index}>
              <S.Photo src={dev.photo} alt={dev.name} />
              <S.Name>{dev.name}</S.Name>
              <S.Department>{dev.department}</S.Department>
              <S.Role role={dev.role}>
                <S.Shape role={dev.role} />
                {dev.role}
              </S.Role>
            </S.Card>
          ))}
          </div>
        </>
      )}

      {teamMembers.BE.length > 0 && (
        <>
        <S.Intro><S.IntroLine/>BE Team Member</S.Intro>
          <div style={{ display: 'flex', width:'70%',flexWrap: 'wrap', gap:'12px', justifyContent: 'center', padding:'0px 2px', margin:'20px'}}>
          {teamMembers.BE.map((dev, index) => (
            <S.Card key={index}>
              <S.Photo src={dev.photo} alt={dev.name} />
              <S.Name>{dev.name}</S.Name>
              <S.Department>{dev.department}</S.Department>
              <S.Role role={dev.role}>
                <S.Shape role={dev.role} />
                {dev.role}
              </S.Role>
            </S.Card>
          ))}
          </div>
        </>
      )}

      {teamMembers.대외협력.length > 0 && (
        <>
          <S.Intro><S.IntroLine/>External Relations Team Member</S.Intro>
          <div style={{ display: 'flex', width:'72%',flexWrap: 'wrap', gap:'12px', justifyContent: 'center', padding:'0px 2px'}}>
          {teamMembers.대외협력.map((dev, index) => (
            <S.Card key={index}>
              <S.Photo src={dev.photo} alt={dev.name} />
              <S.Name>{dev.name}</S.Name>
              <S.Department>{dev.department}</S.Department>
              <S.Role role={dev.role}>
                <S.Shape role={dev.role} />
                {dev.role}
              </S.Role>
            </S.Card>
          ))}
          </div>
        </>
      )}
    </S.Container>
  );
};