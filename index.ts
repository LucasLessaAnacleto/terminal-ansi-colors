import { setColor, cl, TRBG, TColors, TStyles } from "./color";

class StrColor extends String{
    _raw: string;
    _txt: TRBG = [255, 255, 255];
    _bg: TRBG | undefined;
    _style: TStyles | undefined;
    str: string;
    constructor(value: string, ctx?: {txt?: TRBG, bg?: TRBG, raw?: string, style?: TStyles}){
        super(value);
        this.str = value;
        this._raw = ctx?.raw ? ctx.raw : value;
        this._txt = ctx?.txt || this._txt;
        this._bg = ctx?.bg;
        this._style = ctx?.style;
    }
    txtRGB(rgb: TRBG): StrColor{
        let v: string;
        if(this._bg) v = setColor(rgb, this._bg, this._raw, this._style);
        else v = setColor(rgb, this._raw, this._style);
        this._txt = rgb;
        return new StrColor(v, { 
            txt: this._txt, 
            bg: this._bg,
            raw: this._raw,
            style: this._style 
        });
    }
    txtName(colorName: TColors): StrColor{
        let v: string;
        const rgb = cl(colorName) || cl("white")!;
        if(this._bg) v = setColor(rgb, this._bg, this._raw, this._style);
        else v = setColor(rgb, this._raw, this._style);
        this._txt = rgb;
        return new StrColor(v, { 
            txt: this._txt, 
            bg: this._bg,
            raw: this._raw,
            style: this._style 
        });
    }
    bgRGB(rgb: TRBG): StrColor{
        let v: string;
        if(this._txt) v = setColor(this._txt, rgb, this._raw, this._style);
        else v = setColor(rgb, this._raw, this._style);
        this._bg = rgb;
        return new StrColor(v, { 
            txt: this._txt, 
            bg: this._bg,
            raw: this._raw,
            style: this._style 
        });
    }
    bgName(colorName: TColors | "default"): StrColor{
        let rgb: TRBG | undefined;
        if(colorName !== "default")
            rgb = cl(colorName);
        const v = setColor(this._txt, rgb || 0, this._raw, this._style);
        this._bg = rgb;
        return new StrColor(v, { 
            txt: this._txt, 
            bg: this._bg,
            raw: this._raw,
            style: this._style 
        });
    }
    style(styleName: TStyles): StrColor{
        let v: string;
        this._style = styleName;
        if(this._bg) v = setColor(this._txt, this._bg, this._raw, this._style );
        else v = setColor(this._txt, this._raw, this._style);
        return new StrColor(v, { 
            txt: this._txt, 
            bg: this._bg,
            raw: this._raw,
            style: this._style 
        })
    }
}

export function c(message: string){
    return new StrColor(message);
}