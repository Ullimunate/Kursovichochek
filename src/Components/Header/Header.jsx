import logoImg from "../Assets/img/sitesee.svg";
import React from "react";
import * as S from "./Header.style";
import { useNavigate } from "react-router";

function Header() {
  const Navigate = useNavigate()
  const [visible, setVisible] = React.useState(false);
  return (
    <S.HeaderBox>
      <S.HeaderLogo src={logoImg} />
      <S.HeaderOrgName>ВОС Курганинск</S.HeaderOrgName>
      <S.HeaderMenu>
          <S.MenuItem onClick={()=> Navigate('/')}>Главная</S.MenuItem>
        <S.Contacts>
          <S.MenuItem onClick={() => setVisible(!visible)}>Контакты</S.MenuItem>
          {visible && (
            <S.ContactsDropDown>тел.+7(86147)-2-13-56</S.ContactsDropDown>
          )}
        </S.Contacts>
        <S.MenuItem onClick={()=> Navigate('/news/info')}>Информация</S.MenuItem>
      </S.HeaderMenu>
    </S.HeaderBox>
  );
}

export default Header;
