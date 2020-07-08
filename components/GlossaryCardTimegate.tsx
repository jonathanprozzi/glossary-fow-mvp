import { useState } from "react";
import { Glossary } from "../interfaces";
import { PseudoBox, Box, Badge, Text, Button, Flex } from "@chakra-ui/core";
import { parse, isAfter } from "date-fns";

type Props = {
  term: Glossary;
};

const GlossaryCardTimegate = ({ term }: Props) => {
  const [showDefinition, setShowDefinition] = useState(false);
  // const [prefersTimegate, setPrefersTimegate] = useState(false);

  // TODO: find way to not hard code the dates
  const mapWeekToDate = (week: number) => {
    if (week === 1) {
      const tempDate = parse("7/1/2020", "MM/dd/yyyy", new Date());
      console.log("date after:", isAfter(Date.now(), tempDate));
      return isAfter(Date.now(), tempDate);
    }
    if (week === 2) {
      const tempDate = parse("7/20/2020", "MM/dd/yyyy", new Date());
      console.log("date after:", isAfter(Date.now(), tempDate));
      return isAfter(Date.now(), tempDate);
    }
    if (week === 3) {
      const tempDate = parse("7/27/2020", "MM/dd/yyyy", new Date());
      console.log("date after:", isAfter(Date.now(), tempDate));
      return isAfter(Date.now(), tempDate);
    }
    if (week === 4) {
      const tempDate = parse("8/3/2020", "MM/dd/yyyy", new Date());
      console.log("date after:", isAfter(Date.now(), tempDate));
      return isAfter(Date.now(), tempDate);
    }
    if (week === 5) {
      const tempDate = parse("8/10/2020", "MM/dd/yyyy", new Date());
      console.log("date after:", isAfter(Date.now(), tempDate));
      return isAfter(Date.now(), tempDate);
    }
  };

  if (mapWeekToDate(term.week) === true) {
    return (
      <PseudoBox
        width="100%"
        height="auto"
        maxW="md"
        overflow="hidden"
        rounded="lg"
        borderWidth="1px"
        bg="white"
        paddingY={4}
        paddingX={2}
      >
        <Flex
          direction="row"
          align="baseline"
          justify="center"
          paddingX={4}
          paddingTop={4}
        >
          <Box
            as="h3"
            display="flex"
            flexDirection="column"
            flexGrow={2}
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="md"
            textTransform="uppercase"
          >
            {term.name}
          </Box>
          <Box d="flex" alignItems="baseline">
            <Flex direction="row">
              <Badge
                rounded="md"
                marginRight="1"
                variantColor="purple"
                variant="outline"
              >
                {term.group}
              </Badge>
              <Badge
                rounded="md"
                marginLeft="1"
                variantColor="purple"
                variant="outline"
              >
                Week {term.week}
              </Badge>
            </Flex>
          </Box>
        </Flex>
        <Flex direction="column" align="center" justify="center" padding={4}>
          <Box
            height="150px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color="gray.500"
              letterSpacing={["normal", "normal", "wide", "wide"]}
              margin="0 auto"
              paddingBottom={4}
            >
              {showDefinition
                ? term.definition
                : `Do your best to remember what ${term.name} means!`}
            </Text>
          </Box>

          <Button
            variantColor="purple"
            variant="outline"
            onClick={() => setShowDefinition(!showDefinition)}
          >
            {!showDefinition ? "Show " : "Hide "} Definition
          </Button>
        </Flex>
      </PseudoBox>
    );
  }

  if (mapWeekToDate(term.week) === false) {
    return (
      <PseudoBox
        width="100%"
        height="auto"
        maxW="md"
        overflow="hidden"
        rounded="lg"
        borderWidth="1px"
        bg="gray.100"
        paddingY={4}
        paddingX={2}
      >
        <Flex
          direction="row"
          align="baseline"
          justify="center"
          paddingX={4}
          paddingTop={4}
        >
          <Box
            as="h3"
            display="flex"
            flexDirection="column"
            flexGrow={2}
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="md"
            textTransform="uppercase"
          >
            Check Soon!
          </Box>
          <Box d="flex" alignItems="baseline">
            <Flex direction="row">
              <Badge
                rounded="md"
                marginRight="1"
                variantColor="gray"
                variant="outline"
              >
                {term.group}
              </Badge>
              <Badge
                rounded="md"
                marginLeft="1"
                variantColor="gray"
                variant="outline"
              >
                Week {term.week}
              </Badge>
            </Flex>
          </Box>
        </Flex>
        <Flex direction="column" align="center" justify="center" padding={4}>
          <Box
            height="150px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color="gray.500"
              letterSpacing={["normal", "normal", "wide", "wide"]}
              margin="0 auto"
              paddingBottom={4}
            >
              This term will unlock during Week {term.week}.
            </Text>
          </Box>
        </Flex>
      </PseudoBox>
    );
  }
};

export default GlossaryCardTimegate;
