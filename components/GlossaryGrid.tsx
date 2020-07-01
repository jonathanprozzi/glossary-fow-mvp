import { Box, Grid } from "@chakra-ui/core";
import GlossaryCard from "./GlossaryCard";

const GlossaryGrid = ({ items }) => {
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
        {glossaryData.map((term) => (
          <>
            <GlossaryCard key={term.id} data={term} />
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default GlossaryGrid;
