import { Box, Grid } from "@chakra-ui/core";
import { Glossary } from "../interfaces";
import GlossaryCard from "./GlossaryCard";

// TODO: troubleshoot why key isnt being detected as valid

type Props = {
  terms: Glossary[];
};

const GlossaryGrid = ({ terms }: Props) => {
  return (
    <Box marginY={4} marginX={[2, 4, 10, 12]}>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={6}
      >
        {terms.map((term) => (
          <>
            <GlossaryCard key={term.id} term={term} />
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default GlossaryGrid;
