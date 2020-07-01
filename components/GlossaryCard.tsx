import { useState } from "react";
import { PseudoBox, Box, Badge, Text, Button, Flex } from "@chakra-ui/core";

const GlossaryCard = () => {
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
        paddingLeft="4"
        paddingTop="4"
        textTransform="uppercase"
      >
        Term
      </Box>

      <Flex direction="column" align="center" justify="center" padding={4}>
        <Text
          color="gray.500"
          letterSpacing={["normal", "normal", "wide", "wide"]}
          margin="0 auto"
          paddingBottom={4}
        >
          {showDefinition
            ? "Definition | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptas expedita et ea eaque, fugit recusandae mollitia doloribus consectetur corrupti."
            : "Do your best to remember what this term means! Click the button to show the definition when you're ready."}
        </Text>
        <Box d="flex" alignItems="baseline">
          <Flex direction="row">
            <Badge rounded="md" marginRight="1" variantColor="purple">
              Group
            </Badge>
            <Badge rounded="md" marginLeft="1" variantColor="teal">
              Week
            </Badge>
          </Flex>
        </Box>
        <Button variantColor="purple" variant="outline" margin={4}>
          Show Definition
        </Button>
      </Flex>
    </PseudoBox>
  );
};

export default GlossaryCard;
