import { useState } from "react";
import { Flex, Box, ButtonGroup, Button } from "@chakra-ui/core";
import { Glossary } from "../interfaces/";
import GlossaryGrid from "../components/GlossaryGrid";

type Props = {
  terms: Glossary[];
};

const GlossaryView = ({ terms }: Props) => {
  const [filteredItems, setFilteredItems] = useState(terms);

  const handleFilterSelection = (filterTerm: string) => {
    setFilteredItems(
      terms.filter(
        (term) => term.group.toLowerCase() === filterTerm.toLowerCase()
      )
    );
  };

  const groupsList = [...new Set(terms.map((item) => item.group))];
  return (
    <Flex direction="column" justify="center" align="center" gridArea="main">
      <ButtonGroup>
        {groupsList.map((group, index) => (
          <Button key={index} onClick={() => handleFilterSelection(group)}>
            {group}
          </Button>
        ))}
        <Button onClick={() => setFilteredItems(terms)}>All</Button>
      </ButtonGroup>
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
          Showing {filteredItems.length} terms
        </Box>
        <GlossaryGrid terms={filteredItems} />
      </Box>
    </Flex>
  );
};

export default GlossaryView;
