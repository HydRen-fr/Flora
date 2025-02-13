// CountryPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { FlashCardArray } from "react-flashcards";

// Dimensions d'une flashcard (w x h): 600x338

const fr_alpes = [
  {
    id: 1,
    front: (
      <img
        src="/images/france/alpes/achillee_millefeuilles.png"
        alt="Achillée millefeuilles"
      />
    ),
    back: `
    - **Nom français** : Achillée millefeuilles
    - **Nom latin** : *Achillea millefolium*
    - **Toxique** : Non (peut provoquer des réactions allergiques chez certaines personnes)
    - **Fun fact** : L'achillée millefeuilles est utilisée depuis l'Antiquité pour ses propriétés médicinales, notamment pour aider à la cicatrisation des plaies.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 2,
    front: <img src="/images/france/alpes/arnica.png" alt="Arnica" />,
    back: `
    - **Nom français** : Arnica
    - **Nom latin** : *Arnica montana*
    - **Toxique** : Oui (surtout en grande quantité)
    - **Fun fact** : L'arnica est souvent utilisée dans des préparations homéopathiques et en application topique pour soulager les douleurs musculaires et les contusions.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 3,
    front: <img src="/images/france/alpes/aster.png" alt="Aster des Alpes" />,
    back: `
    - **Nom français** : Aster des Alpes
    - **Nom latin** : *Aster alpinus*
    - **Toxique** : Non
    - **Fun fact** : L'aster des Alpes est souvent utilisé en jardinage pour ajouter une touche de couleur vive aux paysages de montagne.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 4,
    front: (
      <img
        src="/images/france/alpes/campanule_barbue.png"
        alt="Campanule barbue"
      />
    ),
    back: `
    - **Nom français** : Campanule barbue
    - **Nom latin** : *Campanula barbata*
    - **Toxique** : Non
    - **Fun fact** : Elle est souvent utilisée dans les jardins pour attirer les pollinisateurs comme les abeilles et les papillons.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 5,
    front: <img src="/images/france/alpes/campanule.png" alt="Campanule" />,
    back: `
    - **Nom français** : Campanule
    - **Nom latin** : *Campanula spp.*
    - **Toxique** : Non
    - **Fun fact** : Les campanules sont connues pour leurs belles fleurs en forme de cloche et sont souvent utilisées pour embellir les jardins et les bordures.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 6,
    front: (
      <img
        src="/images/france/alpes/centauree_une_tete.png"
        alt="Centaurée à une tête"
      />
    ),
    back: `
    - **Nom français** : Centaurée à une tête
    - **Nom latin** : *Centaurea uniflora*
    - **Toxique** : Non
    - **Fun fact** : La centaurée à une tête se distingue par ses fleurs solitaires et vibrantes qui attirent de nombreux pollinisateurs dans les habitats de montagne.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 7,
    front: (
      <img src="/images/france/alpes/cirse_epineux.png" alt="Cirse épineux" />
    ),
    back: `
    - **Nom français** : Cirse épineux
    - **Nom latin** : *Cirsium eriophorum*
    - **Toxique** : Non
    - **Fun fact** : Le cirse épineux est souvent confondu avec d'autres espèces de chardons en raison de ses épines distinctives et de ses fleurs violettes éclatantes.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 8,
    front: (
      <img src="/images/france/alpes/cirse_laineux.png" alt="Cirse laineux" />
    ),
    back: `
    - **Nom français** : Cirse laineux
    - **Nom latin** : *Cirsium eriophorum*
    - **Toxique** : Non
    - **Fun fact** : Le cirse laineux est apprécié pour ses inflorescences duveteuses qui offrent un contraste frappant avec ses feuilles épineuses.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 9,
    front: (
      <img src="/images/france/alpes/colchique.png" alt="Colchique des Alpes" />
    ),
    back: `
    - **Nom français** : Colchique des Alpes
    - **Nom latin** : *Colchicum alpinum*
    - **Toxique** : Oui (hautement toxique si ingéré)
    - **Fun fact** : Le colchique des Alpes fleurit à la fin de l'été, apportant une touche de couleur vive aux paysages montagneux juste avant l'arrivée de l'hiver.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 10,
    front: (
      <img
        src="/images/france/alpes/digitale_pourpre.png"
        alt="Digitale pourpre"
      />
    ),
    back: `
    - **Nom français** : Digitale pourpre
    - **Nom latin** : *Digitalis purpurea*
    - **Toxique** : Oui (très toxique si ingéré)
    - **Fun fact** : La digitale pourpre est célèbre pour ses longues grappes de fleurs en forme de cloche qui attirent de nombreux pollinisateurs comme les abeilles et les papillons.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 11,
    front: (
      <img
        src="/images/france/alpes/doronic_autriche.png"
        alt="Doronic d'Autriche"
      />
    ),
    back: `
    - **Nom français** : Doronic d'Autriche
    - **Nom latin** : *Doronicum austriacum*
    - **Toxique** : Non
    - **Fun fact** : Le doronic d'Autriche est apprécié pour ses fleurs jaunes vives qui égayent les jardins de montagne dès le début du printemps.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 12,
    front: <img src="/images/france/alpes/edelweiss.png" alt="Edelweiss" />,
    back: `
    - **Nom français** : Edelweiss
    - **Nom latin** : *Leontopodium alpinum*
    - **Toxique** : Non
    - **Fun fact** : L'edelweiss est un symbole des montagnes européennes et est souvent associé à des légendes et traditions alpines.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 13,
    front: <img src="/images/france/alpes/epilobe.png" alt="Epilobe" />,
    back: `
    - **Nom français** : Épilobe
    - **Nom latin** : *Epilobium spp.*
    - **Toxique** : Non
    - **Fun fact** : L'épilobe est souvent utilisé dans les jardins pour sa capacité à attirer les pollinisateurs et à enrichir le sol.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 14,
    front: (
      <img src="/images/france/alpes/fausse_bruyere.png" alt="Fausse bruyère" />
    ),
    back: `
    - **Nom français** : Fausse bruyère
    - **Nom latin** : *Calluna vulgaris*
    - **Toxique** : Non
    - **Fun fact** : Fleur nationale de Norvège.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 15,
    front: (
      <img
        src="/images/france/alpes/gentiane_champetre.png"
        alt="Gentiane champêtre"
      />
    ),
    back: `
    - **Nom français** : Gentiane champêtre
    - **Nom latin** : *Gentiana campestris*
    - **Toxique** : Non
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 16,
    front: (
      <img src="/images/france/alpes/gentiane_jaune.png" alt="Gentiane jaune" />
    ),
    back: `
    - **Nom français** : Gentiane jaune
    - **Nom latin** : *Gentiana lutea*
    - **Toxique** : Oui (peut être toxique si ingéré en grande quantité, mais utilisée en médecine traditionnelle)
    - **Fun fact** : La gentiane jaune est renommée pour ses propriétés médicinales et son rôle dans la fabrication de liqueurs digestives.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 17,
    front: (
      <img
        src="/images/france/alpes/gentiane_printaniere.png"
        alt="Gentiane printanière"
      />
    ),
    back: `
    - **Nom français** : Gentiane printanière
    - **Nom latin** : *Gentiana verna*
    - **Toxique** : Non
    - **Fun fact** : La gentiane printanière est l'une des premières fleurs à apparaître au printemps dans les prairies alpines, annonçant la fin de l'hiver.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 18,
    front: (
      <img
        src="/images/france/alpes/grande_astrance.png"
        alt="Grande astrance"
      />
    ),
    back: `
    - **Nom français** : Grande astrance
    - **Nom latin** : *Astrantia major*
    - **Toxique** : Non
    - **Fun fact** : La grande astrance est souvent utilisée en bouquet pour ses fleurs étoilées et ses feuilles élégantes, ajoutant une touche de sophistication aux arrangements floraux.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 19,
    front: <img src="/images/france/alpes/linaigrette.png" alt="Linaigrette" />,
    back: `
    - **Nom français** : Linaigrette
    - **Nom latin** : *Eriophorum spp.*
    - **Toxique** : Non
    - **Fun fact** : La linaigrette est reconnaissable à ses inflorescences duveteuses, souvent comparées à des boules de coton flottantes dans les tourbières.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 20,
    front: (
      <img src="/images/france/alpes/mauve_musquee.png" alt="Mauve musquée" />
    ),
    back: `
    - **Nom français** : Mauve musquée
    - **Nom latin** : *Malva moschata*
    - **Toxique** : Non
    - **Fun fact** : La mauve musquée est appréciée pour ses fleurs délicates et parfumées qui attirent les pollinisateurs et ajoutent une touche de couleur douce aux jardins.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 21,
    front: <img src="/images/france/alpes/myosotis.png" alt="Myosotis" />,
    back: `
    - **Nom français** : Myosotis
    - **Nom latin** : *Myosotis spp.*
    - **Toxique** : Non
    - **Fun fact** : Le myosotis, souvent appelé "ne m'oublie pas", est célèbre pour ses petites fleurs bleues qui symbolisent la mémoire et l'amour éternel.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 22,
    front: (
      <img src="/images/france/alpes/orchis_sureau.png" alt="Orchis sureau" />
    ),
    back: `
    - **Nom français** : Orchis sureau
    - **Nom latin** : *Orchis sambucina*
    - **Toxique** : Non
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 23,
    front: <img src="/images/france/alpes/pensee.png" alt="Pensée" />,
    back: `
    - **Nom français** : Pensée
    - **Nom latin** : *Viola tricolor*
    - **Toxique** : Non
    - **Fun fact** : La pensée est célèbre pour ses fleurs aux couleurs vibrantes et est souvent utilisée en décoration culinaire pour sa beauté et son goût légèrement sucré.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 24,
    front: (
      <img
        src="/images/france/alpes/populage_marais.png"
        alt="Populage marais"
      />
    ),
    back: `
    - **Nom français** : Populage marais
    - **Nom latin** : *Caltha palustris*
    - **Toxique** : Non
    - **Fun fact** : Le populage marais est souvent trouvé dans les zones humides et les marais, où ses fleurs jaunes brillantes contrastent avec les environnements boueux.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 25,
    front: <img src="/images/france/alpes/pulsatille.png" alt="Pulsatille" />,
    back: `
    - **Nom français** : Pulsatille
    - **Nom latin** : *Pulsatilla spp.*
    - **Toxique** : Oui (peut être toxique si ingéré)
    - **Fun fact** : La pulsatille, également connue sous le nom d'anémone de prairie, est l'une des premières fleurs à apparaître au printemps, souvent à travers la neige.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 26,
    front: (
      <img src="/images/france/alpes/rhododendron.png" alt="Rhododendron" />
    ),
    back: `
    - **Nom français** : Rhododendron
    - **Nom latin** : *Rhododendron spp.*
    - **Toxique** : Oui (peut être toxique si ingéré, notamment pour les enfants et les animaux)
    - **Fun fact** : Les rhododendrons sont célèbres pour leurs magnifiques grappes de fleurs qui illuminent les jardins de printemps et d'été avec une palette de couleurs variées.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 27,
    front: (
      <img src="/images/france/alpes/trefle_commun.png" alt="Trèfle commun" />
    ),
    back: `
    - **Nom français** : Trèfle commun
    - **Nom latin** : *Trifolium repens*
    - **Toxique** : Non
    - **Fun fact** : Le trèfle commun est souvent utilisé comme plante fourragère et est aussi apprécié dans les jardins pour ses petites fleurs blanches et son rôle en tant que fixateur d'azote dans le sol.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 28,
    front: <p style={{ fontSize: "25px" }}>Continue comme ça !</p>,
    back: <p style={{ fontSize: "25px" }}>(✿◠‿◠)</p>,
    showBookMark: false,
    showTextToSpeech: false,
  },
];

const fr_bretagne = [
  {
    id: 1,
    front: (
      <img
        src="/images/france/bretagne/armerie_maritime.jpg"
        alt="Armérie maritime"
      />
    ),
    back: `
    - **Nom français** : Armérie maritime
    - **Nom latin** : *Armeria maritima*
    - **Toxique** : Non
    - **Fun fact** : L'armérie maritime est une plante résistante aux conditions côtières difficiles, y compris le vent salé et le sol pauvre.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 2,
    front: <img src="/images/france/bretagne/bruyere.jpg" alt="Bruyère" />,
    back: `
    - **Nom français** : Bruyère
    - **Nom latin** : *Calluna vulgaris*
    - **Toxique** : Non
    - **Fun fact** : Elle est traditionnellement utilisée pour fabriquer des balais.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 3,
    front: <img src="/images/france/bretagne/camelia.jpg" alt="Camélia" />,
    back: `
    - **Nom français** : Camélia
    - **Nom latin** : *Camellia japonica*
    - **Toxique** : Non
    - **Fun fact** : Le camélia est souvent associé à la culture asiatique et est utilisé dans la production de thé, notamment le thé vert et le thé noir.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 4,
    front: <img src="/images/france/bretagne/campanule.jpg" alt="Campanule" />,
    back: `
    - **Nom français** : Campanule
    - **Nom latin** : *Campanula*
    - **Toxique** : Non
    - **Fun fact** : Elles sont populaires dans les jardins pour leur longue période de floraison et leur capacité à attirer les pollinisateurs.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 5,
    front: <img src="/images/france/bretagne/cassiope.jpg" alt="Cassiope" />,
    back: `
    - **Nom français** : Cassiope
    - **Nom latin** : *Cassiope tetragona*
    - **Toxique** : Non
    - **Fun fact** : La cassiope est une plante des zones alpines et arctiques, souvent trouvée dans les tourbières et les sols acides.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 6,
    front: <img src="/images/france/bretagne/fougere.jpg" alt="Fougère" />,
    back: `
    - **Nom français** : Fougère
    - **Nom latin** : *Pteridophyta* (ou pour des espèces spécifiques comme *Dryopteris filix-mas*)
    - **Toxique** : Non
    - **Fun fact** : Les fougères sont des plantes anciennes qui existent depuis environ 360 millions d'années, avant l'apparition des fleurs.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 7,
    front: (
      <img
        src="/images/france/bretagne/gentiane_jaune.jpg"
        alt="Gentiane jaune"
      />
    ),
    back: `
    - **Nom français** : Gentiane jaune
    - **Nom latin** : *Gentiana lutea*
    - **Toxique** : Oui (peut être toxique en grande quantité)
    - **Fun fact** : La gentiane jaune est célèbre pour ses racines utilisées dans la fabrication de liqueurs amères.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 8,
    front: <img src="/images/france/bretagne/hortensia.jpg" alt="Hortensia" />,
    back: `
- **Nom français** : Hortensia
- **Nom latin** : *Hydrangea*
- **Toxique** : Oui
- **Fun fact** : Les fleurs de l'hortensia peuvent changer de couleur en fonction du pH du sol.
    `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 9,
    front: <img src="/images/france/bretagne/magnolia.jpg" alt="Magnolia" />,
    back: `
    - **Nom français** : Magnolia
    - **Nom latin** : *Magnolia*
    - **Toxique** : Non
    - **Fun fact** : Les magnolias sont des plantes anciennes qui ont évolué bien avant les abeilles, ce qui explique pourquoi leurs grandes fleurs parfumées sont adaptées pour attirer les coléoptères.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 10,
    front: (
      <img src="/images/france/bretagne/rhododendron.jpg" alt="Rhododendron" />
    ),
    back: `
    - **Nom français** : Azalées
    - **Nom latin** : *Rhododendron* (pour les azalées en général, souvent *Rhododendron* spp.)
    - **Toxique** : Oui
    - **Fun fact** : Les feuilles et les fleurs des azalées contiennent des substances toxiques appelées andromédotoxines, qui peuvent être dangereuses pour les animaux et les humains si ingérées en grande quantité.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 11,
    front: <img src="/images/france/bretagne/romarin.jpg" alt="Romarin" />,
    back: `
    - **Nom français** : Romarin
    - **Nom latin** : *Rosmarinus officinalis*
    - **Toxique** : Non (peut être irritant pour certaines personnes en grande quantité)
    - **Fun fact** : Le romarin est une herbe aromatique très prisée en cuisine méditerranéenne pour ses saveurs robustes.
        `,
    showBookMark: false,
    showTextToSpeech: false,
  },
  {
    id: 12,
    front: <p style={{ fontSize: "25px" }}>Continue comme ça !</p>,
    back: <p style={{ fontSize: "25px" }}>(✿◠‿◠)</p>,
    showBookMark: false,
    showTextToSpeech: false,
  },
];

const canada = [
  {
      id: 1,
      front: <img src="/images/canada/alstroemeria-pink.jpg" alt="Alstroemeria" />,
      back: `
      - **Common Name** : Alstroemeria
      - **Scientific Name** : *Alstroemeria spp.*
      - **Toxic** : No
      - **Fun Fact** : Alstroemeria, also known as the Peruvian lily, symbolizes friendship and devotion in the language of flowers.
          `,
      showBookMark: false,
      showTextToSpeech: false,
  },
  {
    id: 2,
    front: <img src="/images/canada/babiesbreath.jpg" alt="Baby's Breath" />,
    back: `
    - **Common Name** : Baby's Breath
    - **Scientific Name** : *Gypsophila spp.*
    - **Toxic** : No
    - **Fun Fact** : Baby's breath is often used as a filler in bouquets, providing a delicate, airy appearance.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 3,
    front: <img src="/images/canada/chrysanthemum-yellow.jpg" alt="Chrysanthemum" />,
    back: `
    - **Common Name** : Chrysanthemum
    - **Scientific Name** : *Chrysanthemum spp.*
    - **Toxic** : Yes (can cause skin irritation and is toxic if ingested by pets)
    - **Fun Fact** : Chrysanthemums are one of the most popular flowers in the world and are a symbol of autumn in many cultures.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 4,
    front: <img src="/images/canada/gerbera-daisy-salmon.jpg" alt="Gerbera Daisy" />,
    back: `
    - **Common Name** : Gerbera Daisy
    - **Scientific Name** : *Gerbera jamesonii*
    - **Toxic** : No
    - **Fun Fact** : Gerbera daisies are known for their bright, cheerful blooms and are often used to convey happiness and joy.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 5,
    front: <img src="/images/canada/gladiola-red.jpg" alt="Gladiola" />,
    back: `
    - **Common Name** : Gladiola
    - **Scientific Name** : *Gladiolus spp.*
    - **Toxic** : Yes (can cause allergic reactions and gastrointestinal issues if ingested)
    - **Fun Fact** : Gladiolas are often associated with strength of character and are commonly used in floral arrangements for formal events.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 6,
    front: <img src="/images/canada/liatris-purple.jpg" alt="Liatris" />,
    back: `
    - **Common Name** : Liatris
    - **Scientific Name** : *Liatris spicata*
    - **Toxic** : No
    - **Fun Fact** : Liatris, also known as blazing star, is popular for its tall spikes of purple flowers that attract butterflies and other pollinators.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 7,
    front: <img src="/images/canada/lily-white.jpg" alt="Lily" />,
    back: `
    - **Common Name** : Lily
    - **Scientific Name** : *Lilium spp.*
    - **Toxic** : Yes (highly toxic to cats, can cause kidney failure)
    - **Fun Fact** : Lilies are often associated with purity and refined beauty, making them a popular choice for weddings and funerals.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 8,
    front: <img src="/images/canada/lisianthus-pink.jpg" alt="Lisianthus" />,
    back: `
    - **Common Name** : Lisianthus
    - **Scientific Name** : *Eustoma grandiflorum*
    - **Toxic** : No
    - **Fun Fact** : Lisianthus flowers are known for their long vase life, often lasting up to two weeks when cut.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 9,
    front: <img src="/images/canada/matsumoto-aster-red.jpg" alt="Matsumoto Aster" />,
    back: `
    - **Common Name** : Matsumoto Aster
    - **Scientific Name** : *Callistephus chinensis*
    - **Toxic** : No
    - **Fun Fact** : Matsumoto asters are prized for their sturdy stems and vibrant colors, making them a favorite in cut flower arrangements.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 10,
    front: <img src="/images/canada/snapdragon-yellow.jpg" alt="Snapdragon" />,
    back: `
    - **Common Name** : Snapdragon
    - **Scientific Name** : *Antirrhinum majus*
    - **Toxic** : No
    - **Fun Fact** : Snapdragons are named for their dragon-like appearance and the way the flowers "snap" open when squeezed.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 11,
    front: <p style={{ fontSize: "25px" }}>Continue comme ça !</p>,
    back: <p style={{ fontSize: "25px" }}>(✿◠‿◠)</p>,
    showBookMark: false,
    showTextToSpeech: false,
  },
];

const russia = [
  {
    id: 1,
    front: <img src="/images/russia/Biebersteins-Crocus.jpg" alt="Bieberstein's Crocus" />,
    back: `
    - **Common Name** : Bieberstein's Crocus
    - **Scientific Name** : *Crocus speciosus*
    - **Toxic** : No
    - **Fun Fact** : Bieberstein's Crocus is known for its striking purple flowers that often bloom in the fall, adding vibrant color to autumn gardens.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 2,
    front: <img src="/images/russia/Golden-Root.jpg" alt="Golden Root" />,
    back: `
    - **Common Name** : Golden Root
    - **Scientific Name** : *Rhodiola rosea*
    - **Toxic** : No
    - **Fun Fact** : Golden Root is valued for its adaptogenic properties and has been used in traditional medicine to combat stress and fatigue.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 3,
    front: <img src="/images/russia/Pansy-Viola-Incisa.jpg" alt="Pansy" />,
    back: `
    - **Common Name** : Pansy
    - **Scientific Name** : *Viola tricolor*
    - **Toxic** : No
    - **Fun Fact** : Pansies are often used in gardening for their colorful blooms and are edible, making a beautiful addition to salads and desserts.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 4,
    front: <img src="/images/russia/Pink-Royal-Azalea-on-Thursd.jpg" alt="Royal Azalea" />,
    back: `
    - **Common Name** : Royal Azalea
    - **Scientific Name** : *Rhododendron schlippenbachii*
    - **Toxic** : Yes (can cause gastrointestinal distress if ingested)
    - **Fun Fact** : The Royal Azalea is celebrated in Korea, where its blooms signal the arrival of spring and are featured in cultural festivals.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 5,
    front: <img src="/images/russia/Sacred-Lotus.jpg" alt="Sacred Lotus" />,
    back: `
    - **Common Name** : Sacred Lotus
    - **Scientific Name** : *Nelumbo nucifera*
    - **Toxic** : No
    - **Fun Fact** : The Sacred Lotus is a symbol of purity and enlightenment in many cultures and can be found in ponds and water gardens around the world.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 6,
    front: <img src="/images/russia/Siberian-Fawn-Lily.jpg" alt="Siberian Fawn Lily" />,
    back: `
    - **Common Name** : Siberian Fawn Lily
    - **Scientific Name** : *Erythronium sibiricum*
    - **Toxic** : No
    - **Fun Fact** : The Siberian Fawn Lily is admired for its delicate, nodding flowers that appear early in the spring, often while snow is still on the ground.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 7,
    front: <img src="/images/russia/The-Fern-Leaf-Peony.jpg" alt="Fern Leaf Peony" />,
    back: `
    - **Common Name** : Fern Leaf Peony
    - **Scientific Name** : *Paeonia tenuifolia*
    - **Toxic** : No
    - **Fun Fact** : The Fern Leaf Peony is known for its finely divided, fern-like foliage and vibrant red flowers, making it a standout in any garden.
        `,
    showBookMark: false,
    showTextToSpeech: false,
},
  {
    id: 8,
    front: <p style={{ fontSize: "25px" }}>Continue comme ça !</p>,
    back: <p style={{ fontSize: "25px" }}>(✿◠‿◠)</p>,
    showBookMark: false,
    showTextToSpeech: false,
  },
];

const CountryPage = () => {
  const { countryCode } = useParams();

  return (
    <div>
      {countryCode === "France" && (
        <div>
          <h2>🏔️ Alpes ⛰️</h2>
          <FlashCardArray
            cards={fr_alpes}
            width="600px"
            backContentStyle={{
              fontSize: "22px",
            }}
            isMarkdown={true}
          />
          <h1>__________________________________________</h1>
          <h2>🌊 Bretagne ☔</h2>
          <FlashCardArray
            cards={fr_bretagne}
            width="600px"
            backContentStyle={{
              fontSize: "22px",
            }}
            isMarkdown={true}
          />
        </div>
      )}
        {countryCode === "Canada" && (
        <div>
          <FlashCardArray
            cards={canada}
            width="600px"
            backContentStyle={{
              fontSize: "22px",
            }}
            isMarkdown={true}
          />
        </div>
      )}
        {countryCode === "Russia" && (
        <div>
          <FlashCardArray
            cards={russia}
            width="600px"
            backContentStyle={{
              fontSize: "22px",
            }}
            isMarkdown={true}
          />
        </div>
      )}
    </div>
  );
};

export default CountryPage;
