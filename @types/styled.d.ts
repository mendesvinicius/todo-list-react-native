import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {
    mode: 'default';
    colors: {
      primary: string;
      secondary: string;
      dark: string;
      darkOpacity: string;
      textPrimary: string;
      textSecondary: string;
      textListPrimary: string;
      textListSecondary: string;
      yellow: string;
      gray: {
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        '800': string;
      };
    };
  }
}
