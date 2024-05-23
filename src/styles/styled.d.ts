import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainText: string;
      darkBlueBackground: string;
      darkGreenBackground: string;
      lightButton: string;
      lighterBackground: string;
      lighterBackgroundOpacity: string;
      light: string;
    };
    typography: {
      mainFontFamily: string;
      titleFontFamily: string;
      superTitleSize: string;
      superSize: string;
      mainSize: string;
      titleSize: string;
      secondaryTitleSize: string;
      regularSize: string;
    };
  }
}
