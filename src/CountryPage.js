// CountryPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { FlashCardArray } from "react-flashcards";

const fr_alpes = [
  {
    id: 1,
    front: <img src="/images/france/alpes/arnica.jpeg" alt="Arnica" />,
    back: "Arnica, *Arnica montana*, toxique, vertus médicinales",
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 2,
    front: (
      <img
        src="/images/france/alpes/campanule_barbue.jpg"
        alt="Campanule barbue"
      />
    ),
    back: "Campanule barbue, *Campanula barbata*, non toxique",
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 3,
    front: "Continue comme ça !",
    back: "(✿◠‿◠)",
    showBookMark: false,
    showTextToSpeech: false,
  },
];

const fr_bretagne = [
  {
    id: 1,
    front: (
      <img
        src="/images/france/bretagne/armerie-maritime.jpg"
        alt="Armérie maritime"
      />
    ),
    back: "Armérie maritime, *Armeria maritima*, non toxique, tolérance aux climats extrêmes",
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 2,
    front: <img src="/images/france/bretagne/bruyere.jpg" alt="Bruyère" />,
    back: "Bruyère, *Calluna vulgaris*, non toxique, fort potentiel médicinal",
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 3,
    front: "Continue comme ça !",
    back: "(✿◠‿◠)",
    showBookMark: false,
    showTextToSpeech: false,
  },
];

const CountryPage = () => {
  const { countryCode } = useParams();

  return (
    <div>
      <h1>Country: {countryCode}</h1>
      &nbsp;
      {countryCode === "France" && (
        <div>
          <h2>Alpes</h2>
          <FlashCardArray
            cards={fr_alpes}
            width="600px"
            frontContentStyle={{
              fontSize: "25px",
            }}
            backContentStyle={{
              fontSize: "25px",
            }}
            isMarkdown={true}
          />
          <h2>Bretagne</h2>
          <FlashCardArray
            cards={fr_bretagne}
            width="600px"
            frontContentStyle={{
              fontSize: "25px",
            }}
            backContentStyle={{
              fontSize: "25px",
            }}
            isMarkdown={true}
          />
        </div>
      )}
    </div>
  );
};

export default CountryPage;
