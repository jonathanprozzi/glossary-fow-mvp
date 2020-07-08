import { useState } from "react";
import { Flex, Box, Select } from "@chakra-ui/core";
import { Glossary } from "../interfaces/";
import GlossaryGrid from "../components/GlossaryGrid";
import { RiFilter3Line } from "react-icons/ri";

type Props = {
  terms: Glossary[];
};

const GlossaryView = ({ terms }: Props) => {
  const [filteredItems, setFilteredItems] = useState(terms);

  const handleFilterChange = (filterTerm: string) => {
    if (filterTerm.toLowerCase() === "all") {
      setFilteredItems(terms);
    } else {
      setFilteredItems(
        terms.filter(
          (term) => term.group.toLowerCase() === filterTerm.toLowerCase()
        )
      );
    }
  };

  const groupsList = [...new Set(terms.map((item) => item.group))];
  return (
    <Flex direction="column" justify="center" align="center" gridArea="main">
      <Select
        icon={RiFilter3Line}
        variant="outline"
        marginTop={4}
        onChange={(e) => {
          console.log("filter selected:", e.target.value);
          handleFilterChange(e.target.value);
        }}
      >
        {groupsList.map((group) => (
          <option value={group}>{group}</option>
        ))}
        <option value="all">All</option>
      </Select>
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
