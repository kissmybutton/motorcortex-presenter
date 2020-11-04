const _COLOR = "color";
const nu = [
  "cm",
  "mm",
  "in",
  "px",
  "pt",
  "pc",
  "em",
  "ex",
  "ch",
  "rem",
  "vw",
  "vh",
  "vmin",
  "vmax",
  "%"
];
const _MEASUREMENT = "measurement";

export const intro = {
  $$strict: true,
  width: {
    optional: false,
    type: "number",
    units: nu
  },
  height: {
    optional: false,
    type: "number",
    units: nu
  },
  clientLogo: {
    optional: false,
    type: "string"
  },
  clientLogoWidth: {
    optional: false,
    type: "number",
    units: nu
  },
  compLogo: {
    optional: false,
    type: "string"
  },
  compLogoWidth: {
    optional: false,
    type: "number",
    units: nu
  },
  title: {
    optional: true,
    type: "string"
  },
  date: {
    optional: false,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: { type: _COLOR }
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  fontColor: {
    optional: true,
    type: _COLOR
  },
  mainColor: {
    optional: true,
    type: _COLOR
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};

export const SlideOneSVG = {

  $$strict: true,
  width: {
    optional: false,
    type: "number",
    units: nu
  },
  height: {
    optional: false,
    type: "number",
    units: nu
  },
  mainColor: {
    optional: true,
    type: _COLOR
  },
  clientLogo: {
    optional: false,
    type: "string"
  },
  clientLogoWidth: {
    optional: false,
    type: "number",
    units: nu
  },
  compLogo: {
    optional: false,
    type: "string"
  },
  compLogoWidth: {
    optional: false,
    type: "number",
    units: nu
  },
  title: {
    optional: true,
    type: "string"
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  textOne: {
    optional: false,
    type: "string"
  },
  textTwo: {
    optional: false,
    type: "string"
  },
  textThree: {
    optional: false,
    type: "string"
  },
  contentColor: {
    optional: true,
    type: _COLOR
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: { type: _COLOR }
  },
  bgColor: {
    optional: true,
    type: _COLOR
  },
  fontColor: {
    optional: true,
    type: _COLOR
  },
  contentTitle: {
    optional: false,
    type: "string"
  },
  app: {
    optional: false,
    type: "string"
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};



export const SlideTwo = {
  $$strict: true,
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  height: {
    optional: true,
    type: "number",
    min: 0
  },
  clientLogo: {
    optional: false,
    type: "string"
  },
  clientLogoWidth: {
    optional: true,
    type: "number",
    min: 0
  },
  compLogo: {
    optional: false,
    type: "string"
  },
  compLogoWidth: {
    optional: true,
    type: "number",
    min: 0
  },
  title: {
    optional: false,
    type: "string"
  },
  textOne:
  {
    optional: false,
    type: "string"
  },
  bgColor: { type: _COLOR },
  overlayColor: {
    optional: true,
    type: "array",
    items: { type: _COLOR }
  },
  fontColor: { type: _COLOR },
  contentColor: { type: _COLOR },
  speed: {
    optional: true,
    type: "number",
    min: 0
  },
  contentTitle: {
    optional: false,
    type: "string"
  },
  fonSize: {
    optional: true,
    type: "number",
    min: 0
  },
  app: {
    optional: false,
    type: "string"
  },
  bgColor: {
    optional: true,
    type: _COLOR
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  mainColor: {
    optional: true,
    type: _COLOR
  },
};


export const Technologies = {
  $$strict: true,
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  height: {
    optional: true,
    type: "number",
    min: 0
  },
  clientLogo: {
    optional: true,
    type: "string"
  },
  clientLogoWidth: {
    optional: true,
    type: "number",
    min: 0
  },
  compLogo: {
    optional: true,
    type: "string"
  },
  title: {
    optional: true,
    type: "string"
  },
  logos: {
    optional: true,
    type: "array",
    items: { type: "string" }
  },
  bgColor: {
    optional: true,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: { type: _COLOR }
  },
  fontColor: { type: _COLOR },
  contentColor: {
    optional: true,
    type: "string"
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  },
  contentTitle: {
    optional: true,
    type: "string"
  },
  fonSize: {
    optional: true,
    type: "number",
    min: 0
  },
  contentSubTitle: {
    optional: true,
    type: "string"
  },
  bgColor: {
    optional: true,
    type: _COLOR
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  mainColor: {
    optional: true,
    type: _COLOR
  },
};


export const Highlights = {
  $$strict: true,
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  height: {
    optional: true,
    type: "number",
    min: 0
  },
  clientLogo: {
    optional: true,
    type: "string"
  },
  clientLogoWidth: {
    optional: true,
    type: "number",
    min: 0
  },
  compLogo: {
    optional: true,
    type: "string"
  },

  title: {
    optional: true,
    type: "string"
  },
  app: {
    optional: false,
    type: "string"
  },
  bgColor: { type: _COLOR },
  overlayColor: {
    optional: true,
    type: "array",
    items: { type: _COLOR }
  },
  fontColor: { type: _COLOR },
  contentColor: { type: _COLOR },
  speed: {
    optional: true,
    type: "number",
    min: 0
  },
  contentTitle: {
    optional: true,
    type: "string"
  },
  fonSize: {
    optional: true,
    type: "number",
    min: 0
  },
  contentSubTitle: {
    optional: true,
    type: "string"
  },
  scroll: { type: "boolean" },
  bgColor: {
    optional: true,
    type: _COLOR
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  mainColor: {
    optional: true,
    type: _COLOR
  }
}