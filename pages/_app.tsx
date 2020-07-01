import { AppProps } from "next/app";
import {
  ThemeProvider,
  theme,
  CSSReset,
  Flex,
  ColorModeProvider,
} from "@chakra-ui/core";

import SiteLayout from "../components/SiteLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Flex direction="column" align="center" justify="center">
        <CSSReset />
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
