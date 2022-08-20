import React from "react";
import styled from "styled-components";


const Container = styled.div`
padding: 6rem;
`;

const SubContainer = styled.div`
    margin-bottom: 1rem;
`;

const Headline = styled.h2`
line-height: 1;
margin-bottom: 2rem;
color: white;
  
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: white;
`;

const HeadlineSmall = styled.div`
  font-size: 1rem;
  color: white;
  line-height: 1.8;
`;

const TextSmall = styled.div`
  font-size: 0.8rem;
  color: white;
  line-height: 1.4;
`;

const Imprint = () => {
    return(
        <Container>
      <Headline>
        Impressum
      </Headline>
      <Text>
      Die Angaben in diesem Impressum gelten auch für den offiziellen Social-Media-Kanal der BadBoys.
      </Text>
      <SubContainer>
          <HeadlineSmall>Herausgeber:</HeadlineSmall>
          <TextSmall>BadBoys GmbH & Co. KG</TextSmall>
          <TextSmall>Unter den Linden 7</TextSmall>
          <TextSmall>10117 Berlin</TextSmall>
      </SubContainer>
      <SubContainer>
          <HeadlineSmall>Vertretungsberechtigte:</HeadlineSmall>
          <TextSmall>BadBoys Verwaltung GmbH</TextSmall>
          <TextSmall>vertreten durch Nicholas Kuberka, Tobias Haby und Malte Räuchle</TextSmall>
      </SubContainer>
      <SubContainer>
          <HeadlineSmall>Handelsregistergericht:</HeadlineSmall>
          <TextSmall>Amtsgericht Charlottenburg</TextSmall>
      </SubContainer>
      <SubContainer>
          <HeadlineSmall>Vereinsregisternummer:</HeadlineSmall>
          <TextSmall>HRB: 12 345 für die GmbH & Co. KG</TextSmall>
          <TextSmall>HRB: 67 890 für die Verwaltung GmbH</TextSmall>
      </SubContainer>
      <SubContainer>
          <HeadlineSmall>Inhaltlich Verantwortlicher:</HeadlineSmall>
          <TextSmall>Malte Räuchle</TextSmall>
      </SubContainer>
      <br />
      <br />
      <br />
      <SubContainer>
          <HeadlineSmall>Haftungsausschluss:</HeadlineSmall>
          <TextSmall>Haftung für Inhalte: Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</TextSmall>
          <br />
          <TextSmall>Wir übernehmen keine Gewähr für die Aktualität, Korrektheit, Vollständigkeit und Qualität der bereitgestellten Informationen. Jegliche Haftung im Zusammenhang mit der Verwendung von Informationen oder dem Vertrauen auf die Website ist ausgeschlossen.</TextSmall>
          <br />
          <TextSmall>Haftung für Links: Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für deren Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der Anbieter oder Betreiber der externen Links verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</TextSmall>
          <br />
          <TextSmall>Urheberrecht: Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des Urhebers Ersteller. Downloads und Kopien sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</TextSmall>
      </SubContainer>
      </Container>
    );
};

export default Imprint;