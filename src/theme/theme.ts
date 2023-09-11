import { createTheme } from "@mui/material/styles";
import { TryStatement } from "typescript";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
    caption1: React.CSSProperties;
    linkText: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h1: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
    caption1: React.CSSProperties;
    linkText: React.CSSProperties;
  }
  interface Palette {
    structural: Palette["primary"];
    greyColors: Palette["primary"];
    textColor: Palette["primary"];
  }
  interface PaletteOptions {
    structural?: PaletteOptions["primary"];
    greyColors?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
  }
  interface Colors {
    stroke2?: string;
    icon01?: string;
    icon02?: string;
    primary100?: string;
    primary300?: string;
    primary500?: string;
    lowEmphasis?: string;
    mediumEmphasis?: string;
    highEmphasis?: string;
    blue?: string;
    white?: string;
    cardHover?: string;
    buttonHover?: string;
    backgroundClr?: string;
    elevation2?: string;
  }
  interface PaletteColor extends Colors {}
  interface SimplePaletteColorOptions extends Colors {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    body3: true;
    linkText: true;
  }
}

export const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32],

  typography: {
    h1: {
      fontFamily: "Gerebra",
      fontSize: "24px",
      lineHeight: "40px"
    },
    body1: {
      fontFamily: "Gerebra",
      fontSize: "20px",
      lineHeight: "32px"
    },
    body2: {
      fontFamily: "Gerebra",
      fontSize: "17px",
      lineHeight: "24px"
    },
    body3: {
      fontFamily: "Gerebra",
      fontSize: "16px",
      lineHeight: "24px"
    },
    caption1: {
      fontFamily: "Gerebra",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "21px"
    },
    linkText: {
      fontFamily: "Gerebra",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "13.3px",
      fontStyle: "normal"
    }
  },
  palette: {
    primary: {
      main: "#7633FF",
      primary100: "#E4D6FF",
      primary300: "#9764FF",
      primary500: "#7633FF"
    },
    textColor: {
      main: "#FFFFFF",
      lowEmphasis: "#9F9DA3",
      mediumEmphasis: "#77767A",
      highEmphasis: "#141414"
    },
    structural: {
      main: "#FFFFFF",
      blue: "#F8F9FA",
      white: "#FFFFFF",
      cardHover: "#F3F2F5",
      buttonHover: "#F4EFFF"
    },
    greyColors: {
      main: "#FFFFFF",
      stroke2: "#E5E4E5",
      icon01: "#201F24",
      icon02: "#28272B",
      elevation2: "#2D2D30",
      backgroundClr: "#201F24"
    }
  }
});
