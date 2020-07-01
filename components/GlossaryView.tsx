import { Flex, Box } from "@chakra-ui/core";
import GlossaryGrid from "../components/GlossaryGrid";
import { Glossary } from "../interfaces/";
import { glossaryData } from "../utils/glossary-data";
import { GetStaticProps } from "next";

const termsTest = [
  {
    id: 100,
    name: "(User) Profile",
    definition:
      "The public - facing information about yourself you put online for any program.",
    week: 1,
    group: "General",
  },
  {
    id: 101,
    name: "Cloud",
    definition:
      "Servers that are accessed online and hold data. This can serve as a back-up to a computer and prevent too much data saved to a physical device.",
    week: 1,
    group: "General",
  },
];

type Props = {
  terms: Glossary[];
};

const GlossaryView = ({ terms }: Props) => {
  return (
    <Flex direction="column" justify="center" align="center" gridArea="main">
      <Box maxWidth="960px" margin="0 auto" paddingX={4} paddingY={4}>
        <GlossaryGrid terms={termsTest} />
      </Box>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const terms: Glossary[] = glossaryData;
  return { props: { terms } };
};
export default GlossaryView;
