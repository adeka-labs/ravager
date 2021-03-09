import config from "../../blog.config"
import { MDXProvider } from "@mdx-js/react"
import { Box, Heading } from "theme-ui"
import Nav from "./Nav"

const Header = (props) => (
  <MDXProvider>
    <Box as="header" sx={{ textAlign: "center", pt: 4 }}>
      <Heading sx={{ fontSize: 4, pb: 2, px: 2 }} as="h1">
        {config.title}
      </Heading>
      {/* <Heading sx={{ pb: 2, px: [2, 2] }}>{config.subtitle}</Heading> */}
      <Nav />
    </Box>
  </MDXProvider>
)

export default Header
