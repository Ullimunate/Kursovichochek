import * as S from "./Footer.style";
import InstImg from "../Assets/img/InstImg.svg";
import TwitImg from "../Assets/img/twitImg.svg";
import SnapImg from "../Assets/img/SnapImg.svg";
import LogoImg from "../Assets/img/sitesee.svg";
import VkImg from "../Assets/img/vk.svg";

function Footer() {
  return (
    <S.FooterStyle>
      <S.FooterBox>
        <S.Logo src={LogoImg} />
        <S.SocialImg src={VkImg} />
      </S.FooterBox>
      <S.Avtor>Made by React</S.Avtor>
    </S.FooterStyle>
  );
}

export default Footer;
