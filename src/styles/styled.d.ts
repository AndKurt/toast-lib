// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    type: {
      info: string,
      warning: string,
      error: string,
      success: string,
    },
  
    textColor: {
      white: string,
      black: string,
    },
  }
}