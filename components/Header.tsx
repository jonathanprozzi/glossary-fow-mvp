import { Flex, Heading } from "@chakra-ui/core";

const Header: React.FC = () => {
  return (
    <Flex
      as="nav"
      direction="column"
      justify="center"
      align="center"
      height="8vh"
      w="100vw"
      bg="black"
      boxShadow="md"
      paddingY={8}
    >
      <Flex
        direction="row"
        justify="space-around"
        align="center"
        width={["100vw", "100vw", "80vw", "80vw"]}
        paddingX={[4, 4, 6, 8]}
      >
        <Heading as="h1" size="md" color="purple.50">
          Interactive Glossary
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
