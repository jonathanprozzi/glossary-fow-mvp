import Header from "./Header";
import { Box } from "@chakra-ui/core";

const SiteLayout: React.FC = ({ children }) => {
  return (
    <Box overflowX="hidden" margin="0 auto" bg="purple.50" minHeight="100vh">
      <Header />
      <Box minHeight="90vh">{children}</Box>
    </Box>
  );
};

export default SiteLayout;
