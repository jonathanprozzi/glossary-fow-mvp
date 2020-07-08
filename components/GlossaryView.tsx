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
        <Box
          as="h2"
          display="flex"
          flexDirection="column"
          flexGrow={2}
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="md"
          textTransform="uppercase"
          marginX={[2, 4, 10, 12]}
        >
          Showing {terms.length} terms
        </Box>
        <GlossaryGrid terms={terms} />
      </Box>
    </Flex>
  );
};

export default GlossaryView;
