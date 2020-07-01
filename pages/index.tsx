import { Flex, Box } from "@chakra-ui/core";
import GlossaryCard from "../components/GlossaryCard";

const IndexPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" gridArea="main">
      <Box maxWidth="960px" margin="0 auto" paddingX={4} paddingY={4}>
        <GlossaryCard />
      </Box>
    </Flex>
  );
};

export default IndexPage;
