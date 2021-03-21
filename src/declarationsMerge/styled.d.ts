import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    border: string;
    text: string;
    icons: string;
    primary: string;
    contrastText: string;
  }
}
