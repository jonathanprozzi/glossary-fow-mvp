import { GetStaticProps } from "next";
import { Flex, Box } from "@chakra-ui/core";
import { Glossary } from "../interfaces/";
import GlossaryGrid from "../components/GlossaryGrid";

type Props = {
  terms: Glossary[];
};

const GlossaryView = ({ terms }: Props) => {
  return (
    <Flex direction="column" justify="center" align="center" gridArea="main">
      <Box
        maxWidth="960px"
        margin="0 auto"
        paddingX={[1, 2, 4, 8]}
        paddingY={4}
      >
        <GlossaryGrid terms={terms} />
      </Box>
    </Flex>
  );
};

export default GlossaryView;
