import { useState } from "react";
import {
  Flex,
  Box,
  Select,
  InputGroup,
  InputRightElement,
  Input,
  Icon,
} from "@chakra-ui/core";
import { Glossary } from "../interfaces/";
import GlossaryGrid from "../components/GlossaryGrid";
import { RiFilter3Line } from "react-icons/ri";

type Props = {
  terms: Glossary[];
};

const GlossaryView = ({ terms }: Props) => {
  const [filteredItems, setFilteredItems] = useState(terms);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

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

  // useEffect(() => {
  //   const results = filteredItems.filter((term) =>
  //     term.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   results ? setFilteredItems(results) : setFilteredItems(filteredItems);
  // }, [searchTerm]);

  const groupsList = [...new Set(terms.map((item) => item.group))];
  console.log("search term", searchTerm);
  console.log("filtered items", filteredItems);

  return (
    <Flex direction="column" justify="center" align="center" gridArea="main">
      <Flex direction="row" justify="center" align="center" marginTop={4}>
        <InputGroup paddingRight={2} width="100%" borderColor="purple.100">
          <InputRightElement
            paddingRight={4}
            children={<Icon name="search" color="purple.400" />}
          />
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
            type="text"
            placeholder="Search for a term"
          />
        </InputGroup>
        <Select
          icon={RiFilter3Line}
          iconColor="purple.300"
          variant="outline"
          border="1px"
          borderColor="purple.100"
          onChange={(e) => {
            handleFilterChange(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="all">All</option>
          {groupsList.map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </Select>
      </Flex>
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
