import { Flex } from "@chakra-ui/core";
import GlossaryCard from "../components/GlossaryCard";

const IndexPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" gridArea="main">
      <GlossaryCard />
    </Flex>
  );
};

export default IndexPage;
