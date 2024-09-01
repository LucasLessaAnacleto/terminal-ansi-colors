type TRBG = [number, number, number];

type TColors = 
  | "red" | "darkRed" | "lightRed"
  | "green" | "darkGreen" | "lightGreen"
  | "blue" | "darkBlue" | "lightBlue"
  | "yellow" | "darkYellow" | "lightYellow"
  | "cyan" | "darkCyan" | "lightCyan"
  | "magenta" | "darkMagenta" | "lightMagenta"
  | "black" | "white" | "gray" | "darkGray" | "lightGray"
  | "orange" | "darkOrange" | "lightOrange"
  | "purple" | "darkPurple" | "lightPurple"
  | "brown" | "darkBrown" | "lightBrown"
  | "pink" | "darkPink" | "lightPink"
  | "navy"
  | "teal"
  | "olive"
  | "maroon"
  | "lime";

const colors: Record<TColors, TRBG> = {
  red: [255, 0, 0],
  darkRed: [139, 0, 0],
  lightRed: [255, 102, 102],
  
  green: [0, 255, 0],
  darkGreen: [0, 100, 0],
  lightGreen: [144, 238, 144],

  blue: [0, 0, 255],
  darkBlue: [0, 0, 139],
  lightBlue: [173, 216, 230],

  yellow: [255, 255, 0],
  darkYellow: [204, 204, 0],
  lightYellow: [255, 255, 153],

  cyan: [0, 255, 255],
  darkCyan: [0, 139, 139],
  lightCyan: [224, 255, 255],

  magenta: [255, 0, 255],
  darkMagenta: [139, 0, 139],
  lightMagenta: [255, 153, 255],

  black: [0, 0, 0],
  white: [255, 255, 255],

  gray: [128, 128, 128],
  darkGray: [64, 64, 64],
  lightGray: [192, 192, 192],

  orange: [255, 165, 0],
  darkOrange: [255, 140, 0],
  lightOrange: [255, 200, 124],

  purple: [128, 0, 128],
  darkPurple: [75, 0, 130],
  lightPurple: [216, 191, 216],

  brown: [165, 42, 42],
  darkBrown: [101, 67, 33],
  lightBrown: [210, 180, 140],

  pink: [255, 192, 203],
  darkPink: [255, 105, 180],
  lightPink: [255, 182, 193],

  navy: [0, 0, 128],
  teal: [0, 128, 128],
  olive: [128, 128, 0],
  maroon: [128, 0, 0],
  lime: [50, 205, 50],
};

function cl(color: TColors): TRBG | undefined{
    return colors[color] || undefined;
}
type TStyles =
  | "bold"
  | "dim"
  | "italic"
  | "underline"
  | "blink"
  | "rapidBlink"
  | "reverse"
  | "hidden"
  | "strikethrough"
  | "doubleUnderline"
  | "void";

const styleCodes: Record<TStyles, string> = {
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  blink: "\x1b[5m",
  rapidBlink: "\x1b[6m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
  strikethrough: "\x1b[9m",
  doubleUnderline: "\x1b[21m",
  void: ""
};

function getStyle(style?: TStyles): string {
  return styleCodes[style || "void"];
}
function strToTStyle(v?: string): TStyles | undefined{
    return ["bold", "dim", "italic", "underline", "blink", "rapidBlink", "reverse", "hidden", "strikethrough", "doubleUnderline", "void"].includes(v || "") ?
    v as TStyles : undefined;
}

function setColor(text: TRBG, bg: TRBG | 0, message: string, styleName?: TStyles): string;
function setColor(text: TRBG, message: string, styleName?: TStyles): string;

function setColor(text: TRBG, bgOrMessage: TRBG | string | 0, messageOrStyle?: string | TStyles, styleName?: TStyles): string {
    let bg: TRBG | 0 | undefined;
    let message: string = "";
    let style: string = "";
    if (typeof bgOrMessage === "string") {
        message = bgOrMessage;
        style = getStyle(strToTStyle(messageOrStyle));
    } else {
        bg = bgOrMessage;
        message = String(messageOrStyle);
        style = getStyle(styleName)
    }
    return `${style}\x1b[38;2;${text[0]};${text[1]};${text[2]}m${bg ? `\x1b[48;2;${bg[0]};${bg[1]};${bg[2]}m` : bg === 0 ? "" : "\x1b[49m"}${message}\x1b[0m`;
}

export { cl, setColor,  colors, TColors, TRBG, TStyles }