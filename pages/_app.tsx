import { AppProps } from "next/app";
import { ThemeProvider, CSSReset, Flex } from "@chakra-ui/core";

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
