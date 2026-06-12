import type { CampsiteConfig } from "../types";

/**
 * Strandcamping Fenningerspitz — Henndorf am Wallersee, Salzburger Seenland.
 * Inhalte zu 100 % aus der eigenen Quelle (raw/digest) abgeleitet. Bildbestand dünn:
 * nur 5 platzeigene Fotos waren brauchbar (siehe REPORT.md), der Rest war generisches
 * Stockmaterial bzw. ein Webcam-Standbild → bewusst schlanke, ehrliche Sektions-Belegung.
 */
const IMG = "/campsites/camping-fenningerspitz";

const fenningerspitz: CampsiteConfig = {
  name: "Strandcamping Fenningerspitz",
  shortName: "Fenningerspitz",
  slug: "camping-fenningerspitz",
  ort: "Henndorf am Wallersee",
  region: "Salzburger Land",
  brandKind: "Strandcamping",
  see: "Wallersee",
  regionLong: "Salzburger Seenland · Salzburger Land · Österreich",

  heroVariant: "center",

  claim: "Dein eigener Strand am Wallersee",
  claimEmphasis: "eigener Strand",
  emailDetail: "euer Familienbetrieb in dritter Generation",
  intro:
    "Familiär geführter Strandcamping direkt am Wallersee — mit eigenem Badestrand, großzügigen Stellplätzen im Grünen und vier Badeseen mit Trinkwasserqualität rundum. Hier verbringst du deinen Sommer am Wasser.",

  logo: { src: `${IMG}/logo-2a42699eb1.png`, alt: "Logo Strandcamping Fenningerspitz" },

  statement: {
    text: "Bei uns liegt der Wallersee nicht in der Nähe — er beginnt an deinem Stellplatz.",
    emphasis: "an deinem Stellplatz",
  },

  pillars: [
    {
      title: "Cube am Strand",
      text: "Schlafen mit Seeblick: Der Cube direkt am Ufer verbindet Glamping-Komfort mit dem Wallersee vor der Tür.",
      image: { src: `${IMG}/gallery-d367c280b9.webp`, alt: "Cube am Strand direkt am Wallersee" },
    },
    {
      title: "In dritter Generation",
      text: "1974 von Johann und Elisabeth Brandstätter gegründet, heute von Familie Brandstätter geführt — gelebte Gastfreundschaft über drei Generationen.",
      image: { src: `${IMG}/kids-6935f219cf.webp`, alt: "Familie Brandstätter, Gastgeber am Strandcamping Fenningerspitz" },
    },
    {
      title: "Platz im Grünen",
      text: "Rund 200 parzellierte Stellplätze auf weitläufigem Areal, jeder mit kräftiger 16-A-Stromversorgung — E-Bikes zum Erkunden gibt es direkt am Platz.",
      image: { src: `${IMG}/activity-da012229a2.webp`, alt: "Stellplatz im Grünen mit E-Bikes am Camping Fenningerspitz" },
    },
  ],

  usps: [
    "Eigener Badestrand",
    "Rund 200 Stellplätze",
    "Stromversorgung 16 A",
    "E-Bike-Verleih",
    "Hunde willkommen",
    "Spielplatz für Kinder",
  ],

  trust: {
    heading: "Darauf ist am Wallersee Verlass",
    headingEmphasis: "Wallersee",
    intro:
      "Seit 1974 dieselbe Familie, der eigene Strand am größten See des Salzburger Seenlandes und eine ruhige, naturnahe Lage — bei uns zählt, dass du vom ersten Tag an wirklich ankommst.",
  },

  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-73cd4b193b.webp`, alt: "Luftaufnahme vom Strandcamping Fenningerspitz am Wallersee" },
  },

  breather: {
    image: { src: `${IMG}/gallery-ab8ba06aaf.webp`, alt: "Der Campingplatz Fenningerspitz aus der Vogelperspektive" },
    line: "Vier Badeseen, ein Platz — mittendrin im Salzburger Seenland.",
  },

  // Bildarm: keine weiteren platzeigenen Fotos für ein 6er-Raster übrig → Sektion blendet sich aus.
  camping: {
    heading: "Alles für deinen Campingtag",
    intro: "Großzügige Stellplätze, moderne Sanitäranlagen und der See direkt vor der Tür.",
    features: [],
  },

  anreise: {
    heading: "Dein Weg an den Wallersee",
    modes: [
      { title: "Mit dem Auto", text: "Über die A1 Westautobahn, Abfahrt Wallersee, dann der Beschilderung nach Henndorf folgen — der Platz liegt direkt am Seeufer." },
      { title: "Mit der Bahn", text: "Nächster Bahnhof ist Seekirchen am Wallersee an der Westbahn; von dort sind es nur wenige Minuten an den See." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Salzburg liegt rund 25 Fahrminuten entfernt — ideal für die unkomplizierte Anreise." },
    ],
  },

  // Bildarm: keine vier ungenutzten platzeigenen Fotos für das Bento → Galerie blendet sich aus.
  galerie: {
    heading: "Sommer am Wallersee",
    headingEmphasis: "Sommer",
    intro: "Eindrücke vom Platz und vom See.",
    tag: "April bis Oktober",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Wallersee",
    headingEmphasis: "am Wallersee",
    intro: "Wähle Zeitraum, Platz und Personen — Familie Brandstätter meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtwert Nebensaison · Stellplatz inkl. 2 Erwachsene, Strom & Warmwasser-Dusche · zzgl. Ortstaxe (€ 1,50) & Mobilitätsabgabe (€ 0,50) je Erwachsener/Nacht, Umweltabgabe € 2",
    highlight: {
      title: "Direkt am Strand",
      text: "Vom Stellplatz sind es nur wenige Schritte ins Wasser des Wallersees.",
    },
    categories: [
      { id: "zelt", label: "Zeltplatz am Strand", perNight: 28.5, perExtraGuest: 9.5 },
      { id: "classic", label: "Classic-Platz", perNight: 31.5, perExtraGuest: 9.5 },
      { id: "comfort", label: "Comfort-Platz", perNight: 33.5, perExtraGuest: 9.5 },
      { id: "see", label: "See-Platz", perNight: 36.5, perExtraGuest: 9.5 },
      { id: "cube", label: "Cube am Strand", perNight: 65 },
    ],
  },

  kontakt: {
    tel: "+43 6214 20 944",
    telHref: "tel:+43621420944",
    mail: "info@camping-fenningerspitz.at",
    adresse: "Fenning 120 · 5302 Henndorf am Wallersee · Salzburg",
    coords: { lat: 47.8984707, lng: 13.1672206 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Strandcamping", href: "#top" },
    { label: "Preise", href: "#booking" },
    { label: "Anreise & Lage", href: "#anreise" },
  ],
};

export default fenningerspitz;
