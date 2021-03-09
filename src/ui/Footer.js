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
    <Text sx={{ fontSize: 14, display: "inline-block" }}>
      Copyright &copy; 2021 adeka.id
    </Text>
  </Box>
)

export default Footer
