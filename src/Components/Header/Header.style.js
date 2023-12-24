import styled from "styled-components";

export const HeaderMenu = styled.div`
  padding-top: 40px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const HeaderLogo = styled.img`
  width: 120px;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  color: #161513;
  text-align: center;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const ContactsDropDown = styled.div`
  cursor: pointer;
  border: 1px solid #161513;
  margin-top: 30px;
  width: 170px;
  height: 30px;
  position: absolute;
  color: #161513;
  text-align: center;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderBox = styled.div`
  padding-left: 70px;
  padding-right: 70px;
  display: flex;
  flex-direction: row;
  gap: 170px;
  background-color: #f0ede6;
`;

export const HeaderOrgName = styled.div`
  padding-top: 20px;
  color: #161513;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px; /* 114.286% */
  letter-spacing: 0.56px;
`;
