import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-fenningerspitz";

const campingFenningerspitz: CampsiteConfig = {
  name: "Strandcamping Fenningerspitz",
  shortName: "Fenningerspitz",
  slug: "camping-fenningerspitz",
  ort: "Henndorf am Wallersee",
  region: "Salzburger Land",
  brandKind: "Strandcamping",
  see: "Wallersee",
  regionLong: "Salzburger Seenland · Wallersee · Österreich",

  heroVariant: "center",

  claim: "Camping mit eigenem Strand am Wallersee",
  claimEmphasis: "eigenem Strand",
  intro:
    "Familiärer Strandcampingplatz direkt am Wallersee: großzügige, parzellierte Stellplätze zwischen Wiese, Wald und Wasser — und ein eigener Badestrand, an dem dein Urlaub fünf Schritte hinter dem Vorzelt beginnt.",

  logo: { src: `${IMG}/logo.png`, alt: "Strandcamping Fenningerspitz Logo" },

  statement: {
    text: "Bei uns gehört der Strand zum Stellplatz — der Wallersee beginnt gleich hinter deinem Vorzelt.",
    emphasis: "gehört der Strand",
  },

  pillars: [
    {
      title: "Eigener Strand am Wallersee",
      text: "Der hauseigene Badestrand liegt unmittelbar am Platz — der Wallersee zählt zu den vier Seen mit Trinkwasserqualität im Salzburger Seenland.",
      image: { src: `${IMG}/strand-baden.webp`, alt: "Kinder springen vom Steg in den Wallersee am Strandcamping Fenningerspitz" },
    },
    {
      title: "Großzügige Stellplätze",
      text: "Rund 200 parzellierte Plätze auf weitläufigem Wiesengelände, viele mit leistungsfähigem Stromanschluss (16A) und Wasser.",
      image: { src: `${IMG}/stellplatz.webp`, alt: "Wohnmobil-Stellplatz im Grünen am Camping Fenningerspitz" },
    },
    {
      title: "Seit 1974 in Familienhand",
      text: "Gegründet von Johann und Elisabeth Brandstätter, heute in dritter Generation von Josef und Jaqueline geführt — Sohn Tobias hilft schon mit.",
      image: { src: `${IMG}/familie-brandstaetter.webp`, alt: "Familie Brandstätter, Gastgeber am Strandcamping Fenningerspitz" },
    },
  ],

  usps: [
    "Eigener Strand am Wallersee",
    "200 großzügige Stellplätze",
    "Strom (16A) & Wasser",
    "Hunde willkommen",
    "E-Bike- & Autoverleih",
  ],

  trust: {
    heading: "Darauf ist am Fenningerspitz Verlass",
    headingEmphasis: "Fenningerspitz",
    intro:
      "Seit 1974 empfängt dich hier dieselbe Familie — drei Generationen, die wissen, was Campingurlaub am See ausmacht: kurze Wege ans Wasser, faire Preise und ein Platz, an dem Kinder noch den ganzen Tag draußen sind.",
  },

  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-luftbild.webp`, alt: "Luftbild: Strandcamping Fenningerspitz direkt am Wallersee" },
  },

  camping: {
    heading: "Campingplatz am Wallersee",
    intro:
      "Vom Stellplatz an den Strand, vom Zelt bis zum Cube am Wasser — hier findest du Platz zum Ankommen, mit Strom, Sanitäranlagen und allem, was ein entspannter Campingtag braucht.",
    features: [
      {
        title: "Cube am Strand",
        text: "Schlafen mit Seeblick: der Cube steht direkt am Strand und ist für zwei Personen gemacht — Camping ganz ohne eigene Ausrüstung.",
        image: { src: `${IMG}/cube-am-strand.webp`, alt: "Cube am Strand mit Blick auf den Wallersee" },
      },
      {
        title: "Gepflegte Anlage & Sanitäranlagen",
        text: "Zwei getrennte Sanitäranlagen mit je fünf Duschen und zehn Waschtischen, Waschmaschine und Trockner sowie ein Kinderspielplatz — alles auf dem 50.000 m² großen Gelände direkt am Wallersee.",
        image: { src: `${IMG}/anlage.webp`, alt: "Luftbild der Campinganlage Strandcamping Fenningerspitz" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Wallersee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A1 Westautobahn bis zur Abfahrt Richtung Wallersee/Henndorf, dann den Schildern nach Fenning folgen — Salzburg liegt rund 20 Fahrminuten entfernt.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Salzburg Hauptbahnhof, von dort weiter mit Regionalbus oder Bahn ins Seenland nach Henndorf.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Flughafen Salzburg W. A. Mozart, von dort sind es etwa 25 Fahrminuten bis zum Platz.",
      },
    ],
  },

  galerie: {
    heading: "Unterwegs im Salzburger Seenland",
    headingEmphasis: "Seenland",
    intro:
      "Rund um den Platz warten Wander- und Radwege, vier Badeseen und weite Blicke über Hügel und Wälder — ein paar Eindrücke aus der Region.",
    tag: "Salzburger Seenland",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Strand",
    headingEmphasis: "am Strand",
    intro:
      "Wähle Platz-Kategorie und Zeitraum — Familie Brandstätter meldet sich persönlich mit deiner Verfügbarkeit. Reservierungen ab zwei Nächten.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatzgebühr Frühjahr/Herbst pro Nacht inkl. Strom & Warmwasser-Dusche, zzgl. € 8 je Erwachsener, Ortstaxe (€ 1,50) & Umweltabgabe (€ 2)",
    highlight: { title: "Direkt am Strand", text: "Vom See-Platz sind es nur wenige Schritte bis ins Wasser." },
    categories: [
      { id: "classic", label: "Classic-Platz", perNight: 9, perExtraGuest: 8 },
      { id: "comfort", label: "Comfort-Platz", perNight: 11, perExtraGuest: 8 },
      { id: "seeplatz", label: "See-Platz", perNight: 14, perExtraGuest: 8 },
      { id: "zelt", label: "Zelt-Platz", perNight: 8, perExtraGuest: 8 },
      { id: "cube", label: "Cube am Strand", perNight: 50 },
    ],
  },

  kontakt: {
    tel: "+43 6214 20 944",
    telHref: "tel:+43621420944",
    mail: "info@camping-fenningerspitz.at",
    adresse: "Fenning 120 · 5302 Henndorf am Wallersee · Salzburg",
    coords: { lat: 47.899526, lng: 13.167358 },
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Zelt-Platz", href: "#camping" },
      { label: "Cube am Strand", href: "#camping" },
    ]},
    { label: "Region", href: "#galerie" },
    { label: "Preise", href: "#booking" },
    { label: "Anfahrt", href: "#anreise" },
  ],
};

export default campingFenningerspitz;
