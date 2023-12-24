import * as S from "./infoCard.style";
function InfoCard() {
  return (
    <>
      <S.InfoBlock>
        <S.LeaderСard>
          <S.LeaderName>Емельянов Игорь Николаевич</S.LeaderName>
          <S.LeaderPosition>Председатель ВОС Курганинска</S.LeaderPosition>

          <S.LeaderPhone>тел. 8(918)-351-01-14</S.LeaderPhone>
        </S.LeaderСard>
        <S.LeaderСard>
          <S.LeaderName>Куриленко Наталья Павловна</S.LeaderName>
          <S.LeaderPhone>тел. 8(918)-254-83-17</S.LeaderPhone>
        </S.LeaderСard>
      </S.InfoBlock>
      <span className="ymaps-geolink">
        <S.OrgAdress>
          улица Энгельса, 404, Курганинск, Краснодарский край
        </S.OrgAdress>
      </span>
    </>
  );
}

export default InfoCard;
