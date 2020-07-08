import { useState } from "react";
import { Glossary } from "../interfaces";
import { PseudoBox, Box, Badge, Text, Button, Flex } from "@chakra-ui/core";

type Props = {
  term: Glossary;
};

const GlossaryCard = ({ term }: Props) => {
  const [showDefinition, setShowDefinition] = useState(false);

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
};

export default GlossaryCard;
