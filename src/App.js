import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import ReactDOM from "react-dom";

import "./App.css";

import ContactOutreachCard from "./components/ContactOutreachCard";
import ContactSelectionCard from "./components/ContactSelectionCard";
import ContactCardContainer from "./components/ContactCardContainer";
import DownArrow from "./components/DownArrow";
import ListItem from "./components/ListItem";
import StickyContainer from "./components/StickyContainer";
import { contacts } from "./contacts";

const relaxedSubheadingWeight = 200;

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3 style={{ fontWeight: "900" }}>Viktigt!</h3>
        <h3>
          {"\n"}Vi ber er att inte dela Folkbrev i sociala medier eller andra
          offentliga forum. Använd i första hand mail/sms och dela bara med
          personer du känner.
          {"\n\n"}
        </h3>
        <button onClick={onClose} className="button">
          ACCEPTERA
        </button>
      </div>
    </div>,
    document.body
  );
}

function App() {
  const [acceptedNotice, setAcceptedNotice] = useState(false);

  const onClick = () => {
    setAcceptedNotice(true);
  };

  return (
    <div className="app">
      {!acceptedNotice && <Modal onClose={onClick} />}
      <StickyContainer>
        <h1>FOLKBREV</h1>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
          }}
        >
          <i>
            <span style={{ fontWeight: relaxedSubheadingWeight }}>för </span>
            <span className="gaza">GAZA</span>
            <span style={{ fontWeight: relaxedSubheadingWeight }}>{` & `}</span>
            <span className="libanon">LIBANON</span>
          </i>
        </h2>
        <DownArrow />
      </StickyContainer>
      <StickyContainer>
        <h2>
          Det krävs att vi blir många för att det här ska fungera. Förmodligen
          jättemånga. Så tack för att du är här.&nbsp;
          <span
            role="img"
            aria-label="dove"
            style={{ marginLeft: "8px", position: "relative", top: "16px" }}
          >
            🕊️
          </span>
        </h2>
      </StickyContainer>
      <StickyContainer>
        <h2>
          Det här är en möjlighet att konkret engagera dig i kampen för att få
          stopp på Israels brutala krigföring och folkmord. Med sociala medier
          kommer man inte särskilt långt, men med hjälp av ai och några minuter
          av din tid kan du vara med och göra skillnad på riktigt.
        </h2>
      </StickyContainer>
      <StickyContainer>
        <h2>Vad är ett Folkbrev?</h2>
        <h3>
          {"\n"}Det är ett supersnabbt och enkelt sätt att skapa och skicka
          riktade mail till utvalda beslutsfattare och opinionsbildare. Ett
          ai-verktyg tar fram och personanpassar innehållet, vilket gör det
          möjligt att få ut mail i stor skala, utan att dom fastnar i spamfilter
          eller uppfattas som massutskick.
        </h3>
      </StickyContainer>
      <StickyContainer>
        <h2>Hur funkar det?</h2>
        <h3>
          {"\n"}Läs igenom instruktionerna innan du går vidare.{"\n"}
          {"\n"}
        </h3>
        <div>
          <ListItem number={1}>
            [Välj mottagare]: Gå till nästa sida och välj vem du vill skicka
            ett Folkbrev till. Du kan göra det genom att klicka på personens
            mailadress, så öppnas ett nytt mail. Alternativt så kan du på egen
            hand kopiera mailadressen och klistra in den i ett nytt mail.
          </ListItem>
          <ListItem number={2}>
            Gå in på{" "}
            <a
              href="https://writemail.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              writemail.ai
            </a>
            .
          </ListItem>
          <ListItem number={3}>
            Skriv eller klistra in 1-3 prompts (alltså instruktioner till
            ai-verktyget) i stora rutan. Vi har skrivit ihop ett gäng{" "}
            <a
              href="https://docs.google.com/document/d/1Hzs2dq4VsjORrQgkPL2ePiymn3-lqHf74GcT4oRKOBk/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              exempel
            </a>{" "}
            som du gärna får kopiera, men du kan såklart hitta på egna istället.
          </ListItem>
          <ListItem number={4}>
            Anpassa sedan ditt mail med hjälp av knapparna under stora rutan,
            efter tonläge, längd, språk etc., och tryck sen på “Generate My
            Email with Ai”
          </ListItem>
          <ListItem number={5}>
            När du är nöjd med din text: kopiera den, klistra in i ett nytt mail
            (din privata) och skicka iväg till den du önskar!
          </ListItem>
          <ListItem number={6}>
            Kom sen tillbaka hit för ett sista litet men viktigt steg.
          </ListItem>
        </div>
      </StickyContainer>
      <StickyContainer>
        <h2>Vem vill du skicka ett Folkbrev till?</h2>
        <h3>
          {"\n"}Listorna kommer uppdateras kontinuerligt. Skicka till flera i
          listan om du orkar.{"\n\n"}
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "0" : "32px",
          }}
        >
          <ContactCardContainer>
            {contacts.politiker.map((contact, index) => (
              <ContactOutreachCard
                key={index}
                name={contact.name}
                profession={contact.profession}
                email={contact.email}
              />
            ))}
          </ContactCardContainer>
          {isMobile && <div style={{ height: "8px" }} />}
          <ContactCardContainer>
            {contacts.media.map((contact, index) => (
              <ContactOutreachCard
                key={index}
                name={contact.name}
                profession={contact.profession}
                email={contact.email}
              />
            ))}
          </ContactCardContainer>
        </div>
      </StickyContainer>
      <StickyContainer>
        <h2>
          Markera vem eller vilka i listan du har skickat ett Folkbrev till.
        </h2>
        <h3>
          {"\n"}På så sätt kan brevskrivaren efter dig se hur många mail varje
          person i listan har fått, och skicka till dom som fått lite färre. Så
          får vi tillsammans så stor spridning som möjligt och når så många som
          möjligt.
          {"\n\n"}
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "0" : "32px",
          }}
        >
          <ContactCardContainer>
            {contacts.politiker.map((contact, index) => (
              <ContactSelectionCard
                key={index}
                name={contact.name}
                profession={contact.profession}
                email={contact.email}
              />
            ))}
          </ContactCardContainer>
          {isMobile && <div style={{ height: "8px" }} />}
          <ContactCardContainer>
            {contacts.media.map((contact, index) => (
              <ContactSelectionCard
                key={index}
                name={contact.name}
                profession={contact.profession}
                email={contact.email}
              />
            ))}
          </ContactCardContainer>
        </div>
      </StickyContainer>
      <StickyContainer>
        <h2>Tack för ditt engagemang!</h2>
        <h3>
          {"\n"}Vill du hjälpa oss bli fler? Dela den här sidan via sms och mail
          (inte sociala medier*) för att uppmana fler att göra sina röster
          hörda: kollegor, familj, vänner och bekanta – så många du kan och
          orkar!{"\n\n"}
        </h3>
        <h4>
          * Risken med att sprida Folkbrev i sociala medier är att du blir
          nedstängd av Meta, eller att fel personer (högerextrema och andra
          troll) hittar hit. Det vill vi inte, så var försiktig {"<"}3
        </h4>
      </StickyContainer>
    </div>
  );
}

export default App;
