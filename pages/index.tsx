import { GetStaticProps } from "next";
import { Glossary } from "../interfaces/";
import { glossaryData } from "../utils/glossary-data";
import { Flex, Box } from "@chakra-ui/core";
import GlossaryView from "../components/GlossaryView";

type Props = {
  terms: Glossary[];
};

const IndexPage = ({ terms }: Props) => {
  return (
    <Flex direction="column" justify="center" align="center" gridArea="main">
      <Box maxWidth="960px" margin="0 auto" paddingX={4} paddingY={4}>
        <GlossaryView terms={terms} />
      </Box>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const terms: Glossary[] = glossaryData;
  return { props: { terms } };
};

export default IndexPage;
