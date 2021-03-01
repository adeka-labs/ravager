import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Footer
    </Text>
  </Box>
)

export default Footer
